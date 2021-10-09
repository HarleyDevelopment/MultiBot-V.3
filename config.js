const _config = {
    /*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  
    
    
    Hello and thanks for purchasing the v.3 of the multi bot! I hope you use and enjoy this bot within your guild .. If you're experiencing issues 
    then please contact support via the Discord. If you're struggling to setup and get the bot running then please refer to the documentation. For the 
    license key please go to the license website as folllowing: https://license.h4r1ey-dev.xyz. This bot comes with alot new and better commands to the v1
    you may NOT use the old config as it will not work! 

    Everything in the following file can be changed to your liking. I don't suggest nor promote you editing any of the other files as if you break
    anything I will NOT help you fix it. My moderation team does, firstly check the code ensuring nothing has been changed! If you do miss anything within the config, this 
    ranging from speechmarks the bot will not start and will display errors.

    Copyright may be changed to your liking, please stop asking me if you can change it! Refer to the message above.

    - Thanks, Harley!

    
    */


    // Main Config (Required) \\
    botToken: 'Fucking awesome', // Bot token, this can be found here: https://discord.com/developers/applications
    botPrefix: '-',
    botID: '877537676016893992', // can be found within your discord! Right click the bot and hit COPY ID
    debugMode: false, // False by defualt .. Display errors (fatal errors will still display).
    botStatus: "https://h4r1ey-dev.xyz",
    botStatusType: 'WATCHING',


    // Custom Config \\
    guildName: "Harley's Development",
    serverCopyright: '2021 H4r1ey Dev', // Copyright symbol is auto done!
    serverIcon: 'https://cdn.discordapp.com/attachments/875545915237208075/885234636886790155/Harleyyyyyyyyyyyyyyyyyyyyyyyyyyyy-dev_logo2.png',
    serverAboutMe: 'Welp. Making Discord Bots I guess ....',
    guildID: '762476101363957760',
    websiteLink: 'https://h4r1ey-dev.xyz',
    embedColour: '#00ffe8',
    mainMemberRole: '875545889316413511',
    mutedRole: '875545880193794058',
    serverInvite: 'https://discord.gg/ksv9GaZJ74',
    deleteCommands: true,
    verifiedRoleID: '875545889316413511',
    verificationRunningChannelID: '875545914436112444',
    dmVerificationMessage: 'Thankyou for joining! Hope you enjoy your stay! You can find my store here: https://h4r1ey-dev.xyz', // Do not use the following: ` or * it will break the structure!
    mutedRoleID: '875545880193794058',
    eightBallResponses: ["Nah", "Yeah", "Maybe", "I don't know", "You tell me!", "Unsure g", "Maybeee", "I don't understand.", "WHAT?!"], // These must be 9+ for it to work!
    outroMessage: "Thanks for contacting support! ``- H4r1ey Development Support Team``",
    AcceptType: 1, // 1 = Embed, 2 = Normal Message
    denyType: 1, // 1 = Embed, 2 = Normal Message
    warnOption: 1, // 1 = Embed, 2 = Normal Message
    dmModeratorsOnWarn: true,
    dmUserOnWarn: true,
    dmOnAccept: true, // When a user is accepted. DM them?
    dmCompleteVerification: true, // After someone is verified, DM them informing them they have verified?
    kickOption: 1, // 1 = Embed, 2 = Normal Message
    dmUserOnKick: true,
    dmModeratorsOnKick: true,
    banOption: 1, // 1 = Embed, 2 = Normal Message
    dmUserOnBan: true,
    dmModeratorsOnBan: true,
    TermsOfService: `You may find my TOS on my website. Please refer to the website from now-on!`, // Your TOS! Use \n to make a new line.
    useFiveMCommands: false, // this is here to fall in line with the two below :]
    fivemServerIP: 's1.sadrp.net',
    fivemServerPort: '30120',
    useApplications: false,
    applicationQuestons: [
        "What is your name?",
        "What is your timezone?",
        "Do you have any experience within software development?",
        "Why should we accept you?",
        "What makes you different to the other applicants?",
        "Are you a moderator else where?",
        "What is your experience?"
    ],
    applicationAnswersChannel: '886973912783663194',
    pingRoleOnSubmit: true,
    roleToPingOnSubmit: '875545877127766087', // ROLE ID
    muteOption: 1, // 1 = Embed, 2 = Normal Message
    removeMemberRoleOnMute: true,
    dmMemberOnMute: true,
    dmModeratorsOnMute: true,
    customerRole: '875545881338851339',
    useMemberCounterVC: true,
    memberCounterVC: '875545900330668073',
    autoReact: true,
    autoReactChannel: '890244180822065202',
    autoReactEmoji: '🏎️',
    botBypassAutoRole: true,
    useWelcomeModule: true,
    welcomeOption: 1, // 1 = Embed, 2 = Normal Message
    welcomeChannel: '875545913274286091',
    welcomeNoticeMessage: 'Hello and welcome to my server! Hope you enjoy your stay, if you have any questions dont be afraid to ask!',
    useLeaveModule: true,
    leaveOption: 1, // 1 = Embed, 2 = Normal Message
    leaveChannel: '886974389613113465',
    leaveNoticeMessage: 'Thanks for joining and checking my server out, hope you enjoyed your stay!',
    useAutoRoleOnJoin: true,
    roleToAddOnJoin: '875545896979415050',
    deleteBadWorlds: true,
    bypassBadWords: ["875545877127766087", "875545877987590164", "875545878721601536"], // Role ID's.
    badWords: ["nigger", "nigga", "paki"], // Don't worry about it being capital letters. It automatically detects if it is a capital letter or not. 
    usePingPrevention: true,
    pingPreventedMember: ["659742300364341254", "430821401683951617"],
    bypassPingPrevention: ['875545877127766087', '875545878721601536'],
    useSteamScamLinkProtection: true,
    steamScamLinkTerms: ["csgo"], // You may input as many as you want, you may remove some if needed also. Don't worry, it is NOT capital sensitive. 
    deleteLinks: false,
    bypassLinkPrevention: ["875545877127766087", "875545877987590164"],
    bannedLinks: [".gg"],
    notifyNoCommand: true, // Send a message when someone runs a command that is not found?

    // Permissions Setup \\
    announcePerms: ["875545877127766087", "875545877987590164", "875545878721601536"],
    dmCommandPerms: ["875545877127766087", "875545877987590164", "875545878721601536"],
    sayCommandPerms: ["875545877127766087", "875545877987590164", "875545878721601536"],
    introCommandPerms: ["875545877127766087", "875545877987590164", "875545878721601536"],
    outroCommandPerms: ["875545877127766087", "875545877987590164", "875545878721601536"],
    AcceptCommandPerms: ["875545877127766087", "875545877987590164", "875545878721601536"],
    denyCommandPerms: ["875545877127766087", "875545877987590164", "875545878721601536"],
    doNotTypePerms: ["875545877127766087", "875545877987590164", "875545878721601536"],
    closeTicketsPerms: ["875545877127766087", "875545877987590164", "875545878721601536"],
    ticketPanelPerms: ["875545877127766087", "875545877987590164", "875545878721601536"],
    warnCommandPerms: ["875545877127766087", "875545877987590164", "875545878721601536"],
    kickCommandPerms: ["875545877127766087", "875545877987590164", "875545878721601536"],
    banCommandPerms: ["875545877127766087", "875545877987590164", "875545878721601536"],
    muteCommandPerms: ["875545877127766087", "875545877987590164", "875545878721601536"],
    renameTicketsPerms: ["875545877127766087", "875545877987590164", "875545878721601536"],
    giveCustomerPerms: ["875545877127766087", "875545877987590164"],
    removeCustomerPerms: ["875545877127766087", "875545877987590164"],
    clearChatPerms: ["875545877127766087", "875545877987590164", "875545878721601536"],
    updateBotStatusPermissions: ["875545877127766087", "875545877987590164", "875545878721601536"],

    // Module Toggle \\ 
    useAnnouncements: true,
    useDMCommand: true,
    useSayCommand: true,
    useVerificationSystem: true,
    use8BallCommand: true,
    useAsciiArt: true,
    useAvatarCommand: true,
    useIntroCommand: true,
    useOutroCommand: true,
    useAcceptCommand: true,
    useDenyCommand: true,
    useDoNotTypeCommand: true,
    useWebsiteCommand: true,
    useMemeCommand: true,
    useTicketSystem: true,
    useSuggestions: true,
    useWarnCommand: true,
    useKickCommand: true,
    useBanCommand: true,
    useInviteCommand: true,
    useHugCommand: true,
    useTOScommand: false,
    useMuteCommand: true,
    useGiveCustomerCommand: true,
    useRemoveCustomerCommand: true,
    useBugReportCommand: false,

    // Tickets Config \\ 
    allowedToSeeTickets: '875545878721601536', // ROLE ID
    ticketCatergory: '884204077037277235',
    openedMessage: 'Hello! How can our moderation members be at assistance today? If you have to make a report on a moderator please state!', // Message inside of the ticket (when opened)
    openingTicketsChannelID: '875545933943824416', // The id the of the channel where people open tickets.
    dmTicketOpen: true, // when someone opens a ticket, DM them informing them they have.

    // Logging Channels \\ 
    logVerifications: true, // true or false!
    verificationsLoggingChannel: '886974389613113465',
    suggestionsChannelID: '875545928327659531',
    suggestASuggestionChannelID: '875545929694994512', // Channel ID where people type [prefix]suggest [suggestion]
    logWarnings: true, // true or false!
    warnLoggingChannel: '886974389613113465',
    logKicks: true, // true or false!
    kickLoggingChannel: '886974389613113465',
    logBans: true, // true or false!
    banLoggingChannel: '886974389613113465',
    logMutes: true, // true or false!
    muteLoggingChannel: '886974389613113465',
    bugReportChannel: '886974389613113465',
    deletedMessageLog: '886974389613113465',
    botDMLogger: '886974389613113465',
    clearedMessageLogging: '886974389613113465',

    updatedConfig: {
        usePayCommands: true,
        payCommandPerms: ["875545877127766087"],
        moneyCurrency: '£', // $ or £ (For example.)
        paymentLink: 'https://h4r1ey-dev.xyz',
        usePayPal: true // set to false for a normal payment embed :)
    }
}

module.exports = _config;


/*
©️ 2021 H4r1ey Development
All Rights Resolved

*DO NOT DELETE THE ABOVE!*
*/
