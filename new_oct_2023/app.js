const { Client, GatewayIntentBits } = require('discord.js');
const slurs = require('./files/slurs.js');

require('dotenv').config();
const token = process.env.TOKEN;
const welcome_id = process.env.WELCOME_ID;
const assign_role = process.env.ASSIGN_ROLE;
const apiURL = process.env.API;
const server = process.env.SERVER_NAME;

const client = new Client({ intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildIntegrations
]});

client.once('ready', (bot) => {
    console.log(`${bot.user.tag} is ready!`);
    client.user.setPresence({activities: [{ name: 'Rust' }], status: 'online'});
});

// Ban For Slurs
client.on('messageCreate', async (message) => {
    if(message.author.bot == true) return;
    for (const slur of slurs.slurs) {
        if (message.content.toLowerCase().includes(slur.toLowerCase())) {
            await message.reply(`**<@${message.author.id}>** has been banned for Racism/Slur`);
            await message.guild.members.cache.get(msg.author.id).ban({ days: 0, reason: "Permanently banned For Racism/Slur!" });
            await message.delete();
            break;
        }
    }
});

// Send Welcome Message and Assign A Role
client.on('guildMemberAdd', async (member) => {
    const channel = client.channels.cache.get(welcome_id);
    await channel.send(`Welcome **<@${member.user.id}>** to ${server} Server!`);
    const role = channel.guild.roles.cache.find(role => role.name == `${assign_role}`);
    await member.roles.add(role);
});


// Reply to help messages
client.on('messageCreate', async (message) => {
    if(message.author.id == client.user.id) return;
    fetch(`${apiURL}/api/collections/information/records`)
    .then(result => result.json())
    .then(async data => {
        for (const { wrd, msg } of data.items) {
            const string = message.content.toLowerCase();
            if (string.includes(wrd)) {
                await message.reply(msg);
                break;
            }
        }
    })
});

client.login(token);