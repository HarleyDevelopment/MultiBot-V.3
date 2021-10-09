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
    name: 'update-status',
    execute(message, args, client, Discord) {


        const per = client.config.updateBotStatusPermissions
        if (message.member.roles.cache.some(h => per.includes(h.id))) {

            if(client.config.deleteCommands == true) {
                message.delete()
            }

            const noT = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` **You must provide some text!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            const longG = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` **Your message is to long. Max: \`\`50\`\`**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            const t = args.join(" ");
            if(!t) return message.channel.send(noT) 
            if(t.length > 50) return message.channel.send(longG)

            client.user.setActivity(t)

            const embed333 = new Discord.MessageEmbed()
            .setAuthor('SUCCESS', message.author.displayAvatarURL({ dynamic: true }))
            .setColor('GREEN')
            .setDescription("``✅`` **You have updated the bot's status!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(embed333)


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