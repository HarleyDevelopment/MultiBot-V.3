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
    name: 'hug',
    execute(message, args, client, Discord) {
        if(client.config.useHugCommand == true) {

            if(client.config.deleteCommands == true) {
                message.delete();
            }
            
            const hugNone = new Discord.MessageEmbed()
            .setDescription(`**\`\`${message.author.username}\`\` tried hugging someone, but could not find anyone .. How sad!**`)
            .setColor(client.config.embedColour)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!user) return message.channel.send(hugNone);


            const hugEmbed = new Discord.MessageEmbed()
            .setDescription(`**\`\`${message.author.username}\`\` just hugged \`\`${user.user.username}\`\`**`)
            .setColor(client.config.embedColour)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(hugEmbed)
        } else {
            const noConfig = new Discord.MessageEmbed()
            .setAuthor(`ERROR`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('RED')
            .setDescription("``❌`` **``Hug`` Command disabled via config!**")
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(noConfig);
        }
    }
}