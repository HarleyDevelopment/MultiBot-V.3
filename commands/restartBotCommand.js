/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  


*/


const chalk = require('chalk')

module.exports = {
    name: 'restart',
    description: 'Reboot the Discord bot.',
    aliases: ['reboot'],
    async execute(message, args, client, Discord){

        if(message.author.id == client.config.botOwnerID) {



            const token = client.config.botToken;
            const embed3 = new Discord.MessageEmbed()
            .setAuthor('SUCCESS', message.author.displayAvatarURL({ dynamic: true }))
            .setColor('GREEN')
            .setDescription(`\`\`✅\`\` **Restarting....**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
            message.channel.send(embed3);

            client.destroy()
            client.login(token);
            
            const embed5 = new Discord.MessageEmbed()
            .setAuthor('SUCCESS', message.author.displayAvatarURL({ dynamic: true }))
            .setColor('GREEN')
            .setDescription(`\`\`✅\`\` **I\'v Finished restarting!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)

            console.log(chalk.red(`I have restarted. Restart ran by ${message.author}`))

            setTimeout(function() {
                message.channel.send(embed5);
                message.delete().catch(e => {})
            }, 6000)

        } else {
            const noPermissions = new Discord.MessageEmbed()
                .setAuthor('ERROR', message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **You do not have the required permissions!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(noPermissions)
        }
    }
}
