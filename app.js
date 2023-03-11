const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config()
const token  = process.env.BOT_TOKEN;
const apiURL  = process.env.POCKETBASE_IP;

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
] });


client.once('ready', (bot) => {
    console.log(`${bot.user.tag} is ready!`);
    client.user.setPresence({ activities: [{ name: 'Support!' }], status: 'online' });
});

client.on('messageCreate', async (message) => {
    if(message.author.bot == true) return;
    fetch(`${apiURL}/api/collections/servers/records?filter=(guild_id='${message.guildId}')&expand=commands(server)`).then((response) => response.json()).then((result) => result.items[0]).then((array) => {
        if('expand' in array){
            let universalCommands = "All Commands for this server: ";
            const arrayResult = array.expand['commands(server)'];
            if(message.content == "!commands"){
                arrayResult.forEach((item) => {
                    universalCommands += "\n"+item.command;
                })
                message.reply(universalCommands);
                return;
            }
            arrayResult.forEach((item) => {
                if(item.command == message.content){
                    message.reply(item.message);
                    return;
                }
            })
        }else{
            message.reply("Commands are not setup for the server!");
            return;
        }
    })
    .catch((error) => {
        console.log(error)
    })
});

client.login(token);