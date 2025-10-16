const Discord = require('discord.js');
    require('discord-replys')
const db = require('coders.db');

exports.run = async (client, message, args) => {
    
  const db = require('coders.db');
  
   const x = args.slice(0).join(' ');
  
    if (!x) return message.replyNoMention('Lütfen bir oylama içeriği giriniz');
    
    // Create Embed
    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`${client.user.username} - Oylama Sistemi`)
        .addField('Oylama', x)
    let msg = await message.channel.send(embed)
        .then(function (msg) {
        
          msg.react("✅");
            msg.react("❌")           
        });
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["anket", "oylama-yap", "anket-aç"],
  permLevel: 3,
  kategori: "sunucu",

};

exports.help = {
  name: 'oylama',
  description: 'Sunucunuzda oylama yapmanızı sağlar.',
      cooldown: 5      ,
  usage: 'oylama <mesaj>',
 
};