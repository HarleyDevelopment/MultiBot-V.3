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
    name: 'announce',
    async execute(message, args, client, Discord) {

        if (client.config.useAnnouncements == true) {

            const per = client.config.announcePerms
            if (message.member.roles.cache.some(h => per.includes(h.id))) {

                if (client.config.deleteCommands == true) {
                    message.delete();
                }


                const noMessage = new Discord.MessageEmbed().setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                })).setColor('RED').setDescription("``❌`` **You must provide something to announce!**").setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);


                const messageText = args.join(" ");
                if (!messageText) return message.channel.send(noMessage)

                const announcementEmbed = new Discord.MessageEmbed().setAuthor(`Notification From ${message.author.username}`, message.author.displayAvatarURL({
                    dynamic: true
                })).setColor(client.config.embedColour).setDescription(messageText).setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                message.channel.send(announcementEmbed);



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
            const disabledConfig = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **``announcements`` command disabled via config!**")
                .setFooter(`©️ ` + client.config.serverCopyright, client.config.serverIcon)
            message.channel.send(disabledConfig).then(embed => {
                embed.delete({
                    timeout: 5000
                })
            })
        }
    }
}