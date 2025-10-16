exports.run = (client, message, args) => {
    if (!message.guild) return
    let db = require("coders.db")
    let Discord = require("discord.js")
    let kayıt = db.get(`kayıt.${message.guild.id}.durum`)
    require('discord-replys')
    const member3 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`**HATA** - Bu Sunucuda Yetkili Değilsin.`)
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.replyNoMention(member3)
    const member = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`**HATA** - Bir Rol Etiketle. \n\nDoğru Kullanım: w.kayıtçı-rol @Rol`)
    if (kayıt) {
        let rol = message.mentions.roles.first()
        if (!rol) return message.replyNoMention(member)
        db.set(`kayıt.${message.guild.id}.kayıtcı.rol`, rol.id)
       message.replyNoMention(`**Başarı ile kayıtçı rolü ayarlandı.**`)
              message.react("✅")
       
    } else {
        message.replyNoMention(`**Kayıt sistemi açık değil.**`)   

    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kayıtçırol"],
    permLevel: 0
};

exports.help = {
    name: 'kayıtçı-rol',
    description: 'küfrü log ab',
      cooldown: 5      ,
    usage: 'küfürlog'
}