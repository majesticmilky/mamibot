const Discord = require('discord.js');

module.exports = {
    name: 'mute',
    description: 'mute command',
    execute(message, args){
        const { prefix, token } = require('../config.json');
        const reason = args.slice(2).join(" ");
        const member = message.mentions.members.first();

        const muteEmbed = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription('You don\'t have permission');
            
            const muteEmbed2 = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription('You need to tag someone');
            const warnEmbed2 = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription('You need to reason');

            const muteEmbed3 = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription(' ' + args[1] + ' was muted by <@' + message.member.user.id + '> for ' + reason);
            if(!message.member.permissions.has("MUTE_MEMBERS")) return message.channel.send(muteEmbed);

            if(!args[1])return message.channel.send(muteEmbed2)
            if(!args[2])return message.channel.send(warnEmbed2);

            var muterole = message.guild.roles.cache.find(role => role.name === "Muted");
            var memrole = message.guild.roles.cache.find(role => role.name === "Member");
            if(!message.guild.roles.cache.find(role => memrole.name === "Member"))return;
            if(!message.guild.roles.cache.find(role => muterole.name === "Muted"))return message.channel.send('> Please create a role named `Muted`');
            member.roles.add(muterole).then(message.channel.send(muteEmbed3));
            member.roles.remove(memrole);
    }
}