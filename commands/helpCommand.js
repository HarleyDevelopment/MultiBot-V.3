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
        .setDescription(`**Commands List**\n\`\`\`${client.config.botPrefix}commands\`\`\`\n**Prefix:**\n\`\`\`${client.config.botPrefix}\`\`\`\n**Copyright:**\n\`\`\`©️ ${client.config.serverCopyright}\`\`\`\n**Additional Information**\n**[Original Store](https://h4r1ey-dev.xyz) | [Support](https://discord.gg/tKy4tqyc3y)**`)
        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
        message.channel.send(embed)
    }
}
