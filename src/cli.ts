#!/usr/bin/env node
import * as fs from 'fs'
import { getPackage, getGitignore, getReadme, getScript } from './builders'
import { exec } from 'child_process'

import logSymbols from 'log-symbols'
import validate from 'validate-npm-package-name'
import qoa from 'qoa'

const log = console.log

log('Welcome to the Discord Bot Creator !')

interface Question {
  type: string,
  query: string,
  handle: string
}

interface Answer {
  botName: string,
  token: string
}
const questions: Question[] = [
  {
    type: 'input',
    query: 'What will be your bot\'s name ?',
    handle: 'botName'
  },
  {
    type: 'secure',
    query: 'Enter your Discord\'s token (press enter for empty)',
    handle: 'token'
  }
]

qoa.prompt(questions).then((answer: Answer) => {
  const validated = validate(answer.botName)

  if (validated.errors !== undefined) {
    validated.errors.forEach((error: any) => {
      log(`${logSymbols.error} ${error}`)
    })
    return
  }

  const dir = answer.botName
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
    log(`${logSymbols.info} Creating new folder...`)
    fs.writeFile(`${dir}/package.json`, getPackage(dir), err => {
      if (err)
        return log(`${logSymbols.error} Error at creating package.json`)
    })

    log(`${logSymbols.info} Creating bot.js...`)
    fs.writeFile(`${dir}/bot.js`, getScript(answer.token, dir), err => {
      if (err)
        return log(`${logSymbols.error} Error at bot.js creation`)
    })

    log(`${logSymbols.info} Generating .gitignore...`)
    fs.writeFile(`${dir}/.gitignore`, getGitignore(), err => {
      if (err)
        return log(`${logSymbols.error} Error at .gitignore creation`)
    })

    log(`${logSymbols.info} Writing README.md...`)
    fs.writeFile(`${dir}/README.md`, getReadme(dir), err => {
      if (err)
        return log(`${logSymbols.error} Error at README creation`)
    })

    log(`${logSymbols.info} Installing dependencies...`)
    exec(`cd ${dir} && npm install`, (err, stdout, stderr) => {
      log(`${logSymbols.success} Done!`)
    })
  }
})
