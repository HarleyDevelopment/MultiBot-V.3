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
const chalk = require('chalk')

module.exports = {
    name: 'message',
    execute(message, client) {

        if (client.config.deleteLinks == true) {


            if (message.author.bot) return;
            if (message.deleted) return;
            if (!message.guild) return;

            const embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setDescription(`\`\`❌\`\` **Those links are not allowed here!**`)
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

            if (message.member.roles.cache.some((r) => client.config.bypassLinkPrevention.includes(r.id)))
                return;

            if (client.config.bannedLinks.some(e => message.content.toLowerCase().includes(e))) {
                message.delete();
                message.channel.send(embed);
                return;
            }
        }
    }
}