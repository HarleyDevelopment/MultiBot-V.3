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
    name: 'deny',
    execute(message, args, client, Discord) {
        const noConfig = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` **``Deny`` Command disabled via config!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

        if (client.config.useDenyCommand !== true) return message.channel.send(noConfig);

        const per = client.config.denyCommandPerms
        if (message.member.roles.cache.some(h => per.includes(h.id))) {

            if(client.config.deleteCommands == true) {
                message.delete()
            }

            const noUser = new Discord.MessageEmbed()
                .setAuthor('ERROR', message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **You must provide a user to deny!**")
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if (!user) return message.channel.send(noUser);
            if (user.id == client.config.botID) return message.channel.send(`The bot cannot be denied!`)


            if (client.config.denyType == 1) {
                const acceptEmbed = new Discord.MessageEmbed()
                .setColor(client.config.embedColour)
                .setDescription(`\`\`❌\`\` \`\`${user.user.tag}\`\` **Your application has been denied!**`)
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                message.channel.send(acceptEmbed)
            } else if (client.config.denyType == 2) {
               message.channel.send(`\`\`❌\`\` \`\`${user.user.username}\`\` **Your application has been denied!** `)
            }


            if(client.config.dmOnAccept == true) {
                if(client.config.denyType == 1) {
                    const acceptEmbed2 = new Discord.MessageEmbed()
                    .setColor(client.config.embedColour)
                    .setDescription(`\`\`❌\`\` \`\`${user.user.tag}\`\` **Your application has been denied!**`)
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
                    user.user.send(acceptEmbed2).catch(err => console.log(`Error. Could not send the message to that user. More information: ${err}`))
                } else if (client.config.denyType == 2) {
                    user.user.send(`\`\`❌\`\` \`\`${user.user.username}\`\` **Your application has been denied!**`).catch(err => console.log(`Error. Could not send the message to that user. More information: ${err}`))
                }
            }


        } else {
            const noPermissions = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **You do not have the required permissions to do this!**")
                .setFooter(`©️ ` + client.config.serverCopyright, client.config.serverIcon)
            message.channel.send(noPermissions);
        }
    }
}