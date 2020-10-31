const Discord = require('discord.js');

module.exports = {
    name: 'unmute',
    description: 'unmtue command',
    execute(message, args){
        const { prefix, token } = require('../config.json');
        const member = message.mentions.members.first();

        const unmuteEmbed = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription('You don\'t have permission');

            const unmuteEmbed2 = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription('You need to tag someone');

            const unmuteEmbed3 = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription(' ' + args[1] + ' was unmuted by ' + message.member.user.tag);

            if(!message.member.permissions.has("MUTE_MEMBERS")) return message.channel.send(unmuteEmbed);
            if(!args[1])return message.channel.send(unmuteEmbed2)

            var role = message.guild.roles.cache.find(role => role.name === "Muted");
            var memrole = message.guild.roles.cache.find(role => role.name === "Member");
            if(!message.guild.roles.cache.find(role => memrole.name === "Member"))return;
            if(!member.roles.cache.find(role => role.name === "Muted"))return message.channel.send('> This user isn\'t Muted');
            member.roles.remove(role).then(message.channel.send(unmuteEmbed3));
            member.roles.add(memrole);
    }
}