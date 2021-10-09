/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  


*/

const chalk = require('chalk');

module.exports = {
    name: 'messageDelete',
    execute(message) {

        if(message.author.bot) return; 
        if(message.content == '') return console.log(chalk.yellow(`${message.author.tag} (${message.author.id}) deleted a file!`))

        console.log(chalk.yellow(`${message.author.tag} (${message.author.id}) deleted the following message: ${message.content}`))
    }
}