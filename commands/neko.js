const fetch = require('node-fetch');
const discord = require('discord.js');


module.exports = {
    name:'neko',
    description: 'neko command',
    async execute(message, args){
        

        if(args[1] === 'pat'){
        const { MessageAttachment } = require('discord.js');
        const { body } = fetch('https://nekos.life/api/v2/img/pat').then(res => res.json()).then(result => {
            if (!result.url) return message.channel.send('Something went wrong.');
            const attachment = new MessageAttachment(result.url);
            message.channel.send(attachment);
        });
        return;
        }
        if(args[1] === 'hug'){
            const { MessageAttachment } = require('discord.js');
        const { body } = fetch('https://nekos.life/api/v2/img/hug').then(res => res.json()).then(result => {
            if (!result.url) return message.channel.send('Something went wrong.');
            const attachment = new MessageAttachment(result.url);
            message.channel.send(attachment);
        });
        return;
        }
        if(args[1] === 'kiss'){
            const { MessageAttachment } = require('discord.js');
        const { body } = fetch('https://nekos.life/api/v2/img/kiss').then(res => res.json()).then(result => {
            if (!result.url) return message.channel.send('Something went wrong.');
            const attachment = new MessageAttachment(result.url);
            message.channel.send(attachment);
        });
        return;
        }

        if(!message.channel.nsfw) {
            message.channel.send('This command can only be used in nsfw channels!')
                .then(msg => msg.delete({ timeout: 3000 }));
            return;
        }

        if(args[1] === 'lewd'){
            const { MessageAttachment } = require('discord.js');
        const { body } = fetch('https://nekos.life/api/lewd/neko').then(res => res.json()).then(result => {
            if (!result.url) return message.channel.send('Something went wrong.');
            const attachment = new MessageAttachment(result.url);
            message.channel.send(attachment);
        });
        return;
        }

        if(args[1] === 'sex'|| args[1] === 'fuck'){
            const { MessageAttachment } = require('discord.js');
        const { body } = fetch('https://nekos.life/api/v2/img/hentai').then(res => res.json()).then(result => {
            if (!result.url) return message.channel.send('Something went wrong.');
            const attachment = new MessageAttachment(result.url);
            message.channel.send(attachment);
        });
        return;
        }

        if(args[1] === 'blowjob' || args[1] === 'bj'){
            const { MessageAttachment } = require('discord.js');
        const { body } = fetch('https://nekos.life/api/v2/img/blowjob').then(res => res.json()).then(result => {
            if (!result.url) return message.channel.send('Something went wrong.');
            const attachment = new MessageAttachment(result.url);
            message.channel.send(attachment);
        });
        return;
        }

    },
};