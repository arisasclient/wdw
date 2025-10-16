const Discord = require('discord.js')
require('discord-replys')
const db = require('coders.db')
const { MessageButton } = require('discord-buttons')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.replyNoMention('HATA: Bu komutu kullanabilmek için Yönetici iznine sahip olmanız gerekir!')
  if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.replyNoMention('HATA: Bu komutu kullanabilmek için bana Yönetici izni vermelisiniz.')
  let kanalDurum = db.get(`talepKanal.${message.guild.id}.durum`)
  let kanalKontrol = db.get(`talepKanal.${message.guild.id}.kanal`)
  let rolDurum = db.get(`talepYetkili.${message.guild.id}.durum`)
  let rolKontrol = db.get(`talepYetkili.${message.guild.id}.rol`)
  let textKontrol = db.get(`talepText.${message.guild.id}.text`)
  if (args[0] == 'sil') {
   // message.guild.channels.cache.get(kanalKontrol).messages.fetch(db.get(`talepMessage.${message.guild.id}`)).then(m => m.delete())
    db.delete(`talepKanal.${message.guild.id}.durum`)
    db.delete(`talepKanal.${message.guild.id}.kanal`)
    db.delete(`talepYetkili.${message.guild.id}.durum`)
    db.delete(`talepYetkili.${message.guild.id}.rol`)
    db.delete(`talepText.${message.guild.id}.text`)
    db.delete(`talepMessage.${message.guild.id}`)
    message.replyNoMention('BAŞARILI: Tüm talep verileri silindi.')
    message.react('✅')
  }
  if (kanalDurum == true) {
    kanalDurum = "Aktif."
  } else {
    kanalDurum = "Ayarlanmamış."
  }
  if (kanalKontrol) {
    kanalKontrol = '<#'+kanalKontrol+'>'
  } else {
    kanalKontrol = "Ayarlanmamış."
  }
  if (rolDurum == true) {
    rolDurum = "Aktif."
  } else {
    rolDurum = "Ayarlanmamış."
  }
  if (rolKontrol) {
    rolKontrol = '<@&'+rolKontrol+'>'
  }
  if (textKontrol) {
    textKontrol = textKontrol
  } else {
    textKontrol = "Ayarlanmamış."
  }
  const embed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
  .setColor('RANDOM')
  .setDescription(`
**Merhaba <a:arisaEl:979066280436989962>**

Talep sistemi, sunucunuzdaki yönetimi el altında tutmanızı ve üyelere destek vermenizi sağlar.
Açılan talepler, talep kanalıyla aynı kategori altında açılır.
Yalnızca belirtilen yetkili rolü, yöneticiler ve talebi açan kişi kanalı görebilir.

* Tüm talep sistemi verilerini silmek için **\`w.talepsistemi sil\`** yazınız.

Kanal Durumu: ${kanalDurum}
Kanal: ${kanalKontrol}

Yetkili Rolü Durumu: ${rolDurum}
Yetkili Rolü: ${rolKontrol}

Talep Oluşturma Mesajındaki İçerik;

${textKontrol}  
`)
  .setFooter(`${client.user.username} Talep Sistemi - 2022`)
  message.replyNoMention(embed)
}

exports.conf = {
  aliases: ["talep-sistemi","ticket-system","talepSistemi","TALEPSİSTEMİ"]
}

exports.help = {
  name: "talepsistemi",
  cooldown: 3
}