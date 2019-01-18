const Commando = require('discord.js-commando') ;

class funmirr extends Commando.Command 
{
    constructor(client)
    {
        super(client, {

            name: 'funm',
            group: 'simple',
            memberName: 'funm',
            description: 'look your reaction on the mirror'
        });
    }
async run(message , args )
{
message.reply(message.author.avatarURL)
}
}

module.exports = funmirr ;