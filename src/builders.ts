export function getPackage(dirName: string) {
  return `{
    	"name": "${dirName}",
    	"version": "0.0.1",
    	"description": "Bot created with create-discord-bot CLI",
    	"main": "bot.js",
      "author": "create-discord-bot",
      "scripts": {
        "start:dev": "nodemon bot.js"
      },
    	"dependencies": {
        	"discord.js": "^11.3.2"
      },
      "devDependencies": {
        "nodemon": "latest"
      }
	}`
}

export function getScript(token: string, botName: string) {
  const tokenValue = token.length > 0 ? token : 'your-token-from-discord-api'
  return `/* ${botName} generated with create-discord-bot CLI */
    const Discord = require('discord.js')
	const client = new Discord.Client()
    client.on('ready', () => {
	    console.log('Bot is ready! 🤖')
    })
    client.login('${tokenValue}');`
}

export function getReadme(botName: string) {
  return `# ${botName}
		Discord Bot generated with [create-discord-bot](https://github.com/HZooly/create-discord-bot)

		To get the Bot invitation link, you can use [discord-bot-invitation](https://github.com/HZooly/discord-bot-invitation)
	`
}

export function getGitignore() {
  return '/node_modules'
}
