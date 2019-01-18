const Commando = require('discord.js-commando') ;

class join_team extends Commando.Command 
{
    constructor(client)
    {
        super(client, {

            name: 'jointeam',
            group: 'team',
            memberName: 'jointeam',
            description: 'join a team'
        });
    }

    async run(message , args )
     {
        currentTeamMembers.push(message.author)
     
    
     }
}

module.exports = join_team;