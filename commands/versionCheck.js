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
    name: 'version',
    execute(message, args, client, Discord) {

        if(client.config.deleteCommands == true) {
            message.delete()
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor(`3.2`)
        .setColor(client.config.embedColour)
        message.channel.send(embed)
    }
}