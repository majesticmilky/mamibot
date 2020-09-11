const Discord = require('discord.js');

module.exports = {
    name: 'slowmode',
    description: 'slowmode command',
    execute(message, args){
        const { prefix, token } = require('../config.json');


        const slowEmbed = new Discord.MessageEmbed()
        .setColor('#ffea61')
        .setDescription('You don\'t have permission');

        const slowEmbed2 = new Discord.MessageEmbed()
        .setColor('#ffea61')
        .setDescription('Please put the amount of slowmode you want');

        const slowEmbed3 = new Discord.MessageEmbed()
        .setColor('#ffea61')
        .setDescription('Slowmode has been updated to ' + args[1]);

        const slowEmbed4 = new Discord.MessageEmbed()
        .setColor('#ffea61')
        .setDescription('This number is too high, please choose 21600 or less.');

        if(!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(slowEmbed);
        if(!args[1])return message.channel.send(slowEmbed2);
        if(args[1] > 21600)return message.channel.send(slowEmbed4);

        message.channel.setRateLimitPerUser(args[1]).then(message.channel.send(slowEmbed3));
    }
}