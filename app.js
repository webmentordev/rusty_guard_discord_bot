const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config()
const token  = process.env.BOT_TOKEN;
const PocketBase = require('pocketbase/cjs')
const pb = new PocketBase(token.POCKETBASE_IP);

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
] })

client.once('ready', (bot) => {
    console.log(`${bot.user.tag} is ready!`);
    client.user.setPresence({ activities: [{ name: 'Support!' }], status: 'online' });
});

client.on('messageCreate', async (message) => {
    if(message.content === "hi"){
        await message.reply("Hallow whatsup!");
        return;
    }
});
client.login(token);