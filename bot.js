const Discord = require('discord.js');
const bot = new Discord.Client();
const newUsers = [];
const prefix = "m!"

bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "slots")) {
 

 let slots = ["🍌", "🍎", "🍉", "🍇", "🍊"];
 let result1 = Math.floor((Math.random() * slots.length));
 let result2 = Math.floor((Math.random() * slots.length));
 let result3 = Math.floor((Math.random() * slots.length));
 let name = message.author.displayName;
 let aicon = message.author.displayAvatarURL;

 if (slots[result1] === slots[result2] && slots[result3]) {
 const Embed = new Discord.RichEmbed()
 .setFooter("You Won!", aicon)
 .setTitle(':slot_machine:Slots:slot_machine:')
 .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
 .setColor('RANDOM');
 message.channel.send(Embed);
 } else {
 const Embed = new Discord.RichEmbed()
 .setFooter('You Lost!', aicon)
 .setTitle(':slot_machine:Slots:slot_machine:')
 .addField('Result', slots[result1] + slots[result2] + slots[result3], true)
 .setColor('RANDOM');
 message.channel.send(Embed);
 }
 }
})

bot.on("channelCreate", async channel => {
    var logs = channel.guild.channels.find(c => c.name === 'logs');
    const Embed = new Discord.RichEmbed()
        .setTitle("Channel Created")
        .setColor("RANDOM")
        .setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just created!`)
        .setTimestamp(new Date());
    logs.send(Embed);
});



bot.on("channelDelete", async channel => {
    var logs = channel.guild.channels.find(c => c.name === 'logs');
    const Embed = new Discord.RichEmbed()
        .setTitle("Channel Deleted")
        .setColor("RANDOM")
        .setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just deleted!`)
        .setTimestamp(new Date())
    logs.send(Embed);
});


bot.on('message', function(message){
 if (message.content.toLowerCase() === "m!coinflip"){
 var chance = Math.floor(Math.random() * 2);
 if (chance == 0){message.reply("**Your Coin Landed On `Heads`**" + " Yay");}
 else{message.reply("**Your Coin Landed On `Tails`**" + " :joystick:");}
 }
});

bot.on('message', function(message){
 if (message.content.toLowerCase() == "m!love"){
 let user = message.mentions.users.first();
 var chance = Math.floor(Math.random() * 4);
 if (chance == 0){message.reply("**You love them by `100%` buy them a gift! You never know, they could be your valentine! ;))**" + " :heart:");}
 else{message.reply("**You love them by `50%`** Good luck!" + " :heart:");}
 }
});

bot.on("message", (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "kick")) {

 if (message.member.hasPermission(['KICK_MEMBERS'])) {
 // Easy way to get member object though mentions.
 var member = message.mentions.members.first();
 // Kick
 member.kick().then((member) => {

 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle(`Kicked`)
 .setDescription(`${member}, has been kicked. `)
 .addField(`Kicked by`, `${message.author}`)
 .addField(`IDK why it does it twice`)
 .setTimestamp()

 // Successmessage
 message.channel.send(Embed);
 }).catch(() => {
 // Failmessage
 message.channel.send("***Request Denied***");
 });
 }
 }
})

bot.on('message', message => {

 if (!message.guild) return;
 
 if (message.content.toLowerCase().startsWith(prefix + "ban")) 
 {
 if (message.member.hasPermission(['BAN_MEMBERS'])) {

 const user = message.mentions.users.first()


 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle(`${message.user}, has been banned! They should act better!`)
 .setImage('https://media1.tenor.com/images/d588d295136d07891a79ecc4d38e1a22/tenor.gif?itemid=10026092')
 .setTimestamp()

 if (user) {
 
 const member = message.guild.member(user);
 
 if (member) {
 
 member.ban({
 reason: 'They were bad, be better!',
 }).then(() => {
 
 message.channel.send(Embed);
 }).catch(err => {
 
 message.reply('I was unable to ban the member');
 
 });
 } else {
 
 message.reply('That user isn\'t in this guild!');
 }
 } else {
 
 message.reply('You didn\'t mention the user to ban!');

 }
 }
 }
})


bot.on('message', (message) => {
 if(message.content.toLowerCase() == 'm!hello') {
 message.reply("Hello!"); 
 }
});


