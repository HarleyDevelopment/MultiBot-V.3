/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  


*/

const Discord = require('discord.js')
const client = new Discord.Client()
const disbut = require('discord-buttons');
disbut(client);

module.exports = {
    name: 'credits',
    execute(message, args, client, Discord) {

        if (client.config.deleteCommands == true) {
            message.delete();
        }

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.tag}'s Creators`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor(client.config.embedColour)
            .setDescription(`[@H4r1ey](https://discord.gg/ksv9GaZJ74) - Main Programmer\n[@Mr Crizzle](https://discord.gg/WjeUJmBqVv) - Some of the permissions\n[@Hyperz](https://hyperz.net) - Console loggers & Alt Prevention Modules`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
            message.channel.send(embed)

    }
}