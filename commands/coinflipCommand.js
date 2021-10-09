/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  


*/


module.exports = {
    name: 'coinflip',
    execute(message, args, client, Discord) {
        const rand = ['Heads', 'Tails'];
        const responses = Math.floor((Math.random() * rand.length) + 0);


        if (responses == 'Heads') {}

        if (responses == 'Tails') {}

        if(client.config.deleteCommands == true) {
            message.delete()
        }

        let userembed = new Discord.MessageEmbed()
            .setAuthor('SUCCESS', message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`\`\`✅\`\` **You flipped a coin and it landed on \`\`${rand[responses]}\`\`!**`)
            .setColor('GREEN')
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)

        message.channel.send(userembed);
    }
}