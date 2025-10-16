const Discord = require('discord.js');
    require('discord-replys')
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setTitle('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username + ' Buyur kardeşim tokenim')
    .setColor("RANDOM")
    .setImage("https://cdn.discordapp.com/attachments/809027785674719293/981652129527762974/giphy.gif")
    .setTimestamp()
    return message.replyNoMention(embed);
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'token',
  description: 'token',
      cooldown: 5      ,
  usage: 'token'
};
