const Commando = require('discord.js-commando') ;
const reputation = require("../../reputation.json")
const fs = require("fs");
const discord = require('discord.js');

class showrepCommand extends Commando.Command 
{
    constructor(client)
    {
        super(client, {

            name: 'showrep',
            group: 'simple',
            memberName: 'showrep',
            description: 'show reputation to the users'
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
        //reputation[message.author.id].rep = reputation[message.author.id].rep + 1;
        let newEmb = new discord.RichEmbed()
        .setTitle(targetUser.username +  "reputation")
        .addField("reputation" , (reputation[message.author.id].rep).toString(),false)
        message.channel.send(newEmb);
        fs.writeFile("reputation.json", JSON.stringify(reputation), (err) => {
            if(err) 
            {
                console.log(err);
            }
        });
     }
}

module.exports = showrepCommand;