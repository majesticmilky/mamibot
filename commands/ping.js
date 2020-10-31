const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'ping command',
    execute(message, args){
        const { prefix, token } = require('../config.json');
        message.channel.send('> 🏓 Pinging..').then(m => {
            const latency = m.createdTimestamp - message.createdTimestamp;
            const pingEmbed = new Discord.MessageEmbed()
            .setTitle('🏓 Pong!')
            .setColor('#ffea61')
            .addFields({name: 'Bot Latency:', value:'`' + latency + 'ms`'},
                       {name: 'Database Latency', value:'`We don\'t have one up yet.`'},
                       {name: 'Server Latency:', value:'`We don\'t have one yet.`'})
            .setFooter(`${message.member.user.tag}`);

            m.delete();
            message.channel.send(pingEmbed);
        })
    }
}