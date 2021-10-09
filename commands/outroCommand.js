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
    name: 'outro',
    execute(message, args, client, Discord) {
        const noConfig = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` **``Outro`` Command disabled via config!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

        if (client.config.useOutroCommand !== true) return message.channel.send(noConfig);

        const per = client.config.outroCommandPerms
        if (message.member.roles.cache.some(h => per.includes(h.id))) {


            if(client.config.deleteCommands == true) {
                message.delete();
            };

            const embed = new Discord.MessageEmbed()
            .setTitle(`Thanks for contacting support!`)
            .setURL(client.config.websiteLink)
            .setDescription(client.config.outroMessage)
            .setColor(client.config.embedColour)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(embed)

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