const Discord = require("discord.js");
    require('discord-replys')
module.exports.run = async (client, message, args) => {

    let google = args.slice(0).join('+');
        let link = `https://translate.google.com/?hl=tr#tr/en/` + google;
        if(!link)return message.replyNoMention("Hata !")
  if(!google) return message.replyNoMention("**Lütfen Ne Çevireceğimi Yaz**")
        let embed = new Discord.MessageEmbed() 
    .setColor("BLACK")
    .setTimestamp() 
    .addField("Kelime:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
    .setFooter(`© 2021 ${client.user.username} | Yapımcı: arisâ#0017`)        
   message.replyNoMention(embed);  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['g-çeviri'],
  permLevel: 0
};

exports.help = {
  name: 'çevr',
  description: 'Bot sunucudan ayrılır.',
      cooldown: 5      ,
  usage: 'gçevir'
};