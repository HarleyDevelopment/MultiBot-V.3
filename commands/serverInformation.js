/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  


*/

function checkDays(date) {
    let now = new Date();
    let check = now.getTime() - date.getTime();
    let days = Math.floor(check / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};

module.exports = {
    name: 'serverinfo',
    execute(message, args, client, Discord) {

        if(client.config.deleteCommands == true) {
            message.delete()
        }

        let embed = new Discord.MessageEmbed()
            .setAuthor(`${message.guild.name}\'s Information`, message.author.displayAvatarURL({ dynamic: true }))
            .addField("Created On", `${message.guild.createdAt.toString().substr(0, 15)},\n${checkDays(message.guild.createdAt)}`)
            .addField("Server ID", message.guild.id)
            .addField("Server Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
            .addField("Server Region", message.guild.region)
            .addField("Members Count", message.guild.memberCount)
            .addField("Server Roles Count", message.guild.roles.cache.size)
            .addField("Server Channels Count", message.guild.channels.cache.size)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
            .setColor(client.config.embedColour);
        message.channel.send(embed);
    }
}