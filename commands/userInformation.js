/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  


*/


const {
    MessageEmbed
} = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'userinfo',
    execute(message, args, client, Discord) {

        if (client.config.deleteCommands == true) {
            message.delete()
        }

        const member = message.mentions.members.first() || message.guild.member(args[0]) || message.member;

        let status = message.member.presence.status;

        const newName = member.nickname;

        switch (status) {
            case 'online':
                status = 'Online';
                break;

            case 'invisible':
                status = 'Invisible';
                break;

            case 'оffline':
                status = 'Offline';
                break;

            case 'idle':
                status = 'Idle';
                break;

            case 'dnd':
                status = 'Do Not Disturb';
                break;
        }

        const embed = new MessageEmbed()
            .setAuthor(`${member.user.tag}\'s Information`, member.user.displayAvatarURL({
                dynamic: true
            }))
            .addField(
                '**Creation Date:**',
                `${moment(member.user.createdAt).format('MMMM Do YYYY')}`,
                true
            )
            .addField(
                ' **Date Joined:**',
                `${moment(member.joinedAt).format('MMMM Do YYYY')}`,
                true
            )
            .setThumbnail(member.user.displayAvatarURL({
                dynamic: true
            }))
            .addField('**ID:**', `${member.id}`, true)
            .addField('**Discord @:**', `${member.user}`, true)
            .addField('**Discord Tag:**', `${member.user.tag}`, true)
            .addField('**Highest Role:**', `${member.roles.highest}`, true)
            .addField('**Server Nickname:**', `${newName}`, true)
            .addField('**Current Status:**', `${status}`, true)
            .addField('**Currently Playing:**', `${member.presence.activities[0]}`, true)
            .setColor(client.config.embedColour)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
            .setTimestamp();
        message.channel.send(embed);
    },
};