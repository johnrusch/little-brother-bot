require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log("hey");
}

client.on('message', sayHellYeah);

const hellYeahs = [
    'haha hell yeah',
    'oh hell yeah',
    'hell yeah dude',
    'yeah hell yeah',
    'hell yeah'
]

function sayHellYeah(msg) {
    if (msg.content.includes('hell yeah') && !msg.author.bot) {
        const index = Math.floor(Math.random() * hellYeahs.length);
        msg.channel.send(hellYeahs[index]);
    }
    // console.log(msg.author.bot);
}

client.on('message', sayForSure);

function sayForSure(msg) {
    if (msg.content.includes('for sure') && !msg.author.bot) {
        msg.channel.send('for sure for sure');
    }
}