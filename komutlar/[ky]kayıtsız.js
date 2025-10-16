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
        .setDescription(`**HATA** - Bir Rol Etiketle. \n\nDoğru Kullanım: w.kayıtsız-rol @Rol`)
    if (kayıt) {
        let rol = message.mentions.roles.first()
        if (!rol) return message.replyNoMention(member)
        db.set(`kayıt.${message.guild.id}.kayıtsız.rol`, rol.id)
        message.replyNoMention(`**Başarı ile kayıtsız rolü ayarlandı.**`)
              message.react("✅")
       
    } else {
       message.replyNoMention(`**Kayıt sistemi açık değil.**`)   

    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kayıtsızrol"],
    permLevel: 0
};

exports.help = {
    name: 'kayıtsız-rol',
    description: 'küfrü log ab',
      cooldown: 5      ,
    usage: 'küfürlog'
}