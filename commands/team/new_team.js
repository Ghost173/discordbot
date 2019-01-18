const Commando = require('discord.js-commando') ;

class new_team extends Commando.Command 
{
    constructor(client)
    {
        super(client, {

            name: 'newteam',
            group: 'team',
            memberName: 'newteam',
            description: 'create a new team'
        });
    }

    async run(message , args )
     {
        currentTeamMembers = [] 
        message.reply("the current team has been reset")
     }
}

module.exports = new_team;