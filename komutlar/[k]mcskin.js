const Discord = require('discord.js');
    require('discord-replys')
exports.run = (client, message, args) => {   

 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.replyNoMention('**Skin Adı Gir**')
 if (mesaj == member) {
   message.replyNoMention('**Skin Adı Belirt**')
 } else {
 const mcbody = new Discord.MessageEmbed()
   .setColor('BLUE')
   .setImage(body)

message.replyNoMention(mcbody);
 }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mccilt"],
  permLevel: 0
};
//firex
exports.help = {
      cooldown: 5      ,
  name: "mcskin"
};