const Discord = require('discord.js')

module.exports = {
    name: 'source',
    description: 'source to see the code of each command',
    execute(message, args){
        const { prefix, token } = require('../config.json');

        const ownerEmbed = new Discord.MessageEmbed()
        .setDescription('You don\'t maintain this bot, you don\'t have permission.')
        .setColor('#ffea61');

        const sourceEmbed = new Discord.MessageEmbed()
        .addFields({name: 'Sources: ', value: '`Avatar` `ban` `clear` `help` `kick` `mute` `ping` `poll` `slowmode` `unmute` `ui` `warn`'})
        .setColor('#ffea61');


        if (message.author.id !== '624293063795277854')return message.channel.send(ownerEmbed);

        if(args[1] === 'avatar'){
            message.channel.send('Source: `avatar.js`');
            message.channel.send('https://cdn.discordapp.com/attachments/753774062626406442/753806715262205993/unknown.png');
            return;
        }
        if(args[1] === 'ban'){
            message.channel.send('Source: `ban.js`');
            message.channel.send('https://cdn.discordapp.com/attachments/753774062626406442/753807195832975480/unknown.png');
            return;
        }
        if(args[1] === 'clear'){
            message.channel.send('Source: `clear.js`');
            message.channel.send('https://cdn.discordapp.com/attachments/727950634849927232/753808146383765544/unknown.png');
            return;
        }
        if(args[1] === 'kick'){
            message.channel.send('Source: `kick.js`');
            message.channel.send('https://cdn.discordapp.com/attachments/753774062626406442/753810059821318154/unknown.png');

            return;
        }
        if(args[1] === 'mute'){
            message.channel.send('Source: `mute.js`');
            message.channel.send('https://cdn.discordapp.com/attachments/727950634849927232/753810599305281576/unknown.png');

            return;
        }
        if(args[1] === 'ping'){
            message.channel.send('Source: `ping.js`');
            message.channel.send('https://cdn.discordapp.com/attachments/727950634849927232/753811098662207549/unknown.png');

            return;
        }
        if(args[1] === 'poll'){
            message.channel.send('Source: `poll.js`');
            message.channel.send('https://cdn.discordapp.com/attachments/727950634849927232/753811311208693890/unknown.png');

            return;
        }
        if(args[1] === 'slowmode'){
            message.channel.send('Source: `slowmode.js`');
            message.channel.send('https://cdn.discordapp.com/attachments/727950634849927232/753812016594157708/unknown.png');

            return;
        }
        if(args[1] === 'unmute'){
            message.channel.send('Source: `unmute.js`');
            message.channel.send('https://cdn.discordapp.com/attachments/727950634849927232/753812016594157708/unknown.png');

            return;
        }
        if(args[1] === 'ui'){
            message.channel.send('Source: `userInfo.js`');
            message.channel.send('https://cdn.discordapp.com/attachments/727950634849927232/753812866586509382/unknown.png');

            return;
        }
        if(args[1] === 'warn'){
            message.channel.send('Source: `warn.js`');
            message.channel.send('https://cdn.discordapp.com/attachments/727950634849927232/753813017098977350/unknown.png');

            return;
        }

        if(!args[1])return message.channel.send(sourceEmbed);
    }
}