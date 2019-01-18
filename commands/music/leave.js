const Commando = require('discord.js-commando') ;

class leavevoice extends Commando.Command 
{
    constructor(client)
    {
        super(client, {

            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'leave the voice channel :D'
        });
    }
async run(message , args )
{
if(message.guild.voiceConnection) 
    {
        message.guild.voiceConnection.disconnect();
    }
    else  
    {
        message.reply("i must be in voice chanell to leave tho")
    }
}

}

module.exports = leavevoice ;