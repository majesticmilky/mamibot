const Discord = require('discord.js')

module.exports = {
    name: 'avatar',
    description: 'avatar command',
    execute(message, args){
        const { prefix, token } = require('../config.json');

        const embed = new Discord.MessageEmbed()

        if(!message.mentions.users.first()){
            embed.setThumbnail(message.author.displayAvatarURL())
            embed.setColor('#ffea61')
            return message.channel.send(embed)
        }else{
            const user = message.mentions.users.first();
            embed.setThumbnail(user.displayAvatarURL())
            embed.setColor('#ffea61')
            return message.channel.send(embed)
        }

    }
}