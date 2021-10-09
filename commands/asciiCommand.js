/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  


*/


const figlet = require('figlet');
module.exports = {
    name: 'ascii',
    execute: async (message, args, client, Discord) => {

        const noConfig = new Discord.MessageEmbed()
        .setAuthor(`ERROR`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor('RED')
        .setDescription("``❌`` **``Ascii`` Command disabled via config!**")
        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

        if(client.config.useAsciiArt !== true) return message.channel.send(noConfig)

        if(client.config.deleteCommands == true) {
            message.delete();
        }
        let embed3 = new Discord.MessageEmbed()
            .setAuthor('ERROR', message.author.displayAvatarURL({
                dynamic: true
            }))
            .setDescription("``❌`` **You must provide some text!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
            .setColor('RED');
        let embed4 = new Discord.MessageEmbed()
            .setAuthor('ERROR', message.author.displayAvatarURL({
                dynamic: true
            }))
            .setDescription("``❌`` **Message too long! Please provide a message shorter than 1,500 characters!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
            .setColor('RED');
        if (!args[0]) return message.channel.send(embed3);

        msg = args.join(" ");

        figlet.text(msg, function (err, data) {
            if (err) {
                console.log('Something went wrong');
                console.dir(err);
            }
            if (data.length > 1500) return message.channel.send(embed4)

            message.channel.send('```' + data + '```')
        })
    }
}