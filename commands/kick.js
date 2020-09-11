const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'kick command',
    execute(message, args){
        const { prefix, token } = require('../config.json');
        const member = message.mentions.members.first();

        const reasonEmbed = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription('You don\'t have permission');

            const reasonEmbed2 = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription('You need to tag someone');

            const modEmbed = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription(' ' + args[1] + ' was kicked by ' + message.member.user.tag);

            if(!args[1])return message.channel.send(reasonEmbed2);


        if(message.member.permissions.has("KICK_MEMBERS")){
        member.kick().then((member) => {
            message.channel.send(modEmbed);
        })
        } else if(!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send(reasonEmbed);
    }
}