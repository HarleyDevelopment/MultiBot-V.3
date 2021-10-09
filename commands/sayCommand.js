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
    name: 'say',
    execute(message, args, client, Discord) {
        if (client.config.useSayCommand == true) {
            const per = client.config.sayCommandPerms
            if (message.member.roles.cache.some(h => per.includes(h.id))) {

                message.delete();

                const noText = new Discord.MessageEmbed()
                    .setAuthor('ERROR', message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor('RED')
                    .setDescription("``❌`` **You must provide something for the bot to say!**")
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

                const text = args.join(" ");
                if (!text) return message.channel.send(noText);

                message.channel.send(text)
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
                .setDescription("``❌`` ``Say`` **Command disabled via config!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(noConfig).then(embed => {
                embed.delete({
                    timeout: 5000
                })
            })
        }
    }
}