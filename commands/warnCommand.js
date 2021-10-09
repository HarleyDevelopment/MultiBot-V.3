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
    name: 'warn',
    execute(message, args, client, Discord) {

        const noConfig = new Discord.MessageEmbed()
            .setAuthor('ERROR', message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` ``Warn`` **Command disabled via config!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

        if (client.config.useWarnCommand !== true) return message.channel.send(noConfig)

        const per = client.config.warnCommandPerms
        if (message.member.roles.cache.some(h => per.includes(h.id))) {

            if (client.config.deleteCommands == true) {
                message.delete();
            }

            const embed = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **You must include a user to warn!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if (!user) return message.channel.send(embed)

            const warnhimSelf = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('RED')
            .setDescription(`\`\`❌\`\` **You cannot warn yourself!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            if(user == message.author.id) return message.channel.send(warnhimSelf)

            const embed2 = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **You must include a reason to warn this member!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            const warnReason = args.splice(1).join(' ');
            if (!warnReason) return message.channel.send(embed2)

            const banningTheBot = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('RED')
            .setDescription(`\`\`❌\`\` **You cannot warn the bot!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            if(user == client.user.id) return message.channel.send(banningTheBot)

            const banningTheOwner = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('RED')
            .setDescription(`\`\`❌\`\` **You cannot warn the guild owner!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            if(user == message.guild.owner) return message.channel.send(banningTheOwner)


            if (client.config.warnOption == 1) {
                const embed3 = new Discord.MessageEmbed()
                    .setAuthor(`${user.user.username} has been warned!`, message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor('GREEN')
                    .setDescription(`**Member:**\n${user.user.tag} (${user.user.id})\n**Moderator:**\n${message.author.tag}\n**Reason:**\n${warnReason}`)
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                message.channel.send(embed3);
            } else if (client.config.warnOption == 2) {
                message.channel.send(`\`\`✅\`\` **${user.user.username}** has been **warned** for **${warnReason}**`)
            }

            if (client.config.dmUserOnWarn == true) {
                const embed4 = new Discord.MessageEmbed()
                    .setAuthor(`You have been warned!`)
                    .setColor('RED')
                    .setDescription(`**You was warned for: \`\`${warnReason}\`\`**`)
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                user.user.send(embed4).catch(err => console.log(`Error. Could not send the message to that user. More information: ${err}`))
            }

            if (client.config.dmModeratorsOnWarn == true) {
                const embed5 = new Discord.MessageEmbed()
                    .setAuthor(`You have warned ${user.user.username}`)
                    .setColor('GREEN')
                    .setDescription(`**You warned this member for: \`\`${warnReason}\`\`**`)
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                message.author.send(embed5).catch(err => console.log(`Error. Could not send the message to that user. More information: ${err}`))
            }


            if (client.config.logWarnings == true) {
                const channel = client.channels.cache.get(client.config.warnLoggingChannel);
                if (!channel) return console.log(chalk.red('Logging for the warnings command can not be done! Please set it to the right channel for me to function!'));
                const newEmbed = new Discord.MessageEmbed()
                    .setAuthor("Warning - New Entry", message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor(client.config.embedColour)
                    .setTimestamp()
                    .setDescription(`**Command:**\n\`\`\`Warning\`\`\`\n**Member:**\n\`\`\`${user.user.tag} | ${user.user.id}\`\`\`\n**Moderator:**\n\`\`\`${message.author.tag} | ${message.author.id}\`\`\`\n**Reason:**\n\`\`\`${warnReason}\`\`\``)
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

                channel.send(newEmbed)

            }
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