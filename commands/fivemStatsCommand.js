/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  

*/

const Gamedig = require('gamedig')
module.exports = {
    name: "server-stats",
    execute(message, args, client, Discord) {
        const noConfig = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` **``FiveM`` Command disabled via config!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
        if (client.config.useFiveMCommands !== true) return message.channel.send(noConfig)
        if (client.config.deleteCommands == true) {
            message.delete()
        }
        Gamedig.query({
            type: 'fivem',
            host: client.config.fivemServerIP, // This needs to be a string
            port: client.config.fivemServerPort // This needs to be a number & is optional, unless you're not using the default port for that gameserver type
        }).then((state) => {
            let embed = new Discord.MessageEmbed()
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
                .setAuthor(`Fivem Stats Requested By ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setColor(client.config.embedColour)
                .setDescription(`**Full Name:**\n${state.name}\n\n**Map:** ${state.map}\n**Connected:** ${state.raw.clients}\n**Max Players:** ${state.maxplayers}\n**Ping:** ${state.ping}\n**Connection Code:** ${state.connect}`)
            message.channel.send(embed)
        }).catch((error) => {
            message.channel.send(`Server offline or not found.`);
        });
    }
}