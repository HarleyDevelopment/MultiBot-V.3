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
    name: 'bug-report',
    execute(message, args, client, Discord) {
        if (client.config.useBugReportCommand == true) {

            if(client.config.deleteCommands == true) {
                message.delete();
            }

            const noConfig = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **Please provide something to report!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            const bug = args.join(" ");
            if (!bug) return message.channel.send(noConfig);

            const successEmbed = new Discord.MessageEmbed()
            .setAuthor('SUCCESS', message.author.displayAvatarURL({ dynamic: true }))
            .setColor('GREEN')
            .setDescription(`\`\`✅\`\` **Your bug report has been sent!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(successEmbed);


            const channel = client.channels.cache.get(client.config.bugReportChannel);
            if (!channel) return console.log(chalk.red('Logging for the bug report command can not be done! Please set it to the right channel for me to function!'));
            const newEmbed = new Discord.MessageEmbed()
                .setAuthor("Bug Report - New Entry", message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor(client.config.embedColour)
                .setTimestamp()
                .setDescription(`**Command:**\n\`\`\`Bug Report\`\`\`\n**Reported By:**\n\`\`\`${message.author.tag} | ${message.author.id}\`\`\`\n**Bug Reported:**\n\`\`\`${bug}\`\`\``)
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            channel.send(newEmbed)



        } else {
            const noConfig = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **``Bug Report`` Command disabled via config!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(noConfig)
        }
    }
}