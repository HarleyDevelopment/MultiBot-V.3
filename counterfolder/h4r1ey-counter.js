/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  


*/

const chalk=require('chalk');module["exports"]= async (_0xd270x1)=>{if(_0xd270x1["config"]["useMemberCounterVC"]== true){const _0xd270x2=_0xd270x1["guilds"]["cache"]["get"](_0xd270x1["config"]["guildID"]);setInterval(()=>{const _0xd270x3=_0xd270x2["memberCount"];const _0xd270x4=_0xd270x2["channels"]["cache"]["get"](_0xd270x1["config"]["memberCounterVC"]);_0xd270x4["setName"](`Member Count: ${_0xd270x3["toLocaleString"]()}`)},5000)};if(_0xd270x1["config"]["useMemberCounterVC"]== false){console["log"](chalk["blue"](`Member counting module disabled via ../config.js`))}}