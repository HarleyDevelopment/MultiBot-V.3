/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  

*/

const chalk = require('chalk');


module.exports = {
    name: 'suggest',
    execute(message, args, client, Discord) {

        const disabledConfig = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` **``Suggestions`` Command disabled via config!**")
            .setFooter(`©️ ` + client.config.serverCopyright, client.config.serverIcon)

        if (client.config.useSuggestions !== true) return message.channel.send(disabledConfig);

        const wrongChannel = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` **This is not the suggestions channel!**")
            .setFooter(`©️ ` + client.config.serverCopyright, client.config.serverIcon)


        if (message.channel.id !== client.config.suggestASuggestionChannelID) return message.channel.send(wrongChannel)

        if (client.config.deleteCommands == true) {
            message.delete()
        }


        const noText = new Discord.MessageEmbed()
            .setAuthor('ERROR', message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` **You must provide something to suggest!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

        const text = args.join(" ");
        if (!text) return message.channel.send(noText)

        const suggestionCommand = new Discord.MessageEmbed()
            .setAuthor(`Suggestion From ${message.author.username}`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor(client.config.embedColour)
            .setDescription(`\`\`\`${text}\`\`\``)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

        const channel = client.channels.cache.get(client.config.suggestionsChannelID)
        if(!channel) return console.log(chalk.red(`The Channel ID for the suggestions command is not set/found. Please re-config!`))

        channel.send(suggestionCommand).then(msg => {
            msg.react("👍")
            msg.react("👎")
        })

        const pp = new Discord.MessageEmbed()
        .setAuthor(`SUCCESS`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor('GREEN')
        .setDescription("``✅`` **Suggestion sent!**")
        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
        message.channel.send(pp).then(nri => {
            nri.delete({ timeout: 5000 })
        })

    }
}