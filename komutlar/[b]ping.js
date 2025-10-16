const Discord = require('discord.js')
     require('discord-replys')
exports.run = async (client ,message, args) =>{
  var kontrol
  if (client.ws.ping < 90) kontrol = 'Süper. 👌'
  if (client.ws.ping > 90) kontrol = 'Çok kötü. 👎'
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL({dynamic:true}))
  .setDescription(`
  🌐 Robot Gecikmesi: **${client.ws.ping} ms**
  📶 Veriyi Okuma Gecikmesi: **0.00 ms**
  💻 Robot Durumu: ${kontrol}
  `)
  .setFooter(client.user.username, client.user.avatarURL())
  message.replyNoMention(`> Değerler ölçülüyor... <a:loading:874743220666511410>`).then(msg => msg.edit(`> **Değerler ölçüldü.**`, embed))
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ping'],
 permLevel: 0
};
 
exports.help = {
 name: 'ping',
 description: 'Botun Pingine Bakarsın',
      cooldown: 5      ,
 usage: '!ping'
};
 