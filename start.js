const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const token = require('./token.json');

const debug = 0    // 0:normal operation  1:debug mode

client.login(token.token);    //logs bot in

client.once('ready', () => {      // outputs a ready notice in console
	console.log('The NSA is watching.')
        client.user.setPresence({ status: 'online', game: { name: 'Watching my assignments' } });
});

client.on('message', message =>{     // looks for message
	if (message.author.bot) return ;  //skips if message author is bot
	
        var keywords = require('./keywords.json');  //aquires the key word list
        
        var god = keywords.god                   // sets keyword arrays to variables
        var lettuce = keywords.lettuce
        var vector = keywords.vector
        var banana = keywords.banana
        var bird = keywords.bird
        var sully = keywords.sully
        var cat = keywords.cat
        var str = message.content.toLowerCase();           //turns message into an all lowercase string
        var b = str.search('big brain')                    //searches string for single multi-word key phrase
        var tstr = str.split(' ')                          //splits message into array of every word
        var godCheck = 0
        var lettuceCheck = 0                               //readies variables for check system
        var vectorCheck = 0
        var bananaCheck = 0
        var birdCheck = 0
        var sullyCheck = 0
        var catCheck = 0       
        
        if (debug) {                                  //debug: prints array of message to console
            console.log(tstr)
        };

        god.forEach(function(a) {                //detects if a key word for god event has been used
                if (tstr.includes(a)) {          //searches for each keyword for god in message array
                    godCheck = 1                 //if a keyword was found, godCheck is set to 1 which prevents
                };                                   //from multiple events if multiple keywords for god are used
        });

        lettuce.forEach(function(a) {                //detects if a key word for lettuce event has been used
                if (tstr.includes(a)) {              //searches for each keyword for lettuce in message array
                    lettuceCheck = 1                 //if a keyword was found, lettuceCheck is set to 1 which prevents
                };                                        //from multiple events if multiple keywords for god are used
        });                                         //this system is the same for all keyword checkers with vector being the exception
	 
        if (b > -1) {                           //this determines if the multiword phrase mentioned 
            vectorCheck = 1                     //above was used and turns vectorCheck to 1 if true
            b = -1                              //this is the only differenc about the vector event
        };

        vector.forEach(function(a) {  
                if (tstr.includes(a)) {
                    vectorCheck = 1
                };
        });

        banana.forEach(function(a) {                
                if (tstr.includes(a)) {
                    bananaCheck = 1
                 };
        });
        
        bird.forEach(function(a) {                
                if (tstr.includes(a)) {
                    birdCheck = 1
                 };
        });
        
        sully.forEach(function(a) {                
                if (tstr.includes(a)) {
                    sullyCheck = 1
                 };
        });
        
        cat.forEach(function(a) {                
                if (tstr.includes(a)) {
                    catCheck = 1
                 };
        });

        if (debug) {                             //DEBUG: this code outputs the results of the detection system to console
            console.log(godCheck)
            console.log(lettuceCheck)
            console.log(vectorCheck)
            console.log(bananaCheck)
            console.log(birdCheck)
            console.log(sullyCheck)
            console.log(catCheck)
        };
                                                                                    // these are the event triggers
        if (godCheck) {                                                     //if godCheck is true this triggers the god event
            console.log('benefactor line')                                          //this outputs a notification line to console
            message.channel.send('The Creator has appeared.' , {tts:true})              //this maked a text to speech message in Discord
            message.channel.send({files:['./images/creator.png']})                      //this uploads a file to accompany the message
            godCheck = 0                                                                //this redundancy make sure godCheck returns to 0
        }
                                                                    //the rest of the events are the same with the exception of the message and file
        if (lettuceCheck) {
            console.log('lettuce line')
            message.channel.send('The lettuce genocide - 9/16/2020.' , {tts:true})
            message.channel.send({files:['./images/lettuce.png']})
            lettuceCheck = 0
        }

        if (vectorCheck) {
            console.log('vector line')
            message.channel.send('You called?' , {tts:true})
            message.channel.send({files:['./images/vector.png']})
            vectorCheck = 0
        }

        if (bananaCheck) {
            console.log('banana line')
            message.channel.send("Yellow's lookin kinda sus right now." , {tts:true})
            message.channel.send({files:['./images/banana.png']})
            bananaCheck = 0
        }

        if (birdCheck) {
            console.log('bird line')
            message.channel.send("Felt cute. Thought I'd snap a pic." , {tts:true})
            message.channel.send({files:['./images/bird.png']})
            birdCheck = 0
        }

        if (sullyCheck) {
            console.log('sully line')
            message.channel.send("I'm voting blue. He's being sus." , {tts:true})
            message.channel.send({files:['./images/sully.png']})
            sullyCheck = 0
        }

        if (catCheck) {
            console.log('cat line')
            message.channel.send('Man-cat has shown himself.' , {tts:true})
            message.channel.send({files:['./images/cat.png']})
            catCheck = 0
        }

        if (debug) {                               //this outputs the check system results to console to verify the variables are reset
            console.log(godCheck)
            console.log(lettuceCheck)
            console.log(vectorCheck)
            console.log(bananaCheck)
            console.log(birdCheck)
            console.log(sullyCheck)
            console.log(catCheck)
        };

});

