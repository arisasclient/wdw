const Discord = require('discord.js');
require('discord-replys')
const db = require("coders.db");
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
    let dil = db.get(`language.${message.guild.id}`)
    if(!dil) dil = 'turkish'
  if(dil === 'turkish') {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Bu komutu kullanmak için MESAJLARI YÖNET yetkisine sahip olmalısın.')
  let preffix = db.get(`prefix_${message.guild.id}`)
   if(!args[0]) return message.reply(`Bu sunucudaki prefixim: **${preffix ? preffix : ayarlar.prefix}** \n Prefixi Değiştirmek veya Sıfırlamak İçin **(${preffix ? preffix : ayarlar.prefix}prefix ayarla / ${preffix ? preffix : ayarlar.prefix}prefix sıfırla )**`)

    if(args[0] == "sıfırla") {
    if(!preffix) {
      return message.reply(`Ayarlanmayan şeyi sıfırlayamazsın.`)
    } else {
    db.delete(`prefix_${message.guild.id}`)
    return  message.reply(`Prefix başarıyla sıfırlandı. Prefix artık **${ayarlar.prefix}**`)
    }
  }
  
  
  if(args[0] === "ayarla") {
      if(!args[1]) return message.reply("Bir Prefix Değeri Giriniz")

    if(preffix) {
        return message.reply(`Ayarlanan şeyi tekrar ayarlayamazsın.`)
      } else {
      db.set(`prefix_${message.guild.id}`, args[1])
      message.reply(`Prefix başarıyla **${args[1]}** olarak ayarlandı.\n${args[1]}prefix sıfırla yazarak prefixi sıfırlayabilirsiniz.`)
      }
  }
  }
  if(dil === 'english') {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You must have MANAGE MESSAGES privilege to use this command.')
      let prefix = db.get(`prefix_${message.guild.id}`)
      if(!prefix) prefix = ayarlar.prefix
   if(!args[0]) return message.replyNoMention(`My prefix on this server is: **${prefix}** \n To Change or Reset Prefix: \`${prefix}prefix set\` | \`${prefix}prefix reset\``)

    if(args[0] =="reset") {
    if(!prefix) {
      return message.reply(`You cannot reset what is not set.`)
    } else {
    db.delete(`prefix_${message.guild.id}`)
    return  message.reply(`Prefix reset successfully. Prefix is now: **${ayarlar.prefix}**`)
    }
  }
  
  
  if(args[0] == "set") {
      if(!args[1]) return message.reply("Enter a Prefix Value")

    if(prefix) {
        return message.reply(`You cannot reset what is set.`)
      } else {
      db.set(`prefix_${message.guild.id}`, args[1])
      message.reply(`The prefix has been successfully set to **${args[1]}**\n\nYou can reset the prefix by typing **${args[1]}prefix reset**`)
      }
  }
  }
  if(dil === 'russian') {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Для использования этой команды у вас должна быть привилегия УПРАВЛЕНИЕ СООБЩЕНИЯМИ.')
      let prefix = db.get(`prefix_${message.guild.id}`)
      if(!prefix) prefix = ayarlar.prefix
   if(!args[0]) return message.replyNoMention(`Мой префикс на этом сервере: **${prefix}** \n Чтобы изменить или сбросить префикс: \`${prefix}prefix установленный\` | \`${prefix}prefix сброснастроек\``)

    if(args[0] =="сброснастроек") {
    if(!prefix) {
      return message.reply(`Невозможно сбросить то, что не установлено.`)
    } else {
    db.delete(`prefix_${message.guild.id}`)
    return  message.reply(`Префикс сброшен успешно. Префикс сейчас: **${ayarlar.prefix}**`)
    }
  }
  
  
  if(args[0] == "установленный") {
      if(!args[1]) return message.reply("Введите значение префикса")

    if(prefix) {
        return message.reply(`Вы не можете сбросить то, что установлено.`)
      } else {
      db.set(`prefix_${message.guild.id}`, args[1])
      message.reply(`Префикс был успешно установлен на: **${args[1]}**\n\nВы можете сбросить префикс, набрав: **${args[1]}prefix сброснастроек**`)
      }
  }
  }
}                 

exports.conf = {
  enabled: true,
  aliases: ['prefix']
};

exports.help = {
  name: 'prefix',
  kategori: "yetkili",
  description: 'Sunucuya özel prefix ayarlar.',
  usage: 'prefix'
};