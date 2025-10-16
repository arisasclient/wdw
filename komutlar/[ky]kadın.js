exports.run = (client, message, args) => {
    if (!message.guild) return
    let db = require("coders.db")
    let Discord = require("discord.js")
    require('discord-replys')
    let kayıt = db.get(`kayıt.${message.guild.id}.durum`)
    const member3 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`**HATA** - Bu Sunucuda Yetkili Değilsin.`)
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.replyNoMention(member3)
    const member = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`**HATA** - Bir Rol Etiketle. \n\nDoğru Kullanım: a!kadın-rol @Rol`)
    if (kayıt) {
        let rol = message.mentions.roles.first()
        if (!rol) return message.replyNoMention(member)
        db.set(`kayıt.${message.guild.id}.kadın.rol`, rol.id)
        message.replyNoMention(`**Başarı ile kadın rolü ayarlandı.**`)
              message.react("✅")
       
    } else {
        message.replyNoMention(`**Kayıt sistemi açık değil.**`)   

    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kadınrol"],
    permLevel: 0
};

exports.help = {
    name: 'kadın-rol',
    description: 'küfrü log ab',
      cooldown: 5      ,
    usage: 'küfürlog'
}