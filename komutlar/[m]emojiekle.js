const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  let emojiURL = args[0]
  let emojiName = args.slice(1).join(' ')
  if (!message.member.hasPermission('MANAGE_EMOJIS')) return message.replyNoMention('HATA: Bu komutu kullanabilmek için `Emojileri Yönet` yetkisine sahip olmalısın!').then(a => a.delete({timeout:3500}))
  if (!message.guild.me.hasPermission('MANAGE_EMOJIS')) return message.replyNoMention('HATA: Bu komutu kullanabilmek için bana `Emojileri Yönet` yetkisi vermeniz gerekiyor.').then(a => a.delete({timeout:3500}))
  if (!emojiURL) return message.replyNoMention('HATA: Geçerli bir link belirtin. Doğru Kullanım: `w.emojiyükle <url> <emoji-adı>`')
  if (!emojiName) return message.replyNoMention('HATA: Geçerli bir isim belirtin. Doğru Kullanım: `w.emojiyükle <url> <emoji-adı>`')
  message.guild.emojis.create(`${emojiURL}`, `${emojiName}`, {reason: `Sorumlu Kullanıcı: ${message.author.tag}`})
  .catch(err => message.replyNoMention('HATA: '+err))
  message.react('✅')
  message.replyNoMention('BAŞARILI: `'+emojiName+'` adıyla, emoji oluşturuldu.')
}

exports.conf = {
  aliases: ["emoji-ekle","emojiyükle","emoji-yükle"]
}

exports.help = {
  name: "emojiekle",
  cooldown: 5
}