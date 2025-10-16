const Discord = require('discord.js');
    require('discord-replys')
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const generator = require('generate-password');
 
exports.run = function(client, message, args) {
    var uzunluk = args.slice(0).join(' ');
    if (!uzunluk) return message.reply("Bir uzunluk belirt. Doğru Kullanım **a!şifre `Sayı`**")
 
  var password = generator.generateMultiple(1, {
    length: uzunluk,
    uppercase: false
});
    message.replyNoMention("DM kutunu kontrol et.")
    message.author.send( `**${uzunluk}**` + ' Uzunluğunda Şifre : ' + `**${password}**`);
};  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'şifre',
  description: 'Rastgele bir şifre oluşturur.',
      cooldown: 5      ,
  usage: 'şifre '
};1