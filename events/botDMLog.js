/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  


*/

const Discord = require(`discord.js`)
const chalk = require('chalk')

module.exports = {
    name: 'message',
    execute(message, client) {

        const fortnite = client.channels.cache.get(client.config.botDMLogger);
        if (!fortnite) return console.log(chalk.red('Logging for the bot DM\'s can not be done! Please set it to the right channel for me to function!'));

        if (message.author.bot) return;
        if(message.channel.type !== 'dm') return;
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Bot DM - New Case`, client.config.serverIcon)
                .setDescription(`**Author:**\n\`\`\`${message.author.username} | ${message.author.id}\`\`\`\n**Channel:**\n\`\`\`Bot DM\'s\`\`\`\n**Message:**\n\`\`\`${message.content}\`\`\``)
                .setColor(client.config.embedColour)
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            fortnite.send(embed)
    }
}