const Discord = require('discord.js'); //Needed discord.js module
const client = new Discord.Client(); //Creating Discord new client

client.once('ready', () => { //When bot is ready , bot will run given code
	console.log('Ready!'); //Sends Ready to console as message
  client.user.setActivity(`Nusantara Indonesia Roleplay`); //Sets bot activity as "I am Devil" 
});

client.on("message", message => { //when Someone message 
  if(message.content === "J!ping") { //if message is same as !ping
    return message.channel.send(`Pong ${client.ws.ping}`); //it will return message
  }
});

client.login('NzM3OTI1ODYxODUxNzkxMzkw.XyEdAw.yRuH5b1kYGfvLdKSn_9Y51oh-_w'); //Paste Your Bot Token

