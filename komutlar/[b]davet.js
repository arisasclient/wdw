const  Discord = require("discord.js"); 
    require('discord-replys')
exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("**Davet Linkleri**")
  .setDescription("[__**Davet Linki**__](https://discord.com/api/oauth2/authorize?client_id=859104080131784704&permissions=8&scope=bot)\n[__**Destek Sunucusu**__](https://discord.gg/h8hWtJgj9g)\n[__**Müzik Botu**__](https://discord.com/api/oauth2/authorize?client_id=904759096140513281&permissions=8&scope=bot)")
  .setThumbnail(client.user.avatarURL())
  .setFooter(`© 2021 ${client.user.username} | Yapımcı: âri#1337`)
  message.replyNoMention(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//firex davet system
exports.help = {
  name: 'davet',
  description: '',
      cooldown: 5      ,
  usage: ''
};