const Discord = require('discord.js')
require('discord-replys')
const db = require('coders.db')
const { MessageButton } = require('discord-buttons')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.replyNoMention('HATA: Bu komutu kullanabilmek için Yönetici iznine sahip olmanız gerekir!')
  if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.replyNoMention('HATA: Bu komutu kullanabilmek için bana Yönetici izni vermelisiniz.')
  let kontrol1 = db.get(`talepKanal.${message.guild.id}.durum`)
  let kanalKontrol = db.get(`talepKanal.${message.guild.id}.kanal`)
  let textKontrol = db.get(`talepText.${message.guild.id}.text`)
  if (args[0] == 'ayarla') {
  if (kontrol1) {
    let messag = args.slice(1).join(' ')
    if (!messag) return message.replyNoMention('HATA: Geçerli bir mesaj belirtin.').then(w => w.delete({timeout:3500}))
    db.set(`talepText.${message.guild.id}.text`, messag)
    message.replyNoMention(`BAŞARILI: Mesaj başarıyla ayarlandı. Diğer detayları ayarlayınız. (\`w.yardım talep\`)`)
    message.react('✅')
    } else {
      return message.replyNoMention('HATA: Kanal ayarlı değil. Ayarlamak için: `w.talepkanal ayarla #kanal`').then(w => w.delete({timeout:3500}))
    }
  } else if (args[0] == 'gönder') {
    if (!kanalKontrol) {
      return message.replyNoMention('HATA: Kanal ayarlı değil. Ayarlamak için: `w.talepkanal ayarla #kanal`').then(w => w.delete({timeout:3500}))
    } else {
      if (!textKontrol) {return message.replyNoMention('HATA: Mesaj ayarlanmamış. Ayarlamak için: `w.talepmesaj ayarla`')}
     let asdqwe = message.guild.channels.cache.get(kanalKontrol)
     const e1 = new Discord.MessageEmbed()
     .setAuthor(message.guild.name, message.guild.iconURL({dynamic:true}))
     .setTitle(message.guild.name+' | Destek Sistemi')
     .setColor('#ffffff')
     .setDescription(`
${textKontrol}     
`)
     .setFooter(`${client.user.username} - Talep Sistemi`);
      const b1 = new MessageButton()
      .setStyle('gray')
      .setLabel('📪 | Talep Oluştur')
      .setID('createTicket');
      asdqwe.send(e1,b1).then(m => db.set(`talepMessage.${message.guild.id}`, m.id))
      message.replyNoMention('BAŞARILI: Talep mesajı başarıyla gönderildi.')
      message.react('✅')
    }
  } else {
    return message.replyNoMention(`HATA: Geçersiz argüman. Doğru Kullanımlar:\nw.talepmesaj ayarla\nw.talepmesaj gönder`).then(w => w.delete({timeout:15000}))
  }
}

exports.conf = {
  aliases: ["talep-mesaj","ticket-mesaj","talepMesaj","TALEPMESAJ"]
}

exports.help = {
  name: "talepmesaj",
  cooldown: 3
}