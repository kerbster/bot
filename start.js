const Discord = require('discord.js');
const { MessageHandler } = require('discord-message-handler');
const handler = new MessageHandler();

const client = new Discord.Client();

const prefix = '!';



client.once('ready', () => {
	console.log('The NSA is watching.')
});


client.on('message', message =>{
	if((handler.whenMessageContains('creator' || 'god') || message.content.startsWith(prefix)) || !message.author.bot) return;
	
	if (handler.whenMessageContains('creator' || 'god')) {
		message.channel.send('The Creator has appeared' , {tts:true} , {files: ['./images/creator.png']});
	};
});

client.login('[REDACTED FOR SECURITY]');