bot.on('message', (message) => {
 if(message.content.toLowerCase() == 'm!weather') {
 message.reply("WIP."); 
 }
});

bot.on('message', (message) => {
 if(message.content.toLowerCase() == 'm!ko') {
 message.reply("You are dead. *Why did you kill yourself?*"); 
 }
});

bot.on('message', (message) => {
 if(message.content.toLowerCase() == 'm!invite') {
 message.reply("Enjoy! https://discordapp.com/api/oauth2/authorize?client_id=577184826076037121&permissions=8&scope=bot"); 
 }
});


bot.on('guildMemberAdd', member => {
 let channel = member.guild.channels.find('name', 'welcome-leave');
 let memberavatar = member.user.avatarURL
 if (!channel) return;
 let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setThumbnail(memberavatar)
 .addField('Name: ', `${member}`)
 .addField('Welcome!', `Welcome to the server, ${member}`)
 .addField('User ID:', "**[" + `${member.id}` + "]**")
 .addField('You\'re are the..', `${member.guild.memberCount}th/nd/st/rd member!`)
 .addField("Name", `<@` + `${member.id}` + `>`, true)
 .addField('Server', `${member.guild.name}`, true )
 .setFooter(`${member.guild.name}`)
 .setTimestamp()

 channel.sendEmbed(embed);
});

bot.on('message', (message) => {
 if(message.content.toLowerCase() == 'm!radio') {
 message.reply("*Sparks Radio* **http://djsparks.ml/** __<-Tune In!__"); 
 }
});





bot.on('guildMemberAdd', member => {

});

bot.on('guildMemberRemove', member => {
 let channel = member.guild.channels.find('name', 'welcome-leave');
 let memberavatar = member.user.avatarURL
 if (!channel) return;
 let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setThumbnail(memberavatar)
 .addField('Name: ', `${member}`)
 .addField('Member Left', `We hope you come back, ${member} :(`)
 .addField('User ID:', "**" + `${member.id}` + "**")
 .addField('Now there are', `${member.guild.memberCount} members.`)
 .addField("Name:", `<@` + `${member.id}` + `>`, true)
 .addField('Server:', `${member.guild.name}`, true )
 .setFooter(`${member.guild.name}`)
 .setTimestamp()

 channel.sendEmbed(embed)

});

bot.on('guildMemberRemove', member => {
});


var jokes = [
 { name: 'Dozen', answer: 'anybody want to let me in?' },
 { name: 'Avenue', answer: 'knocked on this door before?' },
 { name: 'Ice Cream', answer: 'if you don\'t let me in!' },
 { name: 'Adore', answer: 'is between us. Open up!' },
 { name: 'Lettuce', answer: 'in. Its cold out here!' },
 { name: 'Mikey', answer: 'doesnt fit through this keyhole' }
]

//choosing a random joke from the array

var knock = function() {
 var joke = jokes[Math.floor(Math.random() * jokes.length)]
 return formatJoke(joke)
}

//Formatting the output to return in a new line and plug in the output variables
function formatJoke(joke) {
 return [
 'Knock, knock.',
 'Who’s there?',
 joke.name + '.',
 joke.name + ' who?',
 joke.name + ' ' + joke.answer
 ].join('\n')
}
 
