const Discord = require('discord.js')
    require('discord-replys')
const db = require('coders.db')

exports.run = async (client, message, args) => {
    let kayıt = db.get(`kayıt.${message.guild.id}.durum`)
        if (kayıt) {
    let erkek = db.get(`kayıt.${message.guild.id}.erkek.rol`)
    let kayıtcı = db.get(`kayıt.${message.guild.id}.kayıtcı.rol`)
    let kayıtsız = db.get(`kayıt.${message.guild.id}.kayıtsız.rol`)
    let logKanal = db.get(`kayıt.${message.guild.id}.log`)
    if (logKanal) {
    if(!message.member.roles.cache.get(kayıtcı) && !message.member.hasPermission('ADMINISTRATOR')) return message.replyNoMention(`Bu komudu yalnızca **kayıtçı rolüne sahip** üyeler kullanabilir.`)
    if(!erkek) return message.replyNoMention(`> **Erkek rolü** henüz ayarlanmamış. Tüm sistemleri ayarlayıp tekrar deneyin.`)
    if(!kayıtsız) return message.replyNoMention(`> **Kayıtsız rolü** henüz ayarlanmamış. Tüm sistemleri ayarlayıp tekrar deneyin.`)
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.replyNoMention(`> **Geçerli** bir kullanıcı belirtin.`)
      if(user.bot) return message.replyNoMention(`> Yalnızca **insanları** kayıt edebilirim.`)
                    if(user.roles.highest.position >= message.member.roles.highest.position) return message.replyNoMention(`> Bu kullanıcı senden üstün.`)
          if(user.roles.cache.get(erkek)) return message.replyNoMention("> Kullanıcı zaten kayıtlı.")
        user.roles.add(erkek)
        user.roles.remove(kayıtsız)
       const embed = new Discord.MessageEmbed()
       .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
       .setDescription(`${user} adlı kullanıcı, ${message.author} tarafından **erkek** olarak kayıt edildi.\n\n> Verilen Rol: <@&${erkek}>\n\n> Alınan Rol: <@&${kayıtsız}>`)
       .setThumbnail(user.user.avatarURL({dynamic:true}))
       .setColor('RANDOM')
       .setTimestamp()
       .setFooter(`${client.user.username} Kayıt Sistemi - 2021`, client.user.avatarURL({dynamic:true}))
      message.replyNoMention(embed)
      message.guild.channels.cache.get(logKanal).send(embed)
       message.react("✅")
      } else {
            if(!message.member.roles.cache.get(kayıtcı)) return message.replyNoMention(`Bu komudu yalnızca **kayıtçı rolüne sahip** üyeler kullanabilir.`)
    if(!erkek) return message.replyNoMention(`> **Erkek rolü** henüz ayarlanmamış. Tüm sistemleri ayarlayıp tekrar deneyin.`)
    if(!kayıtsız) return message.replyNoMention(`> **Kayıtsız rolü** henüz ayarlanmamış. Tüm sistemleri ayarlayıp tekrar deneyin.`)
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.replyNoMention(`> **Geçerli** bir kullanıcı belirtin.`)
      if(user.bot) return message.replyNoMention(`> Yalnızca **insanları** kayıt edebilirim.`)
                    if(user.roles.highest.position >= message.member.roles.highest.position) return message.replyNoMention(`> Bu kullanıcı senden üstün.`)
          if(user.roles.cache.get(erkek)) return message.replyNoMention("> Kullanıcı zaten kayıtlı.")
        user.roles.add(erkek)
        user.roles.remove(kayıtsız)
       const embed = new Discord.MessageEmbed()
       .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
       .setDescription(`${user} adlı kullanıcı, ${message.author} tarafından **erkek** olarak kayıt edildi.\n\n> Verilen Rol: <@&${erkek}>\n\n> Alınan Rol: <@&${kayıtsız}>`)
       .setThumbnail(user.user.avatarURL({dynamic:true}))
       .setColor('RANDOM')
       .setTimestamp()
       .setFooter(`${client.user.username} Kayıt Sistemi - 2021`, client.user.avatarURL({dynamic:true}))
      message.replyNoMention(embed)
       message.react("✅")
                  message.guild.owner.send(`**Bilgilendirme**\nSahibi olduğunuz \`${message.guild.name}\` adlı sunucuda başarıyla kayıt işlemi yapıldı fakat log kanalı ayarlanmamış.\nAyarlamak isterseniz, \`w.log-ayarla #kanal\` örneği şeklinde ayarlayabilirsiniz.`)
      }
    } else {
        message.replyNoMention(`> **Kayıt sistemi** açık değil.`)
    }
}

exports.conf = {
    aliases: ['e']
}

exports.help = {
    name: 'erkek'
}