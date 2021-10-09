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
    name: 'dm',
    execute(message, args, client, Discord) {

        if (client.config.useDMCommand == true) {


            const per = client.config.dmCommandPerms
            if (message.member.roles.cache.some(h => per.includes(h.id))) {


                if (client.config.deleteCommands == true) {
                    message.delete();
                }

                const noText = new Discord.MessageEmbed()
                    .setAuthor('ERROR', message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor('RED')
                    .setDescription("``❌`` **You must provide something to say!**")
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

                const text = args.splice(1).join(' ');
                if (!text) return message.channel.send(noText);


                const noUser = new Discord.MessageEmbed()
                    .setAuthor('ERROR', message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor('RED')
                    .setDescription("``❌`` **You must provide a user to DM!**")
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
                if (!user) return message.channel.send(noUser);
                if (user.id == client.config.botID) return message.channel.send(`You cannot send messages to the bot!`)


                const sent = new Discord.MessageEmbed()
                    .setAuthor('SUCCESS', message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor('GREEN')
                    .setDescription(`\`\`✅\`\` **Message sent!**`)
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                message.channel.send(sent)
                user.user.send(text).catch(err => console.log(`Error. Could not send the message to that user. More information: ${err}`))
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
        } else {
            const disabledConfig = new Discord.MessageEmbed()
                .setAuthor('ERROR', message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` ``DM`` **Command is disabled via config!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(disabledConfig).then(embed => {
                embed.delete({
                    timeout: 5000
                })
            })
        }
    }
}