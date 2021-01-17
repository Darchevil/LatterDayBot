const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split('/ +/');
    const command = args.shift().toLowerCase();
    if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`Tu n'as pas mis assez d'arguments, ${message.author}!`);
        }
        else if (args[0] === 'foo'){
            return message.channel.send('bar');
        }
    
        message.channel.send(`First argument: ${args[0]}`);

    }
    if (message.content.startsWith(`${prefix}hello`)) {
        message.channel.send(`Bonjour, ${message.author.username} ! Ravi de te parler`);
    }
    else if(message.content.startsWith(`${prefix}annonces`)){
        message.channel.send("Aux dernières nouvelles, il n'y a pas d'annonces");
    }
    else if (message.content === `${prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}`);
    }
    console.log(message.content);
});

