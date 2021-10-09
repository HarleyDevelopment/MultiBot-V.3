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
    name: '8ball',
    execute: async (message, args, client, Discord) => {

        const noConfig = new Discord.MessageEmbed()
        .setAuthor(`ERROR`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor('RED')
        .setDescription("``❌`` **``8Ball`` Command disabled via config!**")
        .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);

        if(client.config.use8BallCommand !== true) return message.channel.send(noConfig)

        if(client.config.deleteCommands == true) {
            message.delete();
        }

        let Embed1 = new Discord.MessageEmbed()
            .setAuthor('ERROR', message.author.displayAvatarURL({
                dynamic: true
            }))
            .setDescription("``❌`` **You must ask a question!**")
            .setColor(client.config.embedColour)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
        let question = args.join(" ");
        if (!question)
            return message.channel.send(Embed1);
        else {
            let responses = client.config.eightBallResponses;
            let response =
                responses[Math.floor(Math.random() * responses.length - 1)];
            let Embed = new Discord.MessageEmbed()
                .setAuthor('SUCCESS', message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setDescription(`**Your Question:**\n${question}\n**My Answer:**\n${response}`)
                .setColor(client.config.embedColour)
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(Embed);
        }
    },
};