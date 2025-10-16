const Discord = require('discord.js');
    require('discord-replys')
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
 
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(message.author.username + ' Artık Kralsın !!!')
    .setColor("BLACK")
    .setTimestamp()
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/787720197653397547/830750149805604864/e4a0e2ac5cf17c9f7cfc86c0de272392.gif`)
    return message.replyNoMention(sunucubilgi);
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kral"],
  permLevel: 0
};
exports.help = {
  name: 'kralol',
  description: 'kralol',
      cooldown: 5      ,
  usage: 'kralol'
};
//firex