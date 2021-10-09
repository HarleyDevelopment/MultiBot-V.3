/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  


*/

const pagination = require('discord.js-pagination')

module.exports = {
    name: 'commands',
    execute(message, args, client, Discord){

        const page1 = new Discord.MessageEmbed()
        .setTitle('Commands')
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setColor('GREEN')
        .addFields(
            {
                name: '**Bot Name:**',
                value: client.user.tag,
                inline: true
            },
            {
                name: '**Prefix:**',
                value: client.config.botPrefix,
                inline: true 
            },
            {
                name: "**Want to purchase me?**",
                value: 'If you are looking to purchase a bot, just like this. Go the following [link](https://discord.gg/ksv9GaZJ74)'
            }, 
            {
                name: '**About Me:**',
                value: client.config.serverAboutMe
            }
        )

        const page2 = new Discord.MessageEmbed()
        .setTitle('Page 1')
        .setColor('GREEN')
        .addFields(
            {
                name: '> 8ball [question]',
                value: 'Asks 8ball a question!'
            },
            {
                name: '> accept [user]',
                value: 'Accepts a member of the guild. Requires special permissions.'
            },
            {
                name: '> announce [message]',
                value: 'Allows members to make announcements. Requires special permissions.'
            },
            {
                name: '> apply',
                value: 'Applys for an application (if enabled in the config)!'
            },
            {
                name: '> ascii [message]',
                value: 'Converts your message into ascii'
            },
            {
                name: '> avatar [user]',
                value: 'Displays the @\'d members avatar'
            },
            {
            	name: '> clear [amount of messages]',
            	value: 'Clears the chat with the amount of messages provided'
            }
        )

        const page3 = new Discord.MessageEmbed()
        .setTitle('Page 2')
        .setColor('GREEN')
        .addFields(
            {
                name: '> ban [user] [reason]',
                value: 'Bans a member from the guild. Requires special permissions.'
            },
            {
                name: '> bug-report [report]',
                value: 'Sends a bug report to the team!'
            },
            {
                name: '> close',
                value: 'Closes a ticket. Requires special permissions'
            },
            {
                name: '> commands',
                value: 'Displays the current command.'
            },
            {
                name: '> credits',
                value: 'Displays the creators of the bot.'
            },
            {
                name: '> deny [user]',
                value: 'Displays the denied command. Requires special permissions'
            },
            {
                name: '> update-status [new status]',
                value: 'Changes the bot\'s status. Requires special permissions.'
            }
        )


        const page4 = new Discord.MessageEmbed()
        .setTitle('Page 3')
        .setColor('GREEN')
        .addFields(
            {
                name: '> dm [user] [message]',
                value: "DM's the following member. Requires special permissions"
            },
            {
                name: '> do-not-type',
                value: 'Displays the do-not-type command! Requires special permissions'
            },
            {
                name: '> server-stats',
                value: 'Displays the linked FiveM Server\'s stats'
            },
            {
                name: '> give-customer [user]',
                value: 'Gives the @\'d member the customer role'
            },
            {
                name: '> help',
                value: 'Displays the help command'
            },
            {
                name: '> hug [user]',
                value: 'Hugs the @\'d member'
            },
            {
                name: '> coinflip',
                value: 'Flips a coin!'
            }
        )

        const page5 = new Discord.MessageEmbed()
        .setTitle('Page 4')
        .setColor('GREEN')
        .addFields(
            {
                name: '> intro',
                value: "Introduces you! Requires special permissions"
            },
            {
                name: '> invite',
                value: 'Sends an invite.'
            },
            {
                name: '> kick [user] [reason]',
                value: 'Kicks the member from the guild. Requires special permissions'
            },
            {
                name: '> meme',
                value: 'Displays a random meme'
            },
            {
                name: '> mute [user] [reason]',
                value: 'Mutes the @\'d member'
            },
            {
                name: '> new',
                value: 'Opens a ticket'
            }, 
            {
                name: '> outro',
                value: 'Displays the outro commmand. Requires special permissions.'
            }, 
            {
                name: '> ping',
                value: 'Displays the ping command. Usually for testing if the bot is working.'
            },
            {
                name: '> timer [time]',
                value: 'Sets a random time'
            },
            {
                name: '> restart',
                value: 'Restarts the bot. Requires special permissions'
            }
        )

        const page6 = new Discord.MessageEmbed()
        .setTitle('Page 5')
        .setColor('GREEN')
        .addFields(
            {
                name: '> remove-customer [user]',
                value: "Removes a member from the customer list. Requires special permissions."
            },
            {
                name: '> rename [message]',
                value: 'renames a ticket.'
            },
            {
                name: '> say [message]',
                value: 'Echos a message as the bot. Requires special permissions'
            },
            {
                name: '> suggest [suggestion]',
                value: 'Send a suggestion out to the community.'
            },
            {
                name: '> ticket-panel',
                value: 'Sends the ticket panel. Requires special permissions.'
            },
            {
                name: '> tos',
                value: 'Displays the given TOS'
            }, 
            {
                name: '> verify',
                value: 'Uses the verifications command.'
            }, 
            {
                name: '> warn [user] [reason]',
                value: 'Warns the given member'
            },
            {
                name: '> website',
                value: 'Displays the website!'
            }
        )


        const pages = [
            page1, 
            page2,
            page3,
            page4,
            page5,
            page6
        ]
        
        const emoji = ["◀️", "▶️"]

        const timeout = '300000'

        pagination(message, pages, emoji, timeout)
    }
}