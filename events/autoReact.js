/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  


*/

const chalk = require('chalk')

module.exports = {
    name: 'message',
    execute(message, client) {
        if(client.config.autoReact == true) {
            const channel = client.channels.cache.get(client.config.autoReactChannel)
            if(!channel) return console.log(chalk.red(`You have auto-react enabled, but don't have a channel set! For me to work, please set a channel`))

            if(message.deleted) return;
            
            if(message.channel.id == channel) {
                if(client.config.botBypassAutoRole == true) {
                    if(message.author.bot) return;
                }
                
                message.react(client.config.autoReactEmoji);
            } else {
                return;
            }
        }
    }
}
