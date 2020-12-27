const Discord = require('discord.js');

const client = new Discord.Client();
const request = require('request')

client.once('ready', () => {
    console.log('Ready');
    client.user.setActivity('!joke');
});

client.on('message', message => {
    if (message.content === '!joke'){
        request('https://official-joke-api.appspot.com/jokes/general/random', function (error, response, body) {
            var res = JSON.parse(body)[0];
            message.channel.send(res['setup']);
            setTimeout(() => {
                message.channel.send('**' + res['punchline'] + '**');
            }, 5000);
        });
    }
    if (message.content === '!help'){
        message.channel.send('Type "**!joke**".');
    }
    if (message.content === '!code'){
        message.channel.send('https://github.com/gadhagod/Jokey');
    }
})


client.login(process.env.JOKEY_TOKEN);