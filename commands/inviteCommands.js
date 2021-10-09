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
    name: 'invite',
    execute(message, args, client, Discord) {

        const noConfig = new Discord.MessageEmbed()
        .setAuthor(`ERROR`, message.author.displayAvatarURL({
            dynamic: true
        }))
        .setColor('RED')
        .setDescription("``❌`` **``Invite`` Command disabled via config!**")
        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

        if(client.config.useInviteCommand !== true) return message.channel.send(noConfig);

        if(client.config.deleteCommands == true) {
            message.delete();
        }

        message.channel.send(`**Please invite your friends with the following link\n${client.config.serverInvite}**`)
    }
}