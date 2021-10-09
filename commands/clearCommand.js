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
    name: 'clear',
    description: "clear messages in a channel!",
    async execute(message, args, client, Discord) {

        const noNumber = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription(`\`\`❌\`\` **You must provide the amount of messages you want to clear!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)

        if (!args[0]) return message.channel.send(noNumber);


        const overOneHunder = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription(`\`\`❌\`\` **Please provide a number 1-100!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)

        if (isNaN(args[0])) return message.channel.send(overOneHunder);

        const fortnite = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription(`\`\`❌\`\` **You cannot delete more than 100 messages at a time!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)



        if (args[0] > 100) return message.channel.send(fortnite);


        const minecraft = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription(`\`\`❌\`\` **You cannot delete negative numbers! Please delete atleast one message!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)

        if (args[0] < 1) return message.channel.send(minecraft)

        const per = client.config.clearChatPerms
        if (message.member.roles.cache.some(h => per.includes(h.id))) {

            await message.channel.messages.fetch({
                limit: args[0]
            }).then(messages => {
                message.channel.bulkDelete(messages);
                const cleared = new Discord.MessageEmbed()
                    .setAuthor('SUCCESS', message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor('GREEN')
                    .setDescription(`\`\`✅\`\` **\`\`${message.author.username}\`\` cleared \`\`${args[0]}\`\` messages**`)
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
                message.channel.send(cleared)
            });


            const channel = client.channels.cache.get(client.config.verificationsLoggingChannel);
            if (!channel) return console.log(chalk.red('Logging for the clear chat command can not be done! Please set it to the right channel for me to function!'));

            const minecraftGame = new Discord.MessageEmbed()
            .setAuthor(`Clear Message - New Entry`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(client.config.embedColour)
            .setTimestamp()
            .setDescription(`**Member:**\n\`\`\`${message.author.tag} | ${message.author.id}\`\`\`\n**Amount of Messages:**\n\`\`\`${args[0]}\`\`\`\n**Channel:**\n\`\`\`${message.channel.name} | ${message.channel.id}\`\`\``)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
            channel.send(minecraftGame)

        } else {
            const failedEmbed47 = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setDescription(`\`\`❌\`\` **You Do Not Have The Required Permissions To Do This!**`)
                .setColor('RED')
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
            message.channel.send(failedEmbed47)
        }
    }
}