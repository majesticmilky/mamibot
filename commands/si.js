const Discord = require('discord.js')

module.exports = {
    name: 'si',
    description: 'Server Info command',
    execute(message, args){
        const { prefix, token } = require('../config.json');

        let region;

        switch (message.guild.region){
            case 'europe':
            region = ' Europe'
            break;

            case 'us-east':
                region = ' US-East'
            break;

            case 'us-west':
                region = ' US-West'
            break;

            case 'us-south':
                region = ' US-South'
            break;

            case 'us-central':
                region = ' US-Central'
            break;

            case 'sydney':
                region = ' Sydney'
            break;

            case 'south-africa':
                region = ' South-Africa'
            break;

            case 'singapore':
                region = ' Singapore'
            break;

            case 'russia':
                region = ' Russia'
            break;

            case 'japan':
                region = ' Japan'
            break;

            case 'india':
                region = ' India'
            break;

            case 'hong-kong':
                region = ' Hong-Kong'
            break;

            case 'brazil':
                region = ' Brazil'
            break;
        }

        const embed = new Discord.MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setColor('#ffea61')
        .setTitle(message.guild.name)
        .addFields(
            {name: 'Owner: ', value:`${message.guild.owner}`},
            {name: 'Members: ', value:`${message.guild.memberCount} members`},
            {name: 'Members Online: ', value:`${message.guild.members.cache.filter(m => m.user.presence.status == 'online').size} online`},
            {name: 'Bots: ',value:`${message.guild.members.cache.filter(m => m.user.bot).size} bots`},
            {name: 'Created At: ', value:`${message.guild.createdAt}`},
            {name: 'Role Count: ', value:`${message.guild.roles.cache.size} roles`},
            {name: 'Region: ', value:`${region}`},
        )
        .setFooter(message.member.user.tag);

        message.channel.send(embed);

    }
}