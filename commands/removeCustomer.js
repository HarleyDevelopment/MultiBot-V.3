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
    name: 'remove-customer',
    execute(message, args, client, Discord) {
        if (client.config.useRemoveCustomerCommand == true) {


            const per = client.config.removeCustomerPerms
            if (message.member.roles.cache.some(h => per.includes(h.id))) {

                if (client.config.deleteCommands == true) {
                    message.delete();
                }

                const embed = new Discord.MessageEmbed()
                    .setAuthor(`ERROR`, message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor('RED')
                    .setDescription("``❌`` **Please include a member to remove customer from!**")
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

                const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
                if (!user) return message.channel.send(embed);

                const embed4 = new Discord.MessageEmbed()
                    .setAuthor(`ERROR`, message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor('RED')
                    .setDescription("``❌`` **User is not a customer!**")
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

                if (!user.roles.cache.has(client.config.customerRole)) return message.channel.send(embed4);

                const successEmbed = new Discord.MessageEmbed()
                    .setAuthor(`SUCCESS`, message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor('GREEN')
                    .setDescription("``✅`` **You have removed the customer role from this member!**")
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                message.channel.send(successEmbed);
                user.roles.remove(client.config.customerRole);

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



        } else {
            const noConfig = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **``Give Customer`` Command disabled via config!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(noConfig)
        }
    }
}