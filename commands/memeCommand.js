/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  


*/

const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: 'meme',
    execute: async(message, args, client, Discord) => {

        const noConfig = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('RED')
            .setDescription("``❌`` **``Meme`` Command disabled via config!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
        if(client.config.useMemeCommand !== true) return message.channel.send(noConfig)

        const subReddits = ["meme", "me_irl", "dankmeme", "funny"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
            .setAuthor('SUCCESS, Here is your meme', message.author.displayAvatarURL({ dynamic: true }))
            .setURL(`http://reddit.com/${random}`)
            .setImage(img)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
            .setColor(client.config.embedColour)

        message.channel.send(embed);

    }
}