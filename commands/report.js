const Discord = require('discord.js')

module.exports = {
    name: 'report',
    description: 'report command',
    async execute(client, message, args){
        const { prefix, token } = require('../config.json');
        
        const report = args.slice(1).join(" ");

        const blacklist = [];  

        if(message.author.id == blacklist)return message.channel.send();
        

        const embed2 = new Discord.MessageEmbed()
        .setTitle('Bug')
        .setAuthor(message.author.id.name)
        .setDescription(report)
        .setColor('#ffea61')
        .setTimestamp();

        const myId = '754164382543511642';

        client.channels.fetch(myId).then((channel) => {
            channel.send(embed2);
        })    }
}