const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '/staff') {

       message.reply('Icyz | Owner');
       message.reply('BlueLightning | Advertising');
       message.reply('Grimbleweed | Special');
    }

});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '/avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});


client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '/rules') {
        // Create the attachment using Attachment
        const attachment = new Attachment('./rules.txt');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
