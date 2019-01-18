const Commando = require('discord.js-commando') ;

class diesroolCommand extends Commando.Command 
{
    constructor(client)
    {
        super(client, {

            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'role a six sided dice'
        });
    }
async run(message , args )
{
var diceroll = Math.floor(Math.random() * 6) + 1 ;
message.reply("your dies landed on " + diceroll)
}
}

module.exports = diesroolCommand ;