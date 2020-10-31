const Discord = require('discord.js');
const client = new Discord.Client();

const random = require('random');
const dotenv = require('dotenv');

const { token, version } = require('./config.json');

const PREFIX = 'mc!';

const fs = require('fs');
const { name } = require('./commands/ban');

//console.log(process.env);

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('guildMemberAdd', member => {
    const role = member.guild.roles.cache.find(roles => roles.name === 'Member');
    const channel = member.guild.channels.cache.find(channel => channel.name === 'welcome');

    member.roles.add(role);
    if(!channel)return;
    
    channel.send(`Welcome ${member.user.tag} to the server!`);
    member.send(`Welcome ${member.user.tag} to the server!}`);
})

client.on('ready', () => {
    console.log(`Bot running ${version}`);
        client.user.setActivity(` ${client.guilds.cache.size} servers`, { type: 'WATCHING' });
});

client.on('message', async message => {

    const member = message.mentions.members.first();

    if(message.author.bot || !message.content.startsWith(PREFIX))return;  

    const args = message.content.slice(PREFIX.length).split(/ +/g);
    
    switch(args[0].toLowerCase()){

            case 'slow':
            client.commands.get('slowmode').execute(message, args);
            break;

            case 'bugreport':
            client.commands.get('report').execute(client, message, args);
            break;
            case 'bug':
            client.commands.get('report').execute(client, message, args);
            break;

        case 'server':
            client.commands.get('server').execute(message, args);
            break;

        case 'slowmode':
            client.commands.get('slowmode').execute(message, args);
        break;

        case 'warn':
            client.commands.get('warn').execute(message, args);
        break;

        case 'clear':
            client.commands.get('clear').execute(message, args);
        break;

        case 'mute':
            client.commands.get('mute').execute(message, args);
        break;

        case 'unmute':
            client.commands.get('unmute').execute(message, args);
        break;
        
        case 'ban':
            client.commands.get('ban').execute(message, args);
        break;

        case 'kick':
            client.commands.get('kick').execute(message, args);
        break;

        case 'help':
            client.commands.get('help').execute(message, args);
        break;

        case 'h':
            client.commands.get('help').execute(message, args);
        break;

        case 'ping':
            client.commands.get('ping').execute(message, args);
        break;

        case 'poll':
            client.commands.get('poll').execute(message, args);
        break;

        case 'neko':
            client.commands.get('neko').execute(message, args);
        break;

        case 'userinfo':
            client.commands.get('userInfo').execute(message, args);
        break;

        case 'ui':
            client.commands.get('userInfo').execute(message, args);
        break;

        case 'snipe':
            client.commands.get('userInfo').execute(message, args);
        break;

        case 'av':
            client.commands.get('avatar').execute(message, args);
        break;

        case 'avatar':
            client.commands.get('avatar').execute(message, args);
        break;

        case 'source':
            client.commands.get('source').execute(message, args);
        break;

        case 'rules':
            client.commands.get('rule').execute(message, args);
        break;

        case 'invite':
            client.commands.get('invite').execute(message, args);
        break;

        case 'inv':
            client.commands.get('invite').execute(message, args);
        break;

        case 'faq':
            client.commands.get('faq').execute(message, args);
        break;

        case 'si':
            client.commands.get('si').execute(message, args);
        break;

        case 'serverinfo':
            client.commands.get('si').execute(message, args);
        break;

        case 'botinfo':
            client.commands.get('bi').execute(message, args);
        break;

        case 'bi':
            client.commands.get('bi').execute(message, args);
        break;
    }
})

client.login(token)
