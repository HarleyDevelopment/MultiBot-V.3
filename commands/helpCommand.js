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
    name: 'help',
    execute(message, args, client, Discord) {

        if(client.config.deleteCommands == true) {
            message.delete();
        }

        const embed = new Discord.MessageEmbed()
        .setTitle(`Help Menu`)
        .setColor(client.config.embedColour)
        .setDescription(`**Commands List**\n\`\`\`${client.config.botPrefix}commands\`\`\`\n**Prefix:**\n\`\`\`${client.config.botPrefix}\`\`\`\n**Copyright:**\n\`\`\`©️ ${client.config.serverCopyright}\`\`\`\n**Additional Information**\n**[Purchase Me](https://h4r1ey-dev.xyz) | [Support](https://discord.gg/ksv9GaZJ74)**`)
        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
        message.channel.send(embed)
    }
}