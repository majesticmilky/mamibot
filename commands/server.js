
const Discord = require('discord.js')

module.exports = {
    name: 'server',
    description: 'server invite command',
    execute(message, args){
        const { prefix, token } = require('../config.json');

        const inviteEmbed = new Discord.MessageEmbed()
        .setDescription('https://discord.gg/jp8TVJP')
        .setColor('#ffea61');

        message.channel.send(inviteEmbed);

    }
}