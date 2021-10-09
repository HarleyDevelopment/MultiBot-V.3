/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  


*/

const ms = require('ms')

module.exports = {
    name: 'timer',
    execute(message, args, client, Discord) {

        if(client.config.deleteCommands == true) {
            message.delete()
        }

          const Timer = args[0];
        if (!args[0]) {
            const timeIssue = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('RED')
            .setDescription(`\`\`❌\`\` **Please provide a real time including \`\`m, h or s\`\`**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
            return message.channel.send(timeIssue);
        }
        if (args[0] <= 0) {
            const timeIssue2 = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('RED')
            .setDescription(`\`\`❌\`\` **Please provide a real time including \`\`m, h or s\`\`**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
            return message.channel.send(timeIssue2);
        }
        const set = new Discord.MessageEmbed()
            .setAuthor('SUCCESS', message.author.displayAvatarURL({ dynamic: true }))
            .setColor('GREEN')
            .setDescription(`\`\`✅\`\` **I have set a timer for \`\`${ms(ms(Timer), { long: true })}\`\`**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
            .setTimestamp()
            message.channel.send(set)
        setTimeout(function () {
            const ended = new Discord.MessageEmbed()
            .setTitle(`SUCCESS`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`\`\`⏱️\`\` **Time Up! Timer was set for \`\`${ms(ms(Timer))}\`\`**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
            .setColor('GREEN')
            .setTimestamp()
            message.channel.send(ended)
            message.channel.send(`<@${message.author.id}>`)
        }, ms(Timer));
    }
}