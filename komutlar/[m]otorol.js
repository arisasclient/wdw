const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
require('discord-replys')
const db = require('coders.db')
const moment = require('moment')
moment.locale('tr')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.replyNoMention('HATA: Bu komutu yalnızca Yönetici iznine sahip kullanıcılar kullanabilir.')
  if (!args[0]) {
    let a = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
    .setColor('RANDOM')
    .setDescription(`
• **Otorol Sistemi**

Otorol ayarlamak için: w.otorol ayarla @rol #kanal
Otorol sıfırlamak için: w.otorol sıfırla
    `)
    return message.replyNoMention(a)
  }
  if (args[0] == 'ayarla') {
  let role = message.mentions.roles.first();
  let channel = message.mentions.channels.first();
    if (!role) return message.replyNoMention('HATA: Geçerli bir rol belirtin. Örnek Kullanım: `w.otorol ayarla @rol #kanal`')
    if (!channel) return message.replyNoMention('HATA: Geçerli bir log kanalı belirtin. Örnek Kullanım: `w.otorol ayarla @rol #kanal`')
    if(role.position >= message.guild.me.roles.highest.position) return message.replyNoMention('HATA: Belirtilen rolü verebilmem için gerekli üstünlüğüm bulunmuyor. '+client.user.username+' adlı rolü en yukarı taşıyıp tekrar deneyin!')
    db.set(`autoRole&${message.guild.id}`, true)
    db.set(`autoRoleRole&${message.guild.id}`, role.id)
    db.set(`autoRoleChannel&${message.guild.id}`, channel.id)
    let embeda = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
    .setColor('BLUE')
    .setDescription(`
• **Otorol Sistemi**    
    
Otorol sistemi başarıyla ayarlandı.
Verilecek Rol: <@&${role.id}> | Loglanacak Kanal: <#${channel.id}>
    `)
    message.replyNoMention(embeda)
  } else if (args[0] == 'sıfırla') {
    let data = db.get(`autoRole&${message.guild.id}`)
    if (data) {
      db.delete(`autoRole&${message.guild.id}`)
      db.delete(`autoRoleRole&${message.guild.id}`)
      db.delete(`autoRoleChannel&${message.guild.id}`)
      let asd = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
      .setColor('RANDOM')
      .setDescription(`
• **Otorol Sistemi**

Otorol sistemi başarıyla sıfırlandı.
      `)
      message.replyNoMention(asd)
    } else {
      message.replyNoMention('HATA: Bu sunucuda zaten otorol açık değil! Açmak için: `w.otorol ayarla @rol #kanal`')
    }
  }
}

exports.conf = {
  aliases: ["auto-role","autorole","oto-rol"]
}

exports.help = {
  name: "otorol",
  cooldown: 5
}