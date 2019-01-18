const Commando = require('discord.js-commando') ;
const discord = require('discord.js');
const bot = new Commando.Client();
const TOKEN = 'your access token here'

bot.registry.registerGroup('simple', 'simple');
bot.registry.registerGroup('music', 'music');
bot.registry.registerGroup('team', 'team');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

global.currentTeamMembers = [];
global.servers = {} ;

bot.on("guildMemberAdd", function(member){
    member.send("welcome to the server");
    let memberRole = member.guild.roles.find("name" , "newjoiner");
    member.addRole(memberRole);
    });

bot.on('message', function(message) {
if (message.content == 'hello')
{
    message.channel.sendMessage('hello' + message.author + ', how are you?');
}
if (message.content == 'hi')
{
    message.reply('hi, dude?');
}
if (message.content == 'wtf')
{
    message.reply('bro?, what the f**k?');
}
if (message.content == 'join') 
{
    message. member.send("welcome to the server");  
    let memberRole = message.member.guild.roles.find("name" , "newjoiner");
    message.member.addRole(memberRole);

    message.member.guild.createRole({
        name: message.member.user.username,
        color: "#7CFC00" ,
        permissions: []

    }).then(function(role)
    {
        message.member.addRole(role);
    });
}





else if (message.content == "what's the current team?") 
{
//message.channel.send(currentTeamMembers);
var teamInfo = new discord.RichEmbed()
.setTitle("current team members")
for(var i = 0; i < currentTeamMembers.length; i++) 
{
 teamInfo.addField("member" + i.toString(),currentTeamMembers[i].username);
}
message.channel.sendEmbed(teamInfo);
}
});
bot.on('ready' ,function(){
    console.log("ready");
});


bot.login(TOKEN) ;
