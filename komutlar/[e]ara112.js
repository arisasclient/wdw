const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
    require('discord-replys')
exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(message.author.username + " Ambulans Geliyor Dayan")
    .setColor('RED')
    .setTimestamp()
    .setDescription('')
    .setImage(`https://cdn.discordapp.com/attachments/787720197653397547/827923767291281468/PoliticalEmptyCirriped-size_restricted.gif`)
    return message.replyNoMention(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//firex
exports.help = {
  name: 'ara112',
  description: 'Ambulans Çağırır (ciddiye almayın)',
    cooldown: 5      ,
  usage: 'ara112'
};
