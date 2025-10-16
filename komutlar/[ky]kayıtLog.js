const Discord = require('discord.js')
const db = require('coders.db')

exports.run = async (client, message, args) => {
      let rol = db.get(`kayıt.${message.guild.id}.durum`)
    require('discord-replys')
    const member3 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`**HATA** - Bu Sunucuda Yetkili Değilsin.`)
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.replyNoMention(member3)
    const member = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`**HATA** - Bir Kanal Etiketle. \n\nDoğru Kullanım: w.log-ayarla #Kanal`)
    if (rol) {
        let kanal = message.mentions.channels.first()
        if (!kanal) return message.replyNoMention(member)
        db.set(`kayıt.${message.guild.id}.log`, kanal.id)
       message.replyNoMention(`**Başarı ile kayıt log kanalı ayarlandı.**`)
              message.react("✅")
    } else {
        message.replyNoMention(`**Kayıt sistemi açık değil.**`)
    }
}

exports.conf = {
  aliases: ["logayarla"]
}

exports.help = {
  name: "log-ayarla",
  cooldown: 5
}