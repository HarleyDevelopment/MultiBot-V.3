/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  

*/


module.exports = {
    name: 'tos',
    execute(message, args, client, Discord) {
        if(client.config.useTOScommand == true) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.config.guildName}'s TOS!`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(client.config.embedColour)
            .setDescription(client.config.TermsOfService)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(embed)
        } else {
            const noConfig = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('RED')
            .setDescription("``❌`` **``TOS`` Command disabled via config!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(noConfig)
        }
    }
}