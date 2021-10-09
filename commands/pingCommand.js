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
    name: 'ping',
    execute(message, args, client, Discord) {

        if (client.config.deleteCommands = true) {
            message.delete();
        }

        const embed = new Discord.MessageEmbed()
            .setAuthor(`SUCCESS`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor(client.config.embedColour)
            .setDescription("``✅`` **I am responding!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(embed).then(robot => {
                robot.react("🤖")
            })
    }
}