const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'help command',
    execute(message, args){
        const { prefix, token } = require('../config.json');
        
        
            if(args[1] === 'ban'){
                const banEmbed = new Discord.MessageEmbed()
                .setAuthor('Ban')
            .setDescription('This command will force leave the person you tagged and will not let them join back until you unban them. You have to unban them manually until the unban command comes out.')
            .addFields({name: 'Permission:', value: 'Ban Members'})
            .setColor('#ffea61')
            .setFooter(`${message.member.user.tag}`);
            message.channel.send(banEmbed);
            return;
            }
            if(args[1] === 'kick'){
                const kickEmbed = new Discord.MessageEmbed()
                .setAuthor('Kick')
            .setDescription('This command will force leave the person you tagged but they can still join back')
            .addFields({name: 'Permission:', value: 'Kick Members'})
            .setColor('#ffea61')
            .setFooter(`${message.member.user.tag}`);
            message.channel.send(kickEmbed);
            return;
            }
            if(args[1] === 'clear'){
                const clearEmbed = new Discord.MessageEmbed()
                .setAuthor('Clear')
            .setDescription('This command will delete the selected amount of messages. You can delete up to 100 messages at a time.')
            .addFields({name: 'Permission:', value: 'Manage Messages'})
            .setColor('#ffea61')
            .setFooter(`${message.member.user.tag}`);
            message.channel.send(clearEmbed);
            return;
            }
            if(args[1] === 'warn'){
                const warnEmbed = new Discord.MessageEmbed()
                .setAuthor('Warn')
            .setDescription('This command will warn the user you tagged.')
            .addFields({name: 'Permission:', value: 'Manage Channels'})
            .setColor('#ffea61')
            .setFooter(`${message.member.user.tag}`);
            message.channel.send(warnEmbed);
            return;
            }
            if(args[1] === 'mute'){
                const muteEmbed = new Discord.MessageEmbed()
                .setAuthor('Mute')
            .setDescription('This command will mute the person you tagged and will force them to stop speaking. You must have a role named \'Muted\' and another role named \'Member\'.')
            .addFields({name: 'Permission:', value: 'Mute Members'})
            .setColor('#ffea61')
            .setFooter(`${message.member.user.tag}`);
            message.channel.send(muteEmbed);
            return;
            }
            if(args[1] === 'unmute'){
                const UnmuteEmbed = new Discord.MessageEmbed()
                .setAuthor('Unmute')
            .setDescription('This command will unmute the person you tagged and will let them them speak again.')
            .addFields({name: 'Permission:', value: 'Mute Members'})
            .setColor('#ffea61')
            .setFooter(`${message.member.user.tag}`);
            message.channel.send(UnmuteEmbed);
            return;
            }
            if(args[1] === 'slowmode'){
                const slowEmbed = new Discord.MessageEmbed()
                .setAuthor('Slowmode')
            .setDescription('This command will change the selected channel\'s slowmode.')
            .addFields({name: 'Permission:', value: 'Manage Guild'})
            .setColor('#ffea61')
            .setFooter(`${message.member.user.tag}`);
            message.channel.send(slowEmbed);
            return;
            }
            if(args[1] === 'ping'){
                const pingEmbed = new Discord.MessageEmbed()
                .setAuthor('Ping')
            .setDescription('This command will evaluate the bot\'s latency.')
            .addFields({name: 'Permission:', value: 'User'})
            .setColor('#ffea61')
            .setFooter(`${message.member.user.tag}`);
            message.channel.send(pingEmbed);
            return;
            }
            if(args[1] === 'help'){
                const hEmbed = new Discord.MessageEmbed()
                .setAuthor('Help')
            .setDescription('This command will show you all the commands this bot has.')
            .addFields({name: 'Permission:', value: 'User'})
            .setColor('#ffea61')
            .setFooter(`${message.member.user.tag}`);
            message.channel.send(hEmbed);
            return;
            }
            if(args[1] === 'poll'){
                const pollEmbed = new Discord.MessageEmbed()
                .setAuthor('Poll')
            .setDescription('This command will create a poll for you, use it as: mc!poll <channel> <question>')
            .addFields({name: 'Permission:', value: 'Manage Channels'})
            .setColor('#ffea61')
            .setFooter(`${message.member.user.tag}`);
            message.channel.send(pollEmbed);
            return;
            }
            if(args[1] === 'neko'){
                const nekoEmbed = new Discord.MessageEmbed()
                .setAuthor('Neko')
            .setDescription('This command will let you pick from eight different Neko/Anime roleplay commands, they are: `Kiss` `Hug` `Pat` ||blowjob, bj, sex, fuck, lewd||')
            .addFields({name: 'Permission:', value: 'User'})
            .setColor('#ffea61')
            .setFooter(`${message.member.user.tag}`);
            message.channel.send(nekoEmbed);
            return;
            }
            if(args[1] === 'ui'){
                const uiEmbed = new Discord.MessageEmbed()
                .setAuthor('User Info')
            .setDescription('This command will let you see the information about yourself, or the person you ping.')
            .addFields({name: 'Permission:', value: 'User'})
            .setColor('#ffea61')
            .setFooter(`${message.member.user.tag}`);
            message.channel.send(uiEmbed);
            return;
            }
            if(args[1] === 'avatar'){
                const avatarEmbed = new Discord.MessageEmbed()
                .setAuthor('Avatar')
            .setDescription('This command will let you see your\'s or another member\'s avatar.')
            .addFields({name: 'Permission:', value: 'User'})
            .setColor('#ffea61')
            .setFooter(`${message.member.user.tag}`);
            message.channel.send(avatarEmbed);
            return;
            }
            if(args[1] === 'source'){
                const sourceEmbed = new Discord.MessageEmbed()
                .setAuthor('Source')
            .setDescription('This command will let you see the bot\'s source code.')
            .addFields({name: 'Permission:', value: 'Bot Owner'})
            .setColor('#ffea61')
            .setFooter(`${message.member.user.tag}`);
            message.channel.send(sourceEmbed);
            return;
            }
            if(args[1] === 'invite'){
                const invEmbed = new Discord.MessageEmbed()
                .setAuthor('Invite')
            .setDescription('This command will give you the bot\'s invite link so you can have it in your own server!.')
            .addFields({name: 'Permission:', value: 'User'})
            .setColor('#ffea61')
            .setFooter(`${message.member.user.tag}`);
            message.channel.send(invEmbed);
            return;
            }
            if(args[1] === 'server'){
                const serverEmbed = new Discord.MessageEmbed()
                .setAuthor('Server')
            .setDescription('This command will give you the bot\'s support server invite link so you can get the help you need.')
            .addFields({name: 'Permission:', value: 'User'})
            .setColor('#ffea61')
            .setFooter(`${message.member.user.tag}`);
            message.channel.send(servereEmbed);
            return;
            }


            const helpEmbed = new Discord.MessageEmbed()
            .setTitle('Help')
            .setDescription('Prefix: `mc!`')
            .setColor('#ffea61')
            .addFields({name: 'Moderation', value:'`Ban` `Kick` `Clear` `Warn` `Mute` `Unmute` `slowmode`'},
                       {name: 'Fun', value:'`Nothing`'},
                       {name: 'Misc', value:'`Poll` `ui` `avatar`'},
                       {name: 'Server', value:'`Ping` `Help` `Invite` `Server`'},
                       {name: 'Neko', value: '`pat` `kiss` `hug` NSFW: ||blowjob, bj, sex, fuck, lewd||'})
            .setFooter(`${message.member.user.tag}`);

            message.channel.send(helpEmbed);
    }
}