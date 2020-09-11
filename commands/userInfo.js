const Discord = require('discord.js')

module.exports = {
    name: 'userInfo',
    description: 'user info command',
    execute(message, args){
        const { prefix, token } = require('../config.json');

        let mentionedMember = message.mentions.members.first();
        let mentionedUser = message.mentions.users.first();

        if(!args[1]){
            const userEmbed2 = new Discord.MessageEmbed()
        .setTitle(`${message.member.user.tag}`)
        .setThumbnail(message.author.displayAvatarURL())
        .setColor('#ffea61')
        .addFields(
            {name: 'Username: ', value: `${message.member.user.tag}`},
            {name: 'User ID: ', value: `${message.member.id}`},
            {name: 'Account Created: ', value: `${message.member.user.createdAt}`},
            {name: 'Joned Server: ', value: `${message.member.joinedAt}`},
            {name: 'User Status: ', value: `${message.member.presence.status}`}
        )
        .setFooter(`${message.member.user.tag}`);

            message.channel.send(userEmbed2);

            return;
        }


        const userEmbed = new Discord.MessageEmbed()
        .setTitle(`${mentionedUser.username}`)
        .setThumbnail(mentionedUser.displayAvatarURL())
        .setColor('#ffea61')
        .addFields(
            {name: 'Username: ', value: `${mentionedUser.username}`},
            {name: 'User ID: ', value: `${mentionedUser.id}`},
            {name: 'Account Created: ', value: `${mentionedUser.createdAt}`},
            {name: 'Joned Server: ', value: `${mentionedMember.joinedAt}`},
            {name: 'User Status: ', value: `${mentionedUser.presence.status}`}
        )
        .setFooter(`${message.member.user.tag}`);

            message.channel.send(userEmbed);


    }
 }