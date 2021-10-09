/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  


*/

const Discord = require(`discord.js`)

module.exports = {
    name: 'message',
    execute(message, client) {

        if (client.config.useSteamScamLinkProtection == true) {


            if (message.author.bot) return;
            if (message.deleted) return;
            if (!message.guild) return;

            const embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setDescription(`\`\`❌\`\` **\`\`${message.author.username}\`\` Your message has been deleted as we believe it is a scam link!**`)
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            if (client.config.steamScamLinkTerms.some(e => message.content.toLowerCase().includes(e))) {
                message.delete();
                message.channel.send(embed);
                return;
            }

        }
    }
}