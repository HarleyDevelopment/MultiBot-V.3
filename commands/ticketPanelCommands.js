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
    name: 'ticket-panel',
    execute(message, args, client, Discord) {
        if (client.config.useTicketSystem == true) {
            if (client.config.deleteCommands == true) {
                message.delete()
            }

            const per = client.config.ticketPanelPerms
            if (message.member.roles.cache.some(h => per.includes(h.id))) {


                const embed = new Discord.MessageEmbed()
                    .setAuthor(`Ticket Panel`, message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setDescription(`To open a ticket and contact support, do the following!\n\`\`\`${client.config.botPrefix}new\`\`\``)
                    .setColor(client.config.embedColour)
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                message.channel.send(embed)
            } else {
                const noPermissions = new Discord.MessageEmbed()
                    .setAuthor(`ERROR`, message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor('RED')
                    .setDescription("``❌`` **You do not have the required permissions to do this!**")
                    .setFooter(`©️ ` + client.config.serverCopyright, client.config.serverIcon)
                message.channel.send(noPermissions)
            }
        } else {
            const noConfig = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **``Tickets`` Command disabled via config!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(noConfig)
        }
    }
}