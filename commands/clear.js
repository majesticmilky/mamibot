const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    description: 'clear command',
    execute(message, args){
        const { prefix, token } = require('../config.json');
        const clearEmbed = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription('You don\'t have permission');
            
            const clearEmbed2 = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription('I can only delete 100 messages at a time, please try again.');
            
            const clearEmbed3 = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription('Please type the amount of messages you want to delete');

            const clearEmbed4 = new Discord.MessageEmbed()
            .setColor('#ffea61')
            .setDescription(' <@' + message.member.user.id + '> cleared ' + args[1] + ' messages.');

                if(!message.member.permissions.has("MANAGE_MESSAGES"))return message.channel.send(clearEmbed);

                if(!args[1])return message.channel.send(clearEmbed3);

               if(args[1] > 100) return message.channel.send(clearEmbed2);

               message.channel.bulkDelete(args[1])
               message.channel.send(clearEmbed4).then(m => m.delete({ timeout: 5000 }));
    }
}