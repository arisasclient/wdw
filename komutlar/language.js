const Discord = require('discord.js')
require('discord-replys')
const db = require('coders.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
    let prefix;
  if (db.has(`prefix_${message.guild.id}`) === true) {
    prefix = db.get(`prefix_${message.guild.id}`);
  }
  if (db.has(`prefix_${message.guild.id}`) === false) {
    prefix = ayarlar.prefix;
  }
  let dil = db.get(`language.${message.guild.id}`)
  if(!dil) dil = ayarlar.dil
  if(!args[0]) {
    return message.replyNoMention(`:flag_tr: Geçerli bir argüman belirtin: \`${prefix}dil english\` | \`${prefix}dil turkish\` | \`${prefix}dil russian\` | \`${prefix}dil sıfırla\`\n:flag_us: Specify a valid argument: \`${prefix}language english\` | \`${prefix}language turkish\` | \`${prefix}language russian\` | \`${prefix}language reset\`\n:flag_ru: Укажите допустимый аргумент: \`${prefix}язык english\` | \`${prefix}язык turkish\` | \`${prefix}язык russian\` | \`${prefix}язык сброснастроек\``)
  }
  if(args[0] === 'turkish') {
    let ayarlı = db.get(`language.${message.guild.id}`)
    if (ayarlı === 'turkish') {
      return message.replyNoMention(`Dil zaten Türkçe.`)
    }
    db.delete(`language.${message.guild.id}`)
    db.set(`language.${message.guild.id}`,`turkish`)
          let embed1 = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
  .setColor('RANDOM')
  .setDescription(`Bot dili **başarıyla** türkçeye ayarlandı.`)
  .setFooter(client.user.username, client.user.avatarURL())
  return message.replyNoMention(embed1)
  }
  if(args[0] === 'english') {
    let ayarlı = db.get(`language.${message.guild.id}`)
    if (ayarlı === 'english') {
      return message.replyNoMention(`Language already English.`)
    }
        db.delete(`language.${message.guild.id}`)
    db.set(`language.${message.guild.id}`,`english`)
          let embed1 = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
  .setColor('RANDOM')
  .setDescription(`The bot language is **successfully** set to English.`)
  .setFooter(client.user.username, client.user.avatarURL())
  return message.replyNoMention(embed1)
  }
  if(args[0] === 'russian') {
        let ayarlı = db.get(`language.${message.guild.id}`)
    if (ayarlı === 'russian') {
      return message.replyNoMention(`Язык уже русский.`)
    }
        db.delete(`language.${message.guild.id}`)
    db.set(`language.${message.guild.id}`,`russian`)
          let embed1 = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
  .setColor('RANDOM')
  .setDescription(`Язык бота **успешно** установлен на русский.`)
  .setFooter(client.user.username, client.user.avatarURL())
  return message.replyNoMention(embed1)
  }
  if(args[0] === 'сброснастроек') {
        db.delete(`language.${message.guild.id}`)
              let embed1 = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
  .setColor('RANDOM')
  .setDescription(`Bot dili başarıyla sıfırlandı.\n\nŞuanda aktif olan dil: **Türkçe**`)
  .setFooter(client.user.username, client.user.avatarURL())
  return message.replyNoMention(embed1)
  }
  if(args[0] === 'sıfırla') {
    db.delete(`language.${message.guild.id}`)
              let embed1 = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
  .setColor('RANDOM')
  .setDescription(`Bot dili başarıyla sıfırlandı.\n\nŞuanda aktif olan dil: **Türkçe**`)
  .setFooter(client.user.username, client.user.avatarURL())
  return message.replyNoMention(embed1)
  }
  if(args[0] === 'reset') {
        db.delete(`language.${message.guild.id}`)
              let embed1 = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
  .setColor('RANDOM')
  .setDescription(`Bot language reset successfully.\n\nCurrently active language: **Turkish**`)
  .setFooter(client.user.username, client.user.avatarURL())
  return message.replyNoMention(embed1)
  }
}

exports.conf = {
  aliases: ['language','язык']
}

exports.help = {
  name: 'dil'
}