//Turn the discordjs on to listen to a message
 bot.on('message', (message) => {

//Listens to each instance of the message /knock and executes the code below
 if (message.content.toLowerCase() == prefix + "knock") {
 const msg = message.content.split(' ');

//Function knock() returns the formatted joke
 message.reply(knock());
 
 }
 }); 


 bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "hug")) {
 let user = message.mentions.users.first();
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('You Got Hugged!')
 .setDescription(`Aww! Looks like you got a nice cuddly hug ${user}!`)
 .setImage('https://media1.giphy.com/media/QbkL9WuorOlgI/giphy.gif')
 .setTimestamp()
 message.channel.send(Embed);
 }
 })

 bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "time")) {
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('Here is the time!')
 .setTimestamp()
 message.channel.send(Embed);
 }
 })

 bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "botcredits")) {
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('Owners Information')
 .setDescription('Name: Icyz#4596,')
 .setTimestamp()
 message.channel.send(Embed);
 }
 })

 bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "token")) {
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('Achieved!')
 .setDescription('You have just obtained **1** token! (There is no stats for this just for farming and fun :)')
 .setThumbnail('http://appandmap.com/en/wp-content/uploads/sites/2/2017/04/token.jpg')
 .setTimestamp()
 message.channel.send(Embed);
 }
 })

 bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "cry")) {
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('Why are you crying!')
 .setDescription('Woah, cheer up! We dont want you to cry!')
 .setImage('https://media.tenor.com/images/bf58fcd46afab0dd126d1d29c094e0b8/tenor.gif')
 .setTimestamp()
 message.channel.send(Embed);
 }
 })

 bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "valentinesday")) {
 const Embed = new Discord.RichEmbed()
 .setColor('f200ff')
 .setTitle('Happy Valentines Day! -Mixi')
 .setImage('https://media1.tenor.com/images/32ef49d9a139f6b506f432d7376a1450/tenor.gif?itemid=10666499')
 .setTimestamp()
 message.channel.send(Embed);
 }
 })

 bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "unicorn")) {
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('Im a Unicorn!')
 .setDescription('Look mommy! Im a Unicorn!!! <3')
 .setImage('https://www.dictionary.com/e/wp-content/uploads/2018/05/587e32329686194a55adab75.png')
 .setTimestamp()
 message.channel.send(Embed);
 }
 })
 

 bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "botinfo")) {
 const boticon = bot.user.displayAvatarURL
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('Guilds')
 .setDescription(`The bot is in **7282**, servers!`)
 .addField('Users', `Watching **948389 Users!**`)
 .addField('Prefix', "m!")
 .addField('Bot Created On', `${bot.user.createdAt}`)
 .setThumbnail(boticon)
 .addField('Bot Language', 'JavaScript Or Discord.js')
 .addField('Owner/Creator', 'Icyz#4596')
 .addField('Note', "If you want to do suggestions and the Mixi reacts, include mixi. somewhere in your message and Mixi will react! Also, make a logs channel and a welcome-leave channel if not done already.")
 .setTimestamp()
 message.channel.send(Embed);
 }
 })


 bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "membercount")) {
 const onlineMembers = message.guild.members.filter(m => m.presence.status === "online")
 const dndMembers = message.guild.members.filter(m => m.presence.status === "dnd")
 const idleMembers = message.guild.members.filter(m => m.presence.status === "idle")
 const offlineMembers = message.guild.members.filter(m => m.presence.status === "offline")
 const embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .addField('Members', `${message.guild.memberCount}`)
 .addField('Bots', `${message.guild.members.filter(m => m.user.bot).size}`)
 .addField('Members Online', `${message.guild.members.filter(m => m.presence.status === "online").size}`)
 .addField('Members on Do Not Disturb', `${message.guild.members.filter(m => m.presence.status === "dnd").size}`)
 .addField('Idle Members', `${message.guild.members.filter(m => m.presence.status === "idle").size}`)
 .addField('Invisible/Offline Members', `${message.guild.members.filter(m => m.presence.status === "offline").size}`)
 .setTimestamp()
 message.channel.send(embed);
 }
 })
 
 bot.on('message', (message) => {
 if (message.content.includes("Mixi.")){
 message.react("👍")} 
 });

 bot.on('message', (message) => {
 if (message.content.includes("Mixi.")){
 message.react("👎")} 
 });

 bot.on('message', (message) => {
 if (message.content.includes("mixi.")){
 message.react("👍")} 
 });

 bot.on('message', (message) => {
 if (message.content.includes("mixi.")){
 message.react("👎")} 
 });


 bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "help")) {
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('Help')
 .setDescription('Choose a category, example: m!Fun')
 .addField('To make logs channel, do m!createchannel logs, also to make welcome-leave channel do m!createchannel welcome-leave *Manage channel permissions*', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('Fun :soccer:', "For fun commands.")
 .addField('Moderation :hammer_pick:', "For moderation commands.")
 .addField('Information :flag_am:', "For information commands.")
 .addField('Holiday :heart:', "For holiday commands.")
 .addField('Math :cloud_lightning:', "For the calculator and math commands.")
 .setTimestamp()
 message.channel.send(Embed);
 }
 })

 bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "fun")) {
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('__Fun commands.__')
 .addField('m!Unicorn', '󠀀󠀀 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!Coinflip', '󠀀 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!Token', '󠀀 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!Hug @user', '󠀀 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!Knock', '󠀀 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!Tacocat *Minigame*', 'For answers after m!T answers')
 .addField('m!Slots *Minigame*', 'Does not have any currency you can get, just a fun minigame you can spam.')
 .addField('m!Hello', '󠀀 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!KO', '󠀀 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!Greet @user', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!Ping', 'Pings a random user')
 .addField('m!Rate @user', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .setTimestamp()
 message.channel.send(Embed);
 }
 })

 bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "moderation")) {
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('__Moderation Commands.__')
 .addField('m!Kick @user', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!Ban @user', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!Purge <Amount you want to delete>', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!Createrole muted', 'this will make the muted role, however will not deny channel permissions. Just role permissions.')
 .addField('m!Mute @user', 'This will give the mentioned user the muted role')
 .addField('m!Vote <Your question here>', '*Needs Manage Messages Permission*')
 .setTimestamp()
 message.channel.send(Embed);
 }
 })

 bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "information")) {
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('__Information Commands.__')
 .addField('m!Membercount', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!Botinfo', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!Botcredits', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!Time', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!Invite', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!Serverinfo', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .setTimestamp()
 message.channel.send(Embed);
 }
 })

 bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "holiday")) {
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('__Holiday Commands.__')
 .addField('m!Love *Not working completely*', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!Valentinesday', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!St patricks', '*Only up for Saint Patricks Day!*')
 .setTimestamp()
 message.channel.send(Embed);
 }
 })

 bot.on('message', (message) => {
 if(message.content.toLowerCase().startsWith(prefix + "math")) {
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('__Math Commands.__')
 .addField('m!calculate *number* + *number*', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!calculate *number* - *number*', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('m!calculate *number/decimal* + or - *number/decimal*', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .setTimestamp()
 message.channel.send(Embed);
 }
 })

 bot.on('guildMemberAdd', (guildMember) => {
 guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Members"));
 })

 bot.on('message', (message) => {
 if(message.content.toLowerCase().startsWith(prefix + "fifa")) {
 let fifa = ["https://realsport101.com/wp-content/uploads/2018/09/Messi.png", "https://www.arsenalcore.com/wp-content/uploads/2018/02/Untitled.png", "https://fifadataba.com/images/cards/234.png", "https://futchief.com/wp-content/uploads/2018/02/aguero.potm.png", "https://i.pinimg.com/originals/a7/cc/b4/a7ccb4d84a58580172fc54f75f6bba8c.png", "https://cdn.shopify.com/s/files/1/2728/5974/products/RONALDO_317256cf-0f6d-407d-84c3-425fa43d5303_300x300.png?v=1531242150", "https://pbs.twimg.com/media/Ci3J75ZUoAEs0XT.png:large", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9mxs2tPGjXWLZbPiEvSbVKR4quC7a6QBvbGvbCTXPfWQUOWP9"]
 let result1 = Math.floor((Math.random() * fifa.length))
 let result2 = Math.floor((Math.random() * fifa.length))
 let result3 = Math.floor((Math.random() * fifa.length))
 let name = message.author.displayName;
 let aicon = message.author.displayAvatarURL;

 if (fifa[result1] === fifa[result2] && fifa[result3]) {
 const Embed = new Discord.RichEmbed()
 .setTitle('You got...')
 .setImage(fifa[result1], true)
 .setColor('RANDOM');
 message.channel.send(Embed);
 } else {
 const Embed = new Discord.RichEmbed()
 .setTitle('You got...')
 .setImage(fifa[result1], true)
 .setColor('RANDOM');
 message.channel.send(Embed);
 }
 }
})
 
bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "players")) {
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .addField('Lionel Messi', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('Christiano Ronaldo', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('Neymar', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('Kylian Mbappé', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('Luka Modrić', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('Sergio Agüero', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('Paul Pogba', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('Luis Suárez', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('Mohamed Salah', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('Kevin De Bruyne', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('Pierre-Emerick Aubameyang', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('Henrikh Mkhitaryan', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .setTimestamp()
 message.channel.send(Embed);
 }
})

bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "greet")) {
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('Hello!')
 .setDescription(`We greet you from **${message.member.guild.name}**, a great place for members. Be active and nice ;).`)
 .addField(':)', `We advise you to stay in **${message.member.guild.name}**!`)
 .setImage('https://i.pinimg.com/originals/9e/a7/2e/9ea72ef078139ced289852e8a4ea0c5c.gif')
 .setTimestamp()
 message.channel.send(Embed);
 }
})

bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "tacocat")) {
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('Good luck.')
 .setDescription('Good luck! After you find as many words as possible, do m!answers.')
 .setImage('https://cdn.discordapp.com/attachments/457419173807783937/540685486738505747/Bot_TacoCat.PNG')
 .setTimestamp()
 message.channel.send(Embed);
 }
})

bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "answers")) {
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('Answers')
 .addField('TacoCat = 1 point', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('Cat = 1 point', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('Taco = 2 points', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('Coat = 4 points', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .addField('Act = 5 points', ' 󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀󠀀')
 .setImage('https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif')
 .setTimestamp()
 message.channel.send(Embed);
 }
})

bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "createchannel logs")) {
 const args = message.content.slice(15);
 if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You don\'t have permission to create logs channel! You need the Manage Channels permission!**" + " :tools:");
 message.guild.createChannel(`${args}`).then(channel => {
 channel.setName('logs')
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('Congratulations')
 .setDescription('Congratulations! Mixi has created your logs channel! You can now log when a channel is created or deleted!')
 .setTimestamp()
 

 message.channel.send(Embed)
 })
 }
});

bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "createchannel welcome-leave")) {
 const args = message.content.slice(15);
 if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You don\'t have permission to create welcome-leave channel! You need the Manage Channels permission!**" + " :tools:");
 message.guild.createChannel(`${args}`).then(channel => {
 channel.setName('welcome-leave')
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('Congratulations')
 .setDescription('Your **welcome-leave** channel was created! Now you can log whenever a member joins the server!')
 .setTimestamp()
 message.channel.send(Embed)
 })
 }
});

bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "ping")) {
message.channel.send(`Get pinged ${message.guild.members.random()} hah! Not taking that back either. :D Trolllll`)
 }
})

bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "serverinfo")) {
 const guildMember = message.mentions.members.first()
 const Embed = new Discord.RichEmbed()
 .setTitle(`${message.guild.name}`)
 .setDescription('This is the info of the server above.')
 .addField('Owner of the Server', `${message.guild.owner}`)
 .addField('Server Region', `${message.guild.region}`)
 .addField('Total Members', `${message.guild.memberCount}`)
 .addField('Verification Level', `${message.guild.verificationLevel}`)
 .addField('Server Creation Date', `${message.guild.createdAt}`)
 .addField('Channels/Categories/Voice Channels', `${message.guild.channels.size}`)
 .addField('Roles', `${message.guild.roles.size}`)
 .addField('Emojis', `${message.guild.emojis.size}`)
 .setColor('RANDOM')
 .setThumbnail(message.guild.iconURL)
 message.channel.send(Embed)
 }
})

