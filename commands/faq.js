const Discord = require('discord.js')

module.exports = {
    name: 'faq',
    description: 'faq command',
    execute(message, args){
        
        const { prefix, token } = require('../config.json');

        const permEmbed = new Discord.MessageEmbed()
        .setDescription('You don\'t have permmision to use this command.')
        .setColor('#ffea61');

        if(message.author.id !== '624293063795277854')return message.channel.send(permEmbed);

        message.delete();

        const ruleEmbed = new Discord.MessageEmbed()
        .addFields({name: 'Why cant I use the FAQ, SOURCE, or RULE cmd?', value: 'Answer: `These commands are for the Bot owner.`'},
                    {name: 'What are the 5 levels of punishment?', value: 'Answer: `1: Warn 2: 2 hour Mute 3: 12 hour mute 4: Kick 5: Perm Ban`'},
                    {name: 'When was MamiChan created?', value: 'Answer: `September 9th, 2020`'},
                    {name: 'Who is the sole creator of MamiChan?', value: 'Answer: `MajesticMilky#4862`'},
                    {name: 'What anime is MamiChan from?', value: 'Answer: `Rent-A-Girlfriend`'}
        )
        .setColor('#ffea61');

        const ruleEmbed2 = new Discord.MessageEmbed()
        .setDescription('Failure to meet these standards and you will receive punsihment from level 1 to 5.')
        .setColor('#ffea61');

        message.channel.send('https://cdn.discordapp.com/attachments/698326808977735710/754092079990308881/mamiChanFaq.png');
        message.channel.send(ruleEmbed);
        //message.channel.send(ruleEmbed2);
    }
}