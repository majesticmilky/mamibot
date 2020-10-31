const Discord = require('discord.js')

module.exports = {
    name: 'poll',
    description: 'Poll command',
    async execute(message, args){
        const { prefix, token } = require('../config.json');

        const pollChannel = message.mentions.channels.first();
        const pollDescription = args.slice(2).join(" ");

        const Embed = new Discord.MessageEmbed()
        .setDescription('You don\'t have permission to use this command.')
        .setColor('#ffea61');

        if(!message.member.permissions.has("MANAGE_CHANNELS"))return message.channel.send(Embed);

        const pollEmbed = new Discord.MessageEmbed()
        .setTitle('Poll')
        .setDescription(pollDescription)
        .setColor('#ffea61')
        let msgEmbed = await pollChannel.send(pollEmbed);
        await msgEmbed.react('✔️')
        await msgEmbed.react('❌')

    }
}