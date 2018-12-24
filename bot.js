const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("526870370041462794")
setInterval(function() {
channel.send(`spam for credit ez`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
