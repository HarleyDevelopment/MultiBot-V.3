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
  name: "new",
  description: "open a ticket!",
  async execute(message, args, client, Discord) {
    if (client.config.useTicketSystem == true) {

      const channelwrong = new Discord.MessageEmbed()
        .setAuthor('ERROR', message.author.displayAvatarURL({
          dynamic: true
        }))
        .setColor('RED')
        .setDescription("``❌`` **You cannot open ticket in this channel!**")
        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

      if (message.channel.id !== client.config.openingTicketsChannelID) return message.channel.send(channelwrong)

      if (client.config.deleteCommands == true) {
        message.delete()
      }

      const channel = await message.guild.channels.create(`ticket-${message.author.tag}`);
      const supportrole = client.config.allowedToSeeTickets


      channel.setParent(client.config.ticketCatergory);

      channel.updateOverwrite(message.guild.id, {
        SEND_MESSAGE: false,
        VIEW_CHANNEL: false,
      });
      channel.updateOverwrite(message.author.id, {
        SEND_MESSAGE: true,
        VIEW_CHANNEL: true,
      });
      channel.updateOverwrite(supportrole, {
        SEND_MESSAGE: true,
        VIEW_CHANNEL: true,
      });


      const open = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}'s Ticket`, message.author.displayAvatarURL({
          dynamic: true
        }))
        .setColor(client.config.embedColour)
        .setThumbnail(client.config.serverIcon)
        .setDescription(client.config.openedMessage)
        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
      channel.send(open)

      const opened = new Discord.MessageEmbed()
        .setAuthor(`SUCCESS`, message.author.displayAvatarURL({
          dynamic: true
        }))
        .setColor('GREEN')
        .setDescription(`You can find your new ticket here ${channel}.`)
        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
      message.channel.send(opened).then(msg => {
        msg.delete({
          timeout: 5000
        })
      })
      message.delete().catch(O_o => {});

      if(client.config.dmTicketOpen == true) {
      const dmEmbed = new Discord.MessageEmbed()
      .setAuthor('SUCCESS', message.author.displayAvatarURL({
        dynamic: true
      }))
      .setColor('GREEN')
      .setDescription("``✅`` **Your new ticket has been opened ..**")
      .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
      message.author.send(dmEmbed).catch(err => console.log(`Error. Could not send the message to that user. More information: ${err}`))
    } 

    } else {
      const disabledConfig = new Discord.MessageEmbed()
        .setAuthor('ERROR', message.author.displayAvatarURL({
          dynamic: true
        }))
        .setColor('RED')
        .setDescription("``❌`` ``Tickets`` Command is disabled via config!")
        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
      message.channel.send(disabledConfig).then(embed => {
        embed.delete({
          timeout: 5000
        })
      })
    }
  },
};