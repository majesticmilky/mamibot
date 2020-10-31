const Discord = require('discord.js')

module.exports = {
    name: 'invite',
    description: 'Invite command',
    execute(message, args){
        const { prefix, token } = require('../config.json');

        const Embed = new Discord.MessageEmbed()
        .setDescription('http://bit.ly/MamiBot')
        .setColor('#ffea61');

        message.channel.send(Embed);

    }
}