const Discord = require('discord.js')
require('discord-replys')
const db = require('coders.db')
const { MessageButton } = require('discord-buttons')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.replyNoMention('HATA: Bu komutu kullanabilmek için Yönetici iznine sahip olmanız gerekir!')
  if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.replyNoMention('HATA: Bu komutu kullanabilmek için bana Yönetici izni vermelisiniz.')
  let kontrol1 = db.get(`talepYetkili.${message.guild.id}.durum`)
  let kanalKontrol = db.get(`talepYetkili.${message.guild.id}.rol`)
  if (args[0] == 'ayarla') {
  if (!kontrol1) {
    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
    if (!role) return message.replyNoMention('HATA: Geçerli bir rol belirtin.').then(w => w.delete({timeout:3500}))
    db.set(`talepYetkili.${message.guild.id}.durum`, true)
    db.set(`talepYetkili.${message.guild.id}.rol`, role.id)
    message.replyNoMention(`BAŞARILI: Yetkili rolü başarıyla ayarlandı. Diğer detayları ayarlayınız. (\`w.yardım talep\`)`)
    message.react('✅')
    } else {
      return message.replyNoMention('HATA: Yetkili rolü zaten ayarlanmış. Sıfırlamak için: `w.talepyetkili sıfırla`').then(w => w.delete({timeout:3500}))
    }
  } else if (args[0] == 'sıfırla') {
    if (!kanalKontrol) {
      return message.replyNoMention('HATA: Yetkili rolü zaten ayarlanmamış. Ayarlamak için: `w.talepyetkili ayarla @Rol/ID`').then(w => w.delete({timeout:3500}))
    } else {
      db.delete(`talepYetkili.${message.guild.id}.rol`)
      db.delete(`talepYetkili.${message.guild.id}.durum`)
      message.replyNoMention('BAŞARILI: Talep yetkili rolü başarıyla sıfırlandı.')
      message.react('✅')
    }
  } else {
    return message.replyNoMention(`HATA: Geçersiz argüman. Doğru Kullanımlar:\nw.talepyetkili ayarla\nw.talepyetkili sıfırla`).then(w => w.delete({timeout:15000}))
  }
}

exports.conf = {
  aliases: ["talep-yetkili","ticket-staff","talepYetkili","TALEPYETKİLİ"]
}

exports.help = {
  name: "talepyetkili",
  cooldown: 3
}