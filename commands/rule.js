const Discord = require('discord.js')

module.exports = {
    name: 'rule',
    description: 'rule command',
    execute(message, args){
        
        const { prefix, token } = require('../config.json');

        const permEmbed = new Discord.MessageEmbed()
        .setDescription('You don\'t have permmision to use this command.')
        .setColor('#ffea61');

        if (message.author.id !== '624293063795277854')return message.channel.send(permEmbed);

        message.delete();

        const ruleEmbed = new Discord.MessageEmbed()
        .addFields({name: '1.', value: 'Do not respond to Me'},
                    {name: '2.', value: 'Do not ping Milky'},
                    {name: '3.', value: 'Stick to Discord\'s TOS'},
                    {name: '4.', value: 'Do not send NSFW content in non-NSFW channels'},
                    {name: '5.', value: 'Do not ping staff, this includes Moderator\'s'},
                    {name: '6.', value: 'Do not share Discord server invites'},
                    {name: '7.', value: 'Do not talk back to Staff'},
                    {name: '8.', value:'Do not DM Milky or any of the staff'},
                    {name: '9.', value:'Do not raid this server'},
                    {name: '10.', value:'Do not send any links into any channel unless given permission by Milky'})
        .setColor('#ffea61');

        message.channel.send('https://cdn.discordapp.com/attachments/727950634849927232/753826122646552707/mamiChanRules.png');
        message.channel.send(ruleEmbed);
    }
}