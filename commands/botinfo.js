const Discord = require('discord.js')

module.exports = {
    name: 'bi',
    description: 'bot info cmmd',
    execute(message, args){
        const { prefix, token } = require('../config.json');


        const botEmbed = new Discord.MessageEmbed()
        .setDescription('This is not a bot! Please tag a bot.')
        .setColor('ffea61');

        const embed = new Discord.MessageEmbed()
        .setThumbnail('https://cdn.discordapp.com/attachments/746941793689403505/755220284797091850/mami.jpg')
        .setTitle('My Info!')
        .setColor('ffea61')
        .addFields(
            {name: 'Creator: ', value: 'MajesticMilky#4862'},
            {name: 'Created At: ', value: `Wed Sep 09 2020 16:44:06 GMT-0700 (Pacific Daylight Time)`},
            {name: 'Support Server: ', value: 'https://discord.gg/jp8TVJP'},
            {name: 'Invite: ', value: 'https://bit.ly/MamiBot'},
            {name: 'Version: ', value: 'v1.6'}
        )
        .setFooter(message.member.user.tag);

        

       if(!args[1])return message.channel.send(embed);

       if(!message.mentions.members.first() === message.guild.members.bot)return message.channel.send(botEmbed);

    }
}