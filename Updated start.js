const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const god = ['god' , 'creator']

client.once('ready', () => {
	console.log('The NSA is watching.')
});



client.on('message', message =>{
	if (message.author.bot) return ;
	
	var str = message.content.toLowerCase();
        var tstr = str.split(' ')
        console.log(tstr)
        

        god.forEach(function(a) {
                if (tstr.includes(a)) {
	                  console.log('benefactor spoken')
	                  message.channel.send('The Creator has appeared' , {tts:true})
                    message.channel.send({files:['./images/creator.png']})
                 };
        });
	
});



client.login('token goes here);
