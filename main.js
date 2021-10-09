/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  

*/


const Discord = require('discord.js');
const client = new Discord.Client({
    intents: ["GUILD_MESSAGE_REACTIONS"]
});
client.config = require('./config.js');
const prefix = client.config.botPrefix;
const token = client.config.botToken;
const fs = require('fs');
const chalk = require('chalk');
const ms = require('ms');



client.commands = new Discord.Collection();
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client, Discord));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client, Discord));
    }
}

if (client.config.useWelcomeModule == true) {
    client.on('guildMemberAdd', async (member) => {

        if (client.config.useAutoRoleOnJoin == true) {
            member.roles.add(client.config.roleToAddOnJoin)
        }

        const welcomec = client.channels.cache.get(client.config.welcomeChannel);
        if (!welcomec) return console.log(chalk.red('You have enabled the welcome messages, but I cannot find the welcome channel .. Please check the config.js'));
        if (client.config.welcomeOption == 1) {
            const welcome = new Discord.MessageEmbed()
                .setThumbnail(member.user.displayAvatarURL({
                    dynamic: true
                }))
                .setColor(client.config.embedColour)
                .setTimestamp()
                .setDescription(`User **${member.displayName} (${member.id})** Has Joined! Our New Member Count is ${member.guild.memberCount}\n\n**Notice:**\n ${client.config.welcomeNoticeMessage}`)
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            welcomec.send(welcome)
        } else if (client.config.welcomeOption == 2) {
            welcomec.send(`\`\`✅\`\` **User \`\`${member.displayName}\`\` has joined! Our new member count is \`\`${member.guild.memberCount}\`\`**`)
        }
    })
} else {
    return;
}




if (client.config.useLeaveModule == true) {
    client.on('guildMemberRemove', async (member) => {
        const leavec = client.channels.cache.get(client.config.leaveChannel);
        if (!leavec) return console.log(chalk.red('You have enabled the leave messages, but I cannot find the leave channel .. Please check the config.js'));
        if (client.config.leaveOption == 1) {
            const welcome = new Discord.MessageEmbed()
                .setThumbnail(member.user.displayAvatarURL({
                    dynamic: true
                }))
                .setColor(client.config.embedColour)
                .setTimestamp()
                .setDescription(`User **${member.displayName} (${member.id})** Has left! Our New Member Count is ${member.guild.memberCount}\n\n**Notice:**\n ${client.config.leaveNoticeMessage}`)
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            leavec.send(welcome)
        } else if (client.config.leaveOption == 2) {
            leavec.send(`\`\`❌\`\` **User \`\`${member.displayName}\`\` has left! Our new member count is \`\`${member.guild.memberCount}\`\`**`)
        }
    })
} else {
    return;
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if (message.channel.type == 'dm') return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === 'announce') {
        client.commands.get('announce').execute(message, args, client, Discord);
    } else if (command === 'credits') {
        client.commands.get('credits').execute(message, args, client, Discord);
    } else if (command === 'dm') {
        client.commands.get('dm').execute(message, args, client, Discord);
    } else if (command === 'say') {
        client.commands.get('say').execute(message, args, client, Discord);
    } else if (command === 'ping') {
        client.commands.get('ping').execute(message, args, client, Discord);
    } else if (command === 'verify') {
        client.commands.get('verify').execute(message, args, client, Discord);
    } else if (command === '8ball') {
        client.commands.get('8ball').execute(message, args, client, Discord);
    } else if (command === 'ascii') {
        client.commands.get('ascii').execute(message, args, client, Discord);
    } else if (command === 'avatar') {
        client.commands.get('avatar').execute(message, args, client, Discord);
    } else if (command === 'meme') {
        client.commands.get('meme').execute(message, args, client, Discord);
    } else if (command === 'intro') {
        client.commands.get('intro').execute(message, args, client, Discord);
    } else if (command === 'outro') {
        client.commands.get('outro').execute(message, args, client, Discord);
    } else if (command === 'accept') {
        client.commands.get('accept').execute(message, args, client, Discord);
    } else if (command === 'deny') {
        client.commands.get('deny').execute(message, args, client, Discord);
    } else if (command === 'do-not-type') {
        client.commands.get('do-not-type').execute(message, args, client, Discord)
    } else if (command === 'website') {
        client.commands.get('website').execute(message, args, client, Discord);
    } else if (command === 'invite') {
        client.commands.get('invite').execute(message, args, client, Discord);
    } else if (command === 'new') {
        client.commands.get('new').execute(message, args, client, Discord)
    } else if (command === 'close') {
        client.commands.get('close').execute(message, args, client, Discord);
    } else if (command === 'ticket-panel') {
        client.commands.get('ticket-panel').execute(message, args, client, Discord);
    } else if (command === 'suggest') {
        client.commands.get('suggest').execute(message, args, client, Discord);
    } else if (command === 'warn') {
        client.commands.get('warn').execute(message, args, client, Discord);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args, client, Discord);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args, client, Discord);
    } else if (command === 'rename') {
        client.commands.get('rename').execute(message, args, client, Discord);
    } else if (command === 'hug') {
        client.commands.get('hug').execute(message, args, client, Discord);
    } else if (command === 'tos') {
        client.commands.get('tos').execute(message, args, client, Discord);
    } else if (command === 'server-stats') {
        client.commands.get('server-stats').execute(message, args, client, Discord);
    } else if (command === 'apply') {
        client.commands.get('apply').execute(message, args, client, Discord)
    } else if (command === 'mute') {
        client.commands.get('mute').execute(message, args, client, Discord)
    } else if (command === 'give-customer') {
        client.commands.get('give-customer').execute(message, args, client, Discord);
    } else if (command === 'remove-customer') {
        client.commands.get('remove-customer').execute(message, args, client, Discord);
    } else if (command === 'bug-report') {
        client.commands.get('bug-report').execute(message, args, client, Discord)
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args, client, Discord);
    } else if (command === 'commands') {
        client.commands.get('commands').execute(message, args, client, Discord);
    } else if (command === 'timer') {
        client.commands.get('timer').execute(message, args, client, Discord);
    } else if (command === 'coinflip') {
        client.commands.get('coinflip').execute(message, args, client, Discord);
    } else if (command === 'serverinfo') {
        client.commands.get('serverinfo').execute(message, args, client, Discord)
    } else if (command === 'userinfo') {
        client.commands.get('userinfo').execute(message, args, client, Discord);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args, client, Discord)
    } else if (command === 'pay') {
        client.commands.get('pay').execute(message, args, client, Discord);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args, client, Discord)
    } else if (command === 'update-status') {
        client.commands.get('update-status').execute(message, args, client, Discord)
    } else if (command === 'restart') {
        client.commands.get('restart').execute(message, args, client, Discord) 
    } else if (command === 'version') {
        client.commands.get('version').execute(message, args, client, Discord)
    } else if (command === 'review') {
        client.commands.get('review').execute(message, args, client, Discord);
    }
    else {
        if (client.config.notifyNoCommand == true) {
            const embed = new Discord.MessageEmbed()
                .setAuthor('ERROR', message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor(`RED`)
                .setDescription(`\`\`❌\`\` **Command not found!**`)
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(embed)
        } else {
            return;
        }
    }
});

client.login(token);