#!/usr/bin/env node

const fs = require('fs')
const inquirer = require('inquirer')
const {
    exec
} = require('child_process')
const logSymbols = require('log-symbols')
const validate = require("validate-npm-package-name")

const builders = require('./builders')
const log = console.log;

log('Welcome to the Discord Bot Creator !')

const questions = [{
        type: 'input',
        name: 'botName',
        message: 'What will be your bot name ?'
    },
    {
        type: 'password',
        name: 'token',
        message: 'Enter your Discord token'
    }
]

inquirer.prompt(questions).then(answer => {
    const validated = validate(answer.botName)

    if (validated.errors !== undefined) {
        validated.errors.forEach(error => {
            log(`${logSymbols.error} ${error}`)
        })
        return
    }

    let dir = answer.botName
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
        log(`${logSymbols.info} Creating new folder...`)
        fs.writeFile(`${dir}/package.json`, builders.getPackage(dir), err => {
            if (err)
                return log(`${logSymbols.error} Error at creating package.json`)
        })

        log(`${logSymbols.info} Creating bot.js...`)
        fs.writeFile(`${dir}/bot.js`, builders.getScript(answer.token, dir), err => {
            if (err)
                return log(`${logSymbols.error} Error at bot.js creation`)
        })

        log(`${logSymbols.info} Generating .gitignore...`)
        fs.writeFile(`${dir}/.gitignore`, builders.getGitignore(dir), err => {
            if (err)
                return log(`${logSymbols.error} Error at .gitignore creation`)
        })

        log(`${logSymbols.info} Writing README.md...`)
        fs.writeFile(`${dir}/README.md`, builders.getReadme(dir), err => {
            if (err)
                return log(`${logSymbols.error} Error at README creation`)
        })

        log(`${logSymbols.info} Installing dependencies...`)
        exec(`cd ${dir} && npm install`, (err, stdout, stderr) => {
            log(`${logSymbols.success} Done!`)
        })
    }
})