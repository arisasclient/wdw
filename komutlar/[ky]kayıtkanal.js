exports.run = (client, message, args) => {
    if (!message.guild) return
    let db = require("coders.db")
    let Discord = require("discord.js")
    let rol = db.get(`kayıt.${message.guild.id}.durum`)
    require('discord-replys')
    const member3 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`**HATA** - Bu Sunucuda Yetkili Değilsin.`)
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.replyNoMention(member3)
    const member = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`**HATA** - Bir Kanal Etiketle. \n\nDoğru Kullanım: w.kanal-ayarla #Kanal`)
    if (rol) {
        let kanal = message.mentions.channels.first()
        if (!kanal) return message.replyNoMention(member)
        db.set(`kayıt.${message.guild.id}.kanal`, kanal.id)
       message.replyNoMention(`**Başarı ile kayıt kanalı ayarlandı.**`)
              message.react("✅")
    } else {
        message.replyNoMention(`**Kayıt sistemi açık değil.**`)
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'kanal-ayarla',
    description: 'küfrü log ab',
      cooldown: 5      ,
    usage: 'küfürlog'
}