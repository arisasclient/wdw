const Discord = require('discord.js')
require('discord-replys')
const db = require('coders.db')
const { MessageButton } = require('discord-buttons')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.replyNoMention('HATA: Bu komutu kullanabilmek için Yönetici iznine sahip olmanız gerekir!')
  if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.replyNoMention('HATA: Bu komutu kullanabilmek için bana Yönetici izni vermelisiniz.')
  let kontrol1 = db.get(`talepKanal.${message.guild.id}.durum`)
  let kanalKontrol = db.get(`talepKanal.${message.guild.id}.kanal`)
  if (args[0] == 'ayarla') {
  if (!kontrol1) {
    let kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
    if (!kanal) return message.replyNoMention('HATA: Geçerli bir kanal belirtin.').then(w => w.delete({timeout:3500}))
    db.set(`talepKanal.${message.guild.id}.durum`, true)
    db.set(`talepKanal.${message.guild.id}.kanal`, kanal.id)
    message.replyNoMention(`BAŞARILI: Kanal başarıyla ayarlandı. Diğer detayları ayarlayınız. (\`w.yardım talep\`)`)
    message.react('✅')
    } else {
      return message.replyNoMention('HATA: Kanal zaten ayarlanmış. Sıfırlamak için: `w.talepkanal sıfırla`')
    }
  } else if (args[0] == 'sıfırla') {
    if (!kanalKontrol) {
      return message.replyNoMention('HATA: Kanal zaten ayarlanmamış. Ayarlamak için: `w.talepkanal ayarla #kanal`')
    } else {
      message.guild.channels.cache.get(kanalKontrol).messages.fetch(db.get(`talepMessage.${message.guild.id}`)).then(m => m.delete())
      db.delete(`talepKanal.${message.guild.id}.kanal`)
      db.delete(`talepKanal.${message.guild.id}.durum`)
      message.replyNoMention('BAŞARILI: Talep kanalı başarıyla sıfırlandı.')
      message.react('✅')
    }
  } else {
    return message.replyNoMention(`HATA: Geçersiz argüman. Doğru Kullanımlar:\nw.talepkanal ayarla\nw.talepkanal sıfırla`)
  }
}

exports.conf = {
  aliases: ["talep-kanal","ticket-channel","talepKanal","TALEPKANAL"]
}

exports.help = {
  name: "talepkanal",
  cooldown: 3
}