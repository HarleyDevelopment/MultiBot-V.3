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
    name: 'apply',
    async execute(message, args, client, Discord){

        if(client.config.useApplications !== true) {
            const noApplication = new Discord.MessageEmbed()
            .setAuthor('ERROR', message.author.displayAvatarURL({ dynamic: true }))
            .setColor('RED')
            .setDescription(`\`\`❌\`\` **Applications are currently closed!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
            message.delete();
            return message.channel.send(noApplication)
        }

        const questions = client.config.applicationQuestons

        let collectCounter = 0;
        let endCounter = 0;

        const filter = (m) => m.author.id === message.author.id;

        const appStart = await message.author.send(questions[collectCounter++]);
        const channel = appStart.channel;

        const channelInform = new Discord.MessageEmbed()
        .setAuthor(`SUCCESS`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`\`\`✅\`\` **Your Application has been started in DM's**`)
        .setColor('GREEN')
        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
        message.channel.send(channelInform).then(fortnite => {
            fortnite.delete({ timeout: 5000 })
        })
        if(client.config.deleteCommands == true) {
            message.delete()
        }

        const collector = channel.createMessageCollector(filter);

        collector.on("collect", () => {
            if(collectCounter < questions.length) {
                channel.send(questions[collectCounter++])
            }else{
                const completed = new Discord.MessageEmbed()
                .setAuthor(`SUCCESS`, message.author.displayAvatarURL({ dynamic: true }))
                .setColor('GREEN')
                .setDescription(`\`\`✅\`\` **Your application has been sent!**`)
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
                channel.send(completed)
                collector.stop("fullfilled");
            }
        });

        const appsChannel = client.channels.cache.get(client.config.applicationAnswersChannel);
        if(!appsChannel) return console.log(`Unable to submit application. You must provide a channel for the application to send too!`)
        collector.on('end', (collected, reason) => {
            if(reason === 'fullfilled') {
                let index = 1;
                const mappedResponses = collected.map((msg) => {
                    return `**${index++})** ${questions[endCounter++]}\n\`\`\`${msg.content}\`\`\``
                }).join('\n\n');

                    const bra = new Discord.MessageEmbed()
                    .setAuthor(`Application - New Entry`, message.author.displayAvatarURL({ dynamic: true }))
                    
                    .setDescription(`${mappedResponses}`)
                    .setColor('GREEN')
                    .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
                    .setTimestamp()
                    appsChannel.send(bra)
                    if(client.config.pingRoleOnSubmit == true) {
                        appsChannel.send(`<@&${client.config.roleToPingOnSubmit}>`)
                    } else {
                        return;
                    }
                }
            });
    }
}