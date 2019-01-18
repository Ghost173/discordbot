const Commando = require('discord.js-commando') ;
const reputation = require("../../reputation.json")
const fs = require("fs");

class repCommand extends Commando.Command 
{
    constructor(client)
    {
        super(client, {

            name: 'plusrep',
            group: 'simple',
            memberName: 'plusrep',
            description: 'add reputation to the users'
        });
    }

    async run(message , args )
     {
        let targetUser = message.guild.member(message.mentions.users.first());
        if(!targetUser)
        {
            message.channel.send("sorry, i coulndt find that user");
            return;
        }
        if(!reputation[message.author.id]) 
        {
            reputation[message.author.id] = {
                rep: 0
            };
        }
        reputation[message.author.id].rep = reputation[message.author.id].rep + 1;
        fs.writeFile("reputation.json", JSON.stringify(reputation), (err) => {
            if(err) 
            {
                console.log(err);
            }
        });
     }
}

module.exports = repCommand;