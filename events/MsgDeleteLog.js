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
    name: 'messageDelete',
    execute(message, client) {

        const fortnite = client.channels.cache.get(client.config.deletedMessageLog);
        if (!fortnite) return console.log(chalk.red('Logging for the deleted messages log can not be done! Please set it to the right channel for me to function!'));

        if(message.author.bot) return;

        const fileUpload = new Discord.MessageEmbed()
        .setAuthor(`File Delete - New Case`, client.config.serverIcon)
        .setDescription(`**Author:**\n\`\`\`${message.author.username} | ${message.author.id}\`\`\`\n**Channel:**\n\`\`\`${message.channel.name} | ${message.channel.id}\`\`\`\n**File:**\n\`\`\`I am unable to catch the file, as this is an embed. Please remember capturing files is still in beta!\`\`\``)
        .setColor(client.config.embedColour)
        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

        if(message.content == '') return fortnite.send(fileUpload)


        const embed = new Discord.MessageEmbed()
            .setAuthor(`Message Delete - New Case`, client.config.serverIcon)
            .setDescription(`**Author:**\n\`\`\`${message.author.username} | ${message.author.id}\`\`\`\n**Channel:**\n\`\`\`${message.channel.name} | ${message.channel.id}\`\`\`\n**Message:**\n\`\`\`${message.content}\`\`\``)
            .setColor(client.config.embedColour)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

       fortnite.send(embed)
    }
}