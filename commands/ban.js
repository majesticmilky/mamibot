const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'ban command',
    execute(message, args){
        const member = message.mentions.members.first();
        const { prefix, token } = require('../config.json');
        const reason = args.slice(2).join(" ");

        const banEmbed = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription('You don\'t have permission');

            const banEmbed2 = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription('You need to tag someone');
            const warnEmbed2 = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription('You need to reason');

            const banEmbed3 = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription(' ' + args[1] + ' was banned by <@' + message.author.id + '> for ' + reason);

            if(!args[1])return message.channel.send(banEmbed2);
            if(!args[2])return message.channel.send(warnEmbed2);

            if(message.member.permissions.has("BAN_MEMBERS")){
               member.ban().then((member) => {
                    message.channel.send(banEmbed3);
                })
            } else if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send(banEmbed);
    }
}
