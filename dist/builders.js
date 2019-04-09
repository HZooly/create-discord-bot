"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPackage(dirName) {
    return "{\n    \"name\": \"" + dirName + "\",\n    \"version\": \"0.0.1\",\n    \"description\": \"Bot created with create-discord-bot CLI\",\n    \"main\": \"bot.js\",\n    \"author\": \"create-discord-bot\",\n    \"dependencies\": {\n        \"discord.js\": \"^11.3.2\"\n    }\n}";
}
exports.getPackage = getPackage;
function getScript(token, botName) {
    var tokenValue = token.length > 0 ? token : 'your-token-from-discord-api';
    return "/* " + botName + " generated with create-discord-bot CLI */\nconst Discord = require('discord.js')\nconst client = new Discord.Client()\nclient.on('ready', () => {\nconsole.log('Bot is ready!')\n})\nclient.login('" + tokenValue + "');";
}
exports.getScript = getScript;
function getReadme(botName) {
    return "# " + botName + "\nDiscord Bot generated with [create-discord-bot](https://github.com/HZooly/create-discord-bot)\n\nTo get the Bot invitation link, you can use [discord-bot-invitation](https://github.com/HZooly/discord-bot-invitation)\n";
}
exports.getReadme = getReadme;
function getGitignore() {
    return '/node_modules';
}
exports.getGitignore = getGitignore;
//# sourceMappingURL=builders.js.map