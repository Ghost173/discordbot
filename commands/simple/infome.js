const Commando = require('discord.js-commando') ;
const discord = require('discord.js');

class infome extends Commando.Command 
{
    constructor(client)
    {
        super(client, {

            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'learn a little about me'
        });
    }
async run(message , args )
{
var myinfo = new discord.RichEmbed()
.setDescription("hello comer my name is mtrixbot")
.addField("root","root is the creater of me", true)
.addField("server","tdm , sniperonly promod , zombies", true)
.setColor("#7CFC00")
.setThumbnail(message.author.avatarURL)
.setFooter("thank for reading about me")
.setTitle("all about me")
//.setURL("")
message.channel.sendEmbed(myinfo);
}
}

module.exports = infome ;