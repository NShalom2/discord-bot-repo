const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const token = process.env.TOKEN;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});

client.login(token).then(() => {
    console.log('Bot is logged in and ready!');
}).catch((error) => {
    console.error('Failed to login:', error);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    switch (message.content) {
        case '!hello':
            botResponse = 'Hello there! Hope you had a good day!';
            break;
        case '!joke':
            botResponse = "Why can't you hear a pterodactyl go to the bathroom? Because the “P” is silent. 😂";
            break;
        case '!ping':
            botResponse = 'Pong! I win! 🏓';
            break;
        case '!class':
            botResponse = 'Class is so much fun, I want to study till the end of times!!';
            break;
        default:
            botResponse = "Invalid comment 😟"

    }

    message.reply(botResponse);
});