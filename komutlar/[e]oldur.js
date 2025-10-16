const Discord = require('discord.js')
    require('discord-replys')
exports.run = (client, message, args) => {
  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if(!user) return message.replyNoMention(`Kullanıcı belirtin.`)
  var linkler = [
    'https://cdn.discordapp.com/attachments/809027785674719293/876529621305270272/7HJw6.gif',
    'https://cdn.discordapp.com/attachments/809027785674719293/876529627139567677/tumblr_46460b840c85db81dc912f5aa8dd484a_098b70e7_2048.gif',
    'https://cdn.discordapp.com/attachments/809027785674719293/876529642675269642/1536092449_920b72e80025148152a793f6.gif',
    'https://cdn.discordapp.com/attachments/809027785674719293/876529653236527124/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif',
    'https://cdn.discordapp.com/attachments/809027785674719293/876529674413555792/s-07058368fd2f57763fcb6b1143fd7409acc65ae4.gif',
    'https://cdn.discordapp.com/attachments/728739832225988719/874766947546451988/giphy.gif'
  ]
    let yapılcak = linkler[Math.floor(Math.random()*linkler.length)];
  let embed = new Discord.MessageEmbed()
  .setTitle(`${message.author.tag} adlı kişi, ${user.user.tag} adlı kişiyi öldürdü.`)
  .setImage(yapılcak)
  .setColor('RANDOM')
  .setFooter(`${client.user.username} Eğlence Komutları`, client.user.avatarURL())
  message.replyNoMention(embed)
}

exports.conf = {
  aliases: ['oldür','öldur']
}

exports.help = {
  name: 'öldür'
}