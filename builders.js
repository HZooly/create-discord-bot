module.exports = {
    getPackage: function (dirName) {
        return `{
    "name": "${dirName}",
    "version": "0.0.1",
    "description": "Bot created with create-discord-bot CLI",
    "main": "cli.js",
    "author": "create-discord-bot",
    "dependencies": {
        "discord.js": "^11.3.2"
    }
}`
    },

    getScript: function (token, botName)  {
        return `/* ${botName} generated with create-discord-bot CLI */
const Discord = require('discord.js')
const client = new Discord.Client()
client.on('ready', () => {
    console.log('Bot is ready!')
})
client.login('${token}');`
    },

    getReadme: function (botName) {
        return `# ${botName}
Discord Bot generated with [create-discord-bot](https://github.com/HZooly/create-discord-bot)`
    },

    getGitignore: function () {
        return '/node_modules'
    }
}