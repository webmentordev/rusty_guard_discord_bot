const { Client, GatewayIntentBits } = require('discord.js');

require('dotenv').config()
const token  = process.env.BOT_TOKEN;
const apiURL  = process.env.POCKETBASE_IP;

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
] });

client.once('ready', (bot) => {
    console.log(`${bot.user.tag} is ready!`);
    client.user.setPresence({ activities: [{ name: 'Support!' }], status: 'online' });
});

client.on('messageCreate', async (message) => {
    if(message.author.bot == true) return;
    const response = await fetch(`${apiURL}/api/collections/servers/records?filter=(guild_id='${message.guildId}')&expand=commands(server)`);
    const result = await response.json();
    const arrayResult = result.items[0].expand['commands(server)'];
    for(let i = 0; i < arrayResult.length; i++){
        if(arrayResult[i].command === message.content){
            message.reply(arrayResult[i].message);
            return;
        }
    }
});

client.login(token);