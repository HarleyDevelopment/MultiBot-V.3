/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  

*/

const disbut = require('discord-buttons')

module.exports = {
    name: 'website',
    execute(message, args, client, Discord) {

        const noConfig = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` **``Website`` Command disabled via config!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

        if (client.config.useWebsiteCommand !== true) return message.channel.send(noConfig)

        if (client.config.deleteCommands == true) {
            message.delete();
        }

        const DiscordEmbed = new Discord.MessageEmbed()
        .setAuthor(`Our Website`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(client.config.embedColour)
        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);


        const websiteLinks = new disbut.MessageButton()
            .setStyle(`url`)
            .setLabel(`Visit Our Website`)
            .setURL(client.config.websiteLink);
        message.channel.send(DiscordEmbed, websiteLinks)
    }
}