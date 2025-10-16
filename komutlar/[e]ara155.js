const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
    require('discord-replys')
exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(message.author.username + ' Polis Geliyor :))')
    .setColor('BLACK')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/817780071623557162/817798235103428618/c543c1a2c7ad7cc.gif`)
    return message.replyNoMention(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
};

exports.help = {
  name: 'ara155',
  description: 'Polisi Arar (ciddiye almayın)',
      cooldown: 5      ,
  usage: 'ara155'
};