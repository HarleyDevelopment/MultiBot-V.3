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
    name: 'intro',
    execute(message, args, client, Discord) {

        const noConfig = new Discord.MessageEmbed()
        .setAuthor(`ERROR`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor('RED')
        .setDescription("``❌`` **``Intro`` Command disabled via config!**")
        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

        if(client.config.useIntroCommand !== true) return message.channel.send(noConfig);

        const per = client.config.introCommandPerms
        if (message.member.roles.cache.some(h => per.includes(h.id))) {

            if(client.config.deleteCommands == true) {
                message.delete();
            }

            const embed = new Discord.MessageEmbed()
            .setTitle(`Happy to Help!`)
            .setURL(client.config.websiteLink)
            .setDescription(`Hello I am \`\`${message.author.username}\`\` with \`\`${client.config.guildName}\`\` How can I help you today?`)
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