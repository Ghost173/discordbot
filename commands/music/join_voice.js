const Commando = require('discord.js-commando') ;
const YTDL = require('ytdl-core');
const discord = require('discord.js');
function play(connection, message) 
{
    var server = servers[message.guild.id];
    server.dipatcher = connection.playStream(YTDL(server.que[0], {filter: "audioonly"}));
    server.que.shift();
    server.dipatcher.on("end",function(){
        if(server.que[0]) 
        {
            play(connection.message);
        }
        else 
        {
            connection.disconnect();
        }
    });
}

class joinvoice extends Commando.Command 
{
    constructor(client)
    {
        super(client, {

            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'join the voice channel :D'
        });
    }
async run(message , args )
{
if(message.member.voiceChannel) 
{
     if(!message.guild.voiceConnection) 
     {
         if(!servers[message.guild.id]) 
         {
            servers[message.guild.id] = {que: []}
         }
         var server = servers[message.guild.id]
         message.member.voiceChannel.join()
         .then(connection => {
            var server = servers[message.guild.id]
            message.reply("success fully join");
            server.que.push(args);
            play(connection, message);

         })
     }
}
else 
{
    message.reply("you must to be in voice channel")
}
}
}

module.exports = joinvoice ;