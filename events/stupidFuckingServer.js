const Discord = require(`discord.js`)
const chalk = require('chalk');


module.exports = {
    name: 'guildCreate',
    execute(message, client, guild) {

        

        if(guild.id !== client.config.guildID) {
            console.log(chalk.red(`THIS IS A MANUAL CRASH, AND IS MEANT TO HAPPEN!\nThis bot only supports one server, please abide by that!\nIf incorrect check config!`))
            client.guilds.cache.get(guild.id).leave()
        }
    }
}