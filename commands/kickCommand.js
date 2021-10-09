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
    name: 'kick',
    execute(message, args, client, Discord) {

        const noConfig = new Discord.MessageEmbed()
            .setAuthor('ERROR', message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` ``Kick`` **Command disabled via config!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

        if (client.config.useKickCommand !== true) return message.channel.send(noConfig)

        const per = client.config.kickCommandPerms
        if (message.member.roles.cache.some(h => per.includes(h.id))) {

            if (client.config.deleteCommands == true) {
                message.delete();
            }

            const embed = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **You must include a user to kick!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if (!user) return message.channel.send(embed)

            const kickhimSelf = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('RED')
            .setDescription(`\`\`❌\`\` **You cannot kick yourself!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            if(user == message.author.id) return message.channel.send(kickhimSelf)

            const kickingTheBot = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('RED')
            .setDescription(`\`\`❌\`\` **You cannot kick the bot!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            if(user == client.user.id) return message.channel.send(kickingTheBot)

           	const banningTheOwner = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('RED')
            .setDescription(`\`\`❌\`\` **You cannot kick the guild owner!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            if(user == message.guild.owner) return message.channel.send(banningTheOwner)


            const embed2 = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **You must include a reason to kick this member!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            const warnReason = args.splice(1).join(' ');
            if (!warnReason) return message.channel.send(embed2)



            if (client.config.kickOption == 1) {
                const embed3 = new Discord.MessageEmbed()
                    .setAuthor(`${user.user.username} has been kicked!`, message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor('GREEN')
                    .setDescription(`**Member:**\n${user.user.tag} (${user.user.id})\n**Moderator:**\n${message.author.tag}\n**Reason:**\n${warnReason}`)
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                message.channel.send(embed3);
            } else if (client.config.kickOption == 2) {
                message.channel.send(`\`\`✅\`\` **${user.user.username}** has been **kicked** for **${warnReason}**`)
            }

            if (client.config.dmUserOnKick == true) {
                const embed4 = new Discord.MessageEmbed()
                    .setAuthor(`You have been kicked!`)
                    .setColor('RED')
                    .setDescription(`**You was kicked for: \`\`${warnReason}\`\`**`)
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                user.user.send(embed4).catch(err => console.log(`Error. Could not send the message to that user. More information: ${err}`))
            }
            user.kick();

            if (client.config.dmModeratorsOnKick == true) {
                const embed5 = new Discord.MessageEmbed()
                    .setAuthor(`You have kicked ${user.user.username}`)
                    .setColor('GREEN')
                    .setDescription(`**You kicked this member for: \`\`${warnReason}\`\`**`)
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                message.author.send(embed5).catch(err => console.log(`Error. Could not send the message to that user. More information: ${err}`))
            }


            if (client.config.logKicks == true) {
                const channel = client.channels.cache.get(client.config.kickLoggingChannel);
                if (!channel) return console.log(chalk.red('Logging for the kick command can not be done! Please set it to the right channel for me to function!'));
                const newEmbed = new Discord.MessageEmbed()
                    .setAuthor("Kick - New Entry", message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor(client.config.embedColour)
                    .setTimestamp()
                    .setDescription(`**Command:**\n\`\`\`Kick\`\`\`\n**Member:**\n\`\`\`${user.user.tag} | ${user.user.id}\`\`\`\n**Moderator:**\n\`\`\`${message.author.tag} | ${message.author.id}\`\`\`\n**Reason:**\n\`\`\`${warnReason}\`\`\``)
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