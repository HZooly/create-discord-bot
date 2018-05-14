#!/usr/bin/env node

const fs = require('fs');
const inquirer = require('inquirer')
const {
    exec
} = require('child_process');

const builders = require('./builders')

console.log('Welcome to the Discord Bot Creator !')

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
    let dir = answer.botName;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
        console.log('Creating new folder...')
        fs.writeFile(`${dir}/package.json`, builders.getPackage(dir), err => {
            if (err)
                return console.log('Error at creating package.json')
        })

        console.log('Creating bot.js...')
        fs.writeFile(`${dir}/bot.js`, builders.getScript(answer.token, dir), err => {
            if (err)
                return console.log('Error at bot.js creation')
        })

        console.log('Writing README.md')
        fs.writeFile(`${dir}/README.md`, builders.getReadme(dir), err => {
            if(err)
                return console.log('Error at README creation')
        })

        console.log('Installing dependencies...')
        exec(`cd ${dir} && npm install`, (err, stdout, stderr) => {
            console.log('Done!')
        })
    }
})
