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
    name: 'do-not-type',
    execute(message, args, client, Discord) {
        const noConfig = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` **``Do not Type`` Command disabled via config!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

        if(client.config.useDoNotTypeCommand !== true) return message.channel.send(noConfig);

        const per = client.config.doNotTypePerms
        if (message.member.roles.cache.some(h => per.includes(h.id))) {


            if(client.config.deleteCommands == true) {
                message.delete()
            }


            const noType = new Discord.MessageEmbed()
            .setTitle(`DO NOT TYPE!`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(client.config.embedColour)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(noType)


        } else {
            const noPermissions = new Discord.MessageEmbed()
            .setAuthor('ERROR', message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` **You do not have the required permissions!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
        message.channel.send(noPermissions)
        }
    }
}