bot.on('message', message => {
 if (message.content.toLowerCase().startsWith(prefix + "rate")) {
 
 var answers = [ 
 
 '1/10', 
 
 '2/10',
 
 '3/10',

 '4/10',

 '5/10',

 '6/10',

 '7/10',

 '8/10',

 '9/10',

 '10/10'
 
 ];
 
 let randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
 
 message.channel.send(`**I rate ${message.mentions.members.first()} ${randomAnswerPicker}.**`);
 }
 });

 bot.on('message', message => {
 if (message.content.toLowerCase().startsWith(prefix + "mute")) {
 const role = message.guild.roles.find('name', 'Muted');
 const guildMember = message.mentions.members.first();
guildMember.addRole(role);
message.channel.send(`Successfully muted, ${message.mentions.members.first()}.`)
 }
 })

 bot.on('message', message => {
 if (message.content.toLowerCase().startsWith(prefix + "createrole muted")) {
 message.guild.createRole({name: "Muted", color: 0x00E676, permissions: [], position: 10 })
 message.channel.send('Your muted role has been created! *This denies all permissions, however if you have @ everyone permissions on the checkmark it will let users talk in the channels*')
 }
 })

 bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "userinfo")) {
 const MemberMentioned = message.mentions.members.first()
 const usericon = message.mentions.members.first().user.avatarURL
 const Embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setThumbnail(usericon)
 .addField('Name', `${message.mentions.members.first()}`)
 .addField('Joined Server On', `${MemberMentioned.joinedAt}`)
 .addField('Status', `${MemberMentioned.presence.status}`)
 .addField('Member ID', `${MemberMentioned.id}`)
 .addField('Registered Account On', `${MemberMentioned.user.createdAt}`)
 .addField(`Roles (${MemberMentioned.roles.size})`, `${MemberMentioned.roles.map(r => `${r}`).join(' | ')}`, true)
 .addField('Highest Role', `${MemberMentioned.highestRole}`)
 .setTimestamp()
 message.channel.send(Embed);
 }
 }) 

 bot.on("guildBanAdd", function(guild, user) {
 let channel = guild.channels.find('name', 'logs');
 let memberavatar = user.avatarURL

 const BanEmbed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setAuthor(`${user.tag}`, memberavatar)
 .setTitle(`**The member ${user.tag} was banned from ${guild.name}.**`)
 .setFooter(`Name: ${user.tag} | Member ID: ${user.id}`)
 .setTimestamp()

 channel.send(BanEmbed);
 })

 bot.on("roleDelete", (role) => {
 let channel = role.guild.channels.find('name', 'logs')

 const RCEmbed = new Discord.RichEmbed()
 .setColor(`${role.hexColor}`)
 .setAuthor(`${role.name}`)
 .setDescription(`**The role "${role.name}" was just deleted.**`)
 .addField('Name:', `${role.name}`)
 .addField('HexColor', `${role.hexColor}`)
 .addField('Position', `${role.position}`)
 .addField('Mentionable?', `${role.mentionable}`)
 .addField('ID', `${role.id}`)
 .addField('Creation Date', `${role.createdAt}`)
 .addField('Members that were in the role', `${role.members.size}`)
 .setFooter(`Role: ${role.name} | Role ID: ${role.id}`)
 .setTimestamp()

 channel.send(RCEmbed);
 });

 bot.on("guildBanRemove", function(guild, user) {
 let channel = guild.channels.find('name', 'logs');
 let memberavatar = user.avatarURL

 const BanEmbed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setAuthor(`${user.tag}`, memberavatar)
 .setTitle(`**${user.tag} has been unbanned!**`)
 .setFooter(`Name: ${user.tag} | Member ID: ${user.id}`)
 .setTimestamp()

 channel.send(BanEmbed);
 })

 bot.on('message', message => {
 if (message.content.toLowerCase().startsWith(prefix + "st patricks")) {
 
 var answers = [ 
 
 'No pot o gold here', 
 
 'No pot o gold here',
 
 'No pot o gold here',
 
 'No pot o gold here',
 
 'No pot o gold here',
 
 'No pot o gold here',
 
 'No pot o gold here',
 
 'No pot o gold here',
 
 'No pot o gold here',
 
 'No pot o gold here', 
 
 'No pot o gold here',

 'No pot o gold here',

 'No pot o gold here',

 'No pot o gold here',

 'No pot o gold here',

 'No pot o gold here',

 'No pot o gold here',

 'No pot o gold here',

 'No pot o gold here',

 'No pot o gold here',

 'No pot o gold here',

 'You found the pot of gold! Congratulations!'
 
 ];
 
 let randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
 
 message.channel.send(`*This event is over, you can still do it for fun.* **${randomAnswerPicker}.** ${message.author}`);
 }
 });

 bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "calculate")) {
 const split = message.content.split(" ")
 message.channel.send(eval(split.splice(1).join(" ")))
 }
 })


 bot.on('message', (message) => {
 if (message.content.toLowerCase().startsWith(prefix + "vote")) {
 if (message.member.hasPermission(['MANAGE_MESSAGES'])) {
 message.channel.bulkDelete(1)
 const split = message.content.split(" ")

 const Embed = new Discord.RichEmbed()
 .setColor('#28fce0')
 .setTitle('<:IdeaBlob:564137221444337665> Voting!')
 .setDescription(((split.splice(1).join(" "))))
 .setFooter(`Vote held by: ${message.author.tag}`)
 .setTimestamp()
 
 
 message.channel.send(Embed)
 .then(function (message) {
 message.react("✅")
 message.react("❌")
 })
 }
 }
 })
 
 
 //Try to re-vamp some commands

 bot.on("guildCreate", guild => {
 console.log("Joined a new guild:" + guild.name)
 })

bot.on('ready', () => { bot.user.setActivity(`m!Help | 7282 guilds. YaY!`) })

bot.login(process.env.BOT_TOKEN)
