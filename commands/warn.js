const Discord = require('discord.js');

module.exports = {
    name: 'warn',
    description: 'warn command',
    execute(message, args){
        const { prefix, token } = require('../config.json');
        const reason = args.slice(2).join(" ");
        const member = message.mentions.members.first();

        const warnEmbed = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription('You don\'t have permission');

            const warnEmbed2 = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription('You need to tag someone');
            const warnEmbed4 = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription('You need a reason');

            const warnEmbed3 = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription(' ' + args[1] +  ' was warned by <@' + message.member.user.id + '> for ' + reason);

            if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send(warnEmbed);

            if(!args[1])return message.channel.send(warnEmbed2);
            if(!args[2])return message.channel.send(warnEmbed4);

            message.channel.send(warnEmbed3);
    }
}
