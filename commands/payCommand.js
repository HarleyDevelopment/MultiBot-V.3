/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  

*/

const disbut = require('discord-buttons')

module.exports = {
    name: 'pay',
    execute(message, args, client, Discord) {



        const disabledConfig = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` **``Pay`` Command disabled via config!**")
            .setFooter(`©️ ` + client.config.serverCopyright, client.config.serverIcon)

        if (client.config.updatedConfig.usePayCommands !== true) return message.channel.send(disabledConfig);

        if (client.config.deleteCommands == true) {
            message.delete()
        }

        const per = client.config.updatedConfig.payCommandPerms
        if (message.member.roles.cache.some(h => per.includes(h.id))) {

            const noNumber = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription("``❌`` **You must provide the amount for the user to pay!**")
                .setFooter(`©️ ` + client.config.serverCopyright, client.config.serverIcon)


            const amount = args.join(" ");
            if (isNaN(amount)) return message.channel.send(noNumber);

            const websiteLinks = new disbut.MessageButton()
                .setStyle(`url`)
                .setLabel(`Pay ${client.config.updatedConfig.moneyCurrency}${amount} Here!`)
                .setURL(client.config.updatedConfig.paymentLink);

            if (client.config.updatedConfig.usePayPal == true) {
                const payEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${client.config.updatedConfig.moneyCurrency}${amount}`)
                    .setDescription(`**When sending the money to the PayPal follow the list below.**\n\n**1. Send as Friends and Family.\n2. In the comment put your Discord name and #, Discord ID aswell if possible.\n3. Take a screen shot of the transaction complete page!**`)
                    .setFooter(`©️ ` + client.config.serverCopyright, client.config.serverIcon)
                    .setColor(client.config.embedColour)
                message.channel.send(payEmbed, websiteLinks).then(msg => {
                    msg.react("✅")
                })
            } else if (client.config.updatedConfig.usePayPal == false) {
                const payEmbed2 = new Discord.MessageEmbed()
                    .setAuthor(`${client.config.updatedConfig.moneyCurrency}${amount}`)
                    .setDescription(`**React once the money has been sent!**`)
                    .setFooter(`©️ ` + client.config.serverCopyright, client.config.serverIcon)
                    .setColor(client.config.embedColour)
                message.channel.send(payEmbed2, websiteLinks).then(msg => {
                    msg.react("✅")
                })
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