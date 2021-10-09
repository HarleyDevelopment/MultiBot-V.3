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
    name: 'rename',
    execute(message, args, client, Discord) {


        const noTicket = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` **This command can only be ran in a ticket!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

        if (message.channel.parentID !== client.config.ticketCatergory) return message.channel.send(noTicket);

        const per = client.config.renameTicketsPerms
        if (message.member.roles.cache.some(h => per.includes(h.id))) {

            if(client.config.deleteCommands == true) {
                message.delete();
            }


            const noName = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **You must provide some text to re-name the ticket too!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            const newName = args.join("-");
            if (!newName) return message.channel.send(noName)
            const TicketName = 'ticket-' + newName

            const successEmbed = new Discord.MessageEmbed()
                .setAuthor(`SUCCESS`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('GREEN')
                .setDescription(`\`\`✅\`\` **You've renamed this ticket to \`\`${TicketName}\`\`!**`)
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(successEmbed);
            message.channel.setName(TicketName)

        } else {
            const noPerms = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **You do not have the required permissions to do this!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(noPerms)
        }
    }
}