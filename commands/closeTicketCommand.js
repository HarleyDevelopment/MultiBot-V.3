/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  

*/

const chalk = require('chalk')

module.exports = {
    name: 'close',
    execute(message, args, client, Discord) {

        const noConfig = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` **This command can only be ran in a ticket!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);


        if (message.channel.parentID !== client.config.ticketCatergory) return message.channel.send(noConfig);


        const per = client.config.closeTicketsPerms
        if (message.member.roles.cache.some(h => per.includes(h.id))) {

            if(client.config.deleteCommands == true) {
                message.delete();
            }

            const ticket_channel = message.channel.id;
            const channel = message.guild.channels.cache.get(ticket_channel);

            const closing = new Discord.MessageEmbed()
                .setAuthor(`SUCCESS`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('GREEN')
                .setDescription(`**Your Ticket is closing!**`)
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                message.channel.send(closing)
                setTimeout(() => channel.delete(), 5000);



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


    }
}