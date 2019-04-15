"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPackage(dirName) {
    return "{\n    \t\"name\": \"" + dirName + "\",\n    \t\"version\": \"0.0.1\",\n    \t\"description\": \"Bot created with create-discord-bot CLI\",\n    \t\"main\": \"bot.js\",\n      \"author\": \"create-discord-bot\",\n      \"scripts\": {\n        \"start:dev\": \"nodemon bot.js\"\n      },\n    \t\"dependencies\": {\n        \t\"discord.js\": \"^11.3.2\"\n      },\n      \"devDependencies\": {\n        \"nodemon\": \"latest\"\n      }\n\t}";
}
exports.getPackage = getPackage;
function getScript(token, botName) {
    var tokenValue = token.length > 0 ? token : 'your-token-from-discord-api';
    return "/* " + botName + " generated with create-discord-bot CLI */\n    const Discord = require('discord.js')\n\tconst client = new Discord.Client()\n    client.on('ready', () => {\n\t    console.log('Bot is ready! \uD83E\uDD16')\n    })\n    client.login('" + tokenValue + "');";
}
exports.getScript = getScript;
function getReadme(botName) {
    return "# " + botName + "\n\t\tDiscord Bot generated with [create-discord-bot](https://github.com/HZooly/create-discord-bot)\n\n\t\tTo get the Bot invitation link, you can use [discord-bot-invitation](https://github.com/HZooly/discord-bot-invitation)\n\t";
}
exports.getReadme = getReadme;
function getGitignore() {
    return '/node_modules';
}
exports.getGitignore = getGitignore;
//# sourceMappingURL=builders.js.map