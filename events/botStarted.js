/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  


*/

const nodelogger = require('hyperz-nodelogger');
const chalk = require('chalk');

module.exports = {
    name: 'ready',
    async execute(client) {

        const logger = new nodelogger()
        logger.hypelogger(`${client.user.tag}`, '500', `blue`, `I am online and running!\n\n${chalk.yellow(`MultiBot - V3`)}\n${chalk.yellow(`Bot Started Successfully`)}\n${chalk.yellow(`Config file is verified!`)}`, 'disabled', `blue`, 'double', false)
        setTimeout(() => {
            console.log(`\n\n------ LOGGING TO CONSOLE STARTS BELOW! ------\n\n`)
        }, 800)

        client.user.setActivity(client.config.botStatus, {
            type: client.config.botStatusType
        })

    }
}