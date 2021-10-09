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
    name: 'avatar',
    execute(message, args, client, Discord) {

        const noConfig = new Discord.MessageEmbed()
        .setAuthor(`ERROR`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor('RED')
        .setDescription("``❌`` **``Avatar`` Command disabled via config!**")
        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

        if(client.config.useAvatarCommand !== true) return message.channel.send(noConfig)

        if(client.config.deleteCommands == true) {
            message.delete();
        }

    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${user.user.username}'s Avatar!`)
    .setImage(user.user.displayAvatarURL({ dynamic: true }))
    .setColor(client.config.embedColour)
    .setFooter(`©️ ` + client.config.serverCopyright, client.config.serverIcon)
    message.channel.send(embed)

    }
}