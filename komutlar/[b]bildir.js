const Discord = require('discord.js')
    require('discord-replys')
exports.run = async (client, message, args) => {  
  const kanal = client.channels.cache.get('809027785674719293')
  let bildirilen = args.slice(0).join(' ')
  if(!bildirilen) return message.replyNoMention("Bildirilecek hatayı, isteğinizi yazınız.")
  if(bildirilen.lenght < 3) return message.replyNoMention('Bildirilecek metin, en az **3** kelimeden oluşmalı.')
  if (message.attachment) return message.replyNoMention('Bildirilecek içeriğin medya ögesi içermemesi gerekiyor.')
  message.react("✅")
  message.replyNoMention("Bildirildi.").then(msg => msg.delete({timeout:5000}))
  message.channel.createInvite().then(invite => {
  const embed = new Discord.MessageEmbed()
  .setTitle("Yeni bir istek/hata bildirisi var !")
  .setColor('RANDOM')
.setDescription(`
Hata / İstek Bildirisi!

• Bildiren Üye: ${message.author} | \`${message.author.tag}\` | \`${message.author.id}\`
• Bildirilen Kanal Invite Link: **https://discord.gg/${invite.code}**
• Bildirilme Tarih / Saat: ${require('moment')(Date.now()).locale('tr').add(3, 'hours')}

\`\`\`diff\n${bildirilen}\`\`\`
`)
  .setTimestamp()
kanal.send('@everyone', embed)
  })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//firex
exports.help = {
  name: 'bildir',
  description: '',
      cooldown: 30      ,
  usage: ''
};