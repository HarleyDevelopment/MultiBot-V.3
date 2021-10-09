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
    name: 'mute',
    execute(message, args, client, Discord) {
        if (client.config.useMuteCommand == true) {

            const per = client.config.muteCommandPerms
            if (message.member.roles.cache.some(h => per.includes(h.id))) {

                if (client.config.deleteCommands == true) {
                    message.delete()
                }

                const muteNone = new Discord.MessageEmbed()
                    .setAuthor('ERROR', message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setDescription(`**\`\`❌\`\` Please mention a member to mute!**`)
                    .setColor(client.config.embedColour)
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

                const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
                if (!user) return message.channel.send(muteNone);

                const embed2 = new Discord.MessageEmbed()
                    .setAuthor(`ERROR`, message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor('RED')
                    .setDescription("``❌`` **You must include a reason to mute this member!**")
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

                const muteReason = args.splice(1).join(' ');
                if (!muteReason) return message.channel.send(embed2);


                const embed5 = new Discord.MessageEmbed()
                    .setAuthor(`ERROR`, message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor('RED')
                    .setDescription("``❌`` **This user is already muted!**")
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                if (user.roles.cache.has(client.config.mutedRole)) return message.channel.send(embed5);

                if (client.config.muteOption == 1) {
                    const successEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.user.username} has been muted!`, message.author.displayAvatarURL({
                            dynamic: true
                        }))
                        .setColor('GREEN')
                        .setDescription(`**Member:**\n${user.user.tag} (${user.user.id})\n**Moderator:**\n${message.author.tag}\n**Reason:**\n${muteReason}`)
                        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                    message.channel.send(successEmbed)
                } else if (client.config.muteOption == 2) {
                    message.channel.send(`\`\`✅\`\` **${user.user.username}** has been **muted** for **${muteReason}**`)
                }
                user.roles.add(client.config.mutedRole)
                if (client.config.removeMemberRoleOnMute == true) {

                    const embed64 = new Discord.MessageEmbed()
                        .setAuthor(`ERROR`, message.author.displayAvatarURL({
                            dynamic: true
                        }))
                        .setColor('RED')
                        .setDescription("``❌`` **User does not have the normal member role! This means I did not remove a role, just added the muted role! **")
                        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

                    if (!user.roles.cache.has(client.config.mainMemberRole)) return message.channel.send(embed64)

                    user.roles.remove(client.config.mainMemberRole)
                }

                if (client.config.dmMemberOnMute == true) {
                    const embed444 = new Discord.MessageEmbed()
                        .setAuthor(`You have been muted`)
                        .setColor('RED')
                        .setDescription(`**You was muted for: \`\`${muteReason}\`\`**`)
                        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                    user.send(embed444).catch(err => console.log(`Error. Could not send the message to that user. More information: ${err}`))
                }

                if (client.config.dmModeratorsOnMute == true) {
                    const embed555 = new Discord.MessageEmbed()
                        .setAuthor(`You have muted ${user.user.username}`)
                        .setColor('GREEN')
                        .setDescription(`**You muted this member for: \`\`${muteReason}\`\`**`)
                        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                    message.author.send(embed555).catch(err => console.log(`Error. Could not send the message to that user. More information: ${err}`))
                }

                if (client.config.logMutes == true) {


                    const channel = client.channels.cache.get(client.config.muteLoggingChannel);
                    if (!channel) return console.log(chalk.red('Logging for the muting command can not be done! Please set it to the right channel for me to function!'));
                    const newEmbed = new Discord.MessageEmbed()
                        .setAuthor("Mute - New Entry", message.author.displayAvatarURL({
                            dynamic: true
                        }))
                        .setColor(client.config.embedColour)
                        .setTimestamp()
                        .setDescription(`**Command:**\n\`\`\`Mute\`\`\`\n**Member:**\n\`\`\`${user.user.tag} | ${user.user.id}\`\`\`\n**Moderator:**\n\`\`\`${message.author.tag} | ${message.author.id}\`\`\`\n**Reason:**\n\`\`\`${muteReason}\`\`\``)
                        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

                    channel.send(newEmbed)
                }







            } else {
                const noConfig = new Discord.MessageEmbed()
                    .setAuthor(`ERROR`, message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor('RED')
                    .setDescription("``❌`` **You do not have the correct permissions to do this!**")
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                message.channel.send(noConfig);
            }

        } else {
            const disabledConfig = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **``Mute`` Command disabled via config!**")
                .setFooter(`©️ ` + client.config.serverCopyright, client.config.serverIcon)
            message.channel.send(disabledConfig)
        }
    }
}