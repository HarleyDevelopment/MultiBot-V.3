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
    name: 'verify',
    execute(message, args, client, Discord) {
        if (client.config.useVerificationSystem == true) {
            const verifiedRole = client.config.verifiedRoleID;
            const mutedRole = client.config.mutedRoleID;
            const verificationChannelID = client.config.verificationRunningChannelID;

            if (client.config.deleteCommands == true) {
                message.delete();
            }

            const hasRole = new Discord.MessageEmbed()
                .setAuthor('ERROR', message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **You're already verified!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            if (message.member.roles.cache.has(verifiedRole)) return message.channel.send(hasRole);

            const isMuted = new Discord.MessageEmbed()
                .setAuthor('ERROR', message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **Action cannot be completed because you're muted!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            if (message.member.roles.cache.has(mutedRole)) return message.channel.send(isMuted);

            const noChannel = new Discord.MessageEmbed()
                .setAuthor('ERROR', message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **This is not the verifications channel!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            if (message.channel.id !== verificationChannelID) return message.channel.send(noChannel);

            const roleGiven = new Discord.MessageEmbed()
                .setAuthor('SUCCESS', message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('GREEN')
                .setDescription("``✅`` **You have verified within this guild!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(roleGiven).then(verifications => {
                verifications.delete({
                    timeout: 5000
                })
            })
            message.member.roles.add(verifiedRole)
            if(client.config.useAutoRoleOnJoin == true) {
                message.member.roles.remove(client.config.roleToAddOnJoin)
            }

            if (client.config.dmCompleteVerification == true) {
                const dmVerified = new Discord.MessageEmbed()
                    .setAuthor(`SUCCESS`, message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor('GREEN')
                    .setDescription(`\`\`✅\`\` **${client.config.dmVerificationMessage}**`)
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                message.author.send(dmVerified).catch(err => console.log(`Error. Could not send the message to that user. More information: ${err}`))
            }

            if (client.config.logVerifications == true) {
                const channel = client.channels.cache.get(client.config.verificationsLoggingChannel);
                if (!channel) return console.log(chalk.red('Logging for the verifications command can not be done! Please set it to the right channel for me to function!'));
                const log = new Discord.MessageEmbed()
                    .setAuthor("Verification - New Entry", message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor(client.config.embedColour)
                    .setTimestamp()
                    .setDescription(`**Command:**\n\`\`\`Verification\`\`\`\n**Member:**\n\`\`\`${message.author.tag} | ${message.author.id}\`\`\``)
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

                channel.send(log)
            }

        } else {
            const noConfig = new Discord.MessageEmbed()
                .setAuthor('ERROR', message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` ``Verify`` **Command disabled via config!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(noConfig).then(msg => {
                msg.delete({
                    timeout: 5000
                })
            })
        }
    }
}