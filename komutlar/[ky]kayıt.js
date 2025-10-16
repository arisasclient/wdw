exports.run = (client, message) => {
    let db = require("coders.db")
    let Discord = require("discord.js")
    require('discord-replys')
    let kayıt = db.get(`kayıt.${message.guild.id}.durum`)
    const member3 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`**HATA** - Bu Sunucuda Yetkili Değilsin.`)
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.replyNoMention(member3)
    if (kayıt) {
      message.replyNoMention(`Kayıt sistemi kapatılacak? Onaylıyor musunuz? [Tike Basın, 30 saniye geçerli olacak.]`).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });

    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        db.delete(`kayıt.${message.guild.id}`)
        db.delete(`kayıt.${message.guild.id}.kayıtcı.rol`)
        db.delete(`kayıt.${message.guild.id}.erkek.rol`)
        db.delete(`kayıt.${message.guild.id}.kadın.rol`)
        db.delete(`kayıt.${message.guild.id}.kanal`)
        message.replyNoMention(`**Başarı ile kayıt sistemi kapandı ve veriler silindi.**`)
      message.react("✅")
        .catch(err => message.replyNoMention('Bir şeyler hatalı. Bot izinleri kontrol edip tekrar deneyin.'))
      }
    });
  });
    } else {
        db.set(`kayıt.${message.guild.id}.durum`, true)
        message.replyNoMention(`Başarı ile **kayıt sistemi** açıldı. Kayıt sistemindeki diğer detayları ayarlayınız. (Erkek Rolü, Kadın Rolü, Kayıtsız Rolü, Kayıt Kanalı) hepsini düzgün şekilde ayarlamazsanız; sistem çalışmaz. Tüm kayıt ayarları için: \`a!yardım kayıt\``)   
      message.react("✅")
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kayit"],
    permLevel: 0
};

exports.help = {
    name: 'kayıt',
    description: 'küfrü engel ab',
      cooldown: 5      ,
    usage: 'küfürengel'
}