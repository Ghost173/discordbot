const Commando = require('discord.js-commando') ;

class flipCommand extends Commando.Command 
{
    constructor(client)
    {
        super(client, {

            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'flip a coin and random get head to tails'
        });
    }

    async run(message , args )
     {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0) 
        {
            
            message.reply(" head for you pro", {files: [__dirname + "/img/head.jpg"]}) ;


        }
else 
{
    message.reply("tail noobs", {files: [__dirname + "/img/tail.jpg"]});
}
     }
}

module.exports = flipCommand;