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
    name: 'ban',
    execute(message, args, client, Discord) {

        const noConfig = new Discord.MessageEmbed()
            .setAuthor('ERROR', message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` ``Ban`` **Command disabled via config!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

        if (client.config.useBanCommand !== true) return message.channel.send(noConfig)

        const per = client.config.banCommandPerms
        if (message.member.roles.cache.some(h => per.includes(h.id))) {

            if (client.config.deleteCommands == true) {
                message.delete();
            }

            const embed = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **You must include a user to ban!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if (!user) return message.channel.send(embed)

            const banhimSelf = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('RED')
            .setDescription(`\`\`❌\`\` **You cannot ban yourself!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            if(user == message.author.id) return message.channel.send(banhimSelf)

            const banningTheBot = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('RED')
            .setDescription(`\`\`❌\`\` **You cannot ban the bot!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            if(user == client.user.id) return message.channel.send(banningTheBot)

            const banningTheOwner = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('RED')
            .setDescription(`\`\`❌\`\` **You cannot ban the guild owner!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            if(user == message.guild.owner) return message.channel.send(banningTheOwner)

            const embed2 = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **You must include a reason to ban this member!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            const warnReason = args.splice(1).join(' ');
            if (!warnReason) return message.channel.send(embed2)



            if (client.config.banOption == 1) {
                const embed3 = new Discord.MessageEmbed()
                    .setAuthor(`${user.user.username} has been banned!`, message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor('GREEN')
                    .setDescription(`**Member:**\n${user.user.tag} (${user.user.id})\n**Moderator:**\n${message.author.tag}\n**Reason:**\n${warnReason}`)
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                message.channel.send(embed3);
            } else if (client.config.banOption == 2) {
                message.channel.send(`\`\`✅\`\` **${user.user.username}** has been **banned** for **${warnReason}**`)
            }

            if (client.config.dmUserOnBan == true) {
                const embed4 = new Discord.MessageEmbed()
                    .setAuthor(`You have been banned!`)
                    .setColor('RED')
                    .setDescription(`**You was banned for: \`\`${warnReason}\`\`**`)
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                user.user.send(embed4).catch(err => console.log(`Error. Could not send the message to that user. More information: ${err}`))
            }
            user.ban({
                reason: `${warnReason} - Banned By ${message.author.tag}`
            });

            if (client.config.dmModeratorsOnBan == true) {
                const embed5 = new Discord.MessageEmbed()
                    .setAuthor(`You have banned ${user.user.username}`)
                    .setColor('GREEN')
                    .setDescription(`**You banned this member for: \`\`${warnReason}\`\`**`)
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                message.author.send(embed5).catch(err => console.log(`Error. Could not send the message to that user. More information: ${err}`))
            }


            if (client.config.logBans == true) {
                const channel = client.channels.cache.get(client.config.banLoggingChannel);
                if (!channel) return console.log(chalk.red('Logging for the ban command can not be done! Please set it to the right channel for me to function!'));
                const newEmbed = new Discord.MessageEmbed()
                    .setAuthor("Ban - New Entry", message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor(client.config.embedColour)
                    .setTimestamp()
                    .setDescription(`**Command:**\n\`\`\`Ban\`\`\`\n**Member:**\n\`\`\`${user.user.tag} | ${user.user.id}\`\`\`\n**Moderator:**\n\`\`\`${message.author.tag} | ${message.author.id}\`\`\`\n**Reason:**\n\`\`\`${warnReason}\`\`\``)
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