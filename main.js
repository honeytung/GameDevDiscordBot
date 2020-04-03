const discord = require('discord.js');
const client = new discord.Client();

const config = require("./config.json");
client.login(config.token);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setActivity('Fate/Grand Order', {type: 'PLAYING'});
});

client.on('message', msg => {

    var message = msg.content.toLowerCase();
    var messages = message.split(' ');
    
    // Do nothing if message sender is bot
    if(msg.author.bot) return;

    if(message === 'fbi')
        return msg.channel.send('', {files: ["./images/fbi.jpg"]});

    // Do nothing if does not have our bot's name
    // Add additional code above if bot name is not required for reply
    if(!(message.includes(config.botName1) || message.includes(config.botName2) || message.includes(config.botName3))) {
        return;
    }
    
    if(messages.includes('github') || messages.includes('code') || messages.includes('repo') || messages.includes('software')) {
        return msg.channel.send('Here is the link to GitHub repo: https://github.com/honeytung');
    }

    // Some simple responses
    if(messages.includes('hi') || messages.includes('hello')) {
        return msg.channel.send('Hi ' + msg.author.username + '!');
    }

    if(messages.includes('thanks') || messages.includes('thankyou') || messages.includes('thank') || messages.includes('thx')) {
        return msg.channel.send('', {files: ["./images/eresh_kirakira.jpg"]});
    }
});