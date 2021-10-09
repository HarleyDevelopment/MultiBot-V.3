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

        if (client.config.usePingPrevention == true) {


            if (message.author.bot) return;
            if (message.deleted) return;
            if (!message.guild) return;

            const embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setDescription(`\`\`❌\`\` **Please do not ping me, I see your messages!**`)
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

                if (message.member.roles.cache.some((r) => client.config.bypassPingPrevention.includes(r.id)))
                return;

            if (client.config.pingPreventedMember.some(e => message.content.toLowerCase().includes(e))) {
                message.channel.send(embed);
                return;
            }

        }
    }
}