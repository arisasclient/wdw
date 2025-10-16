const Discord = require('discord.js')
const db = require('coders.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
    let ban = db.get(`foto.${message.guild.id}.durum`);
    let prefix;
    if (db.has(`prefix_${message.guild.id}`) === true) {
      prefix = db.get(`prefix_${message.guild.id}`);
    }
    if (db.has(`prefix_${message.guild.id}`) === false) {
      prefix = ayarlar.prefix;
    }
    let pre = db.get(`premiumMember_${message.author.id}`)
    if (!pre) return message.replyNoMention('HATA: Bu komutu yalnızca Premium Üyeler kullanabilir.').then(x => x.delete({timeout:3500}))
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.replyNoMention('HATA: Bu komutu kullanabilmek için Yönetici yetkisine sahip olmalısınız.')
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.replyNoMention('HATA: Bu komutu kullanabilmek için bana Yönetici izni vermelisiniz.')
    if (!args[0])
    return message.replyNoMention(
      `📂 Bir argüman belirtin: \`${prefix}medya-log aç\` | \`${prefix}medya-log kapat\` | \`${prefix}medya-log kanal\``
    );
    if (args[0] === "aç") {
        if (ban) {
          return message.replyNoMention(
            `🔓 Fotoğraf logu zaten açık. Kapatmak için \`${prefix}medya-log kapat\` yazmanız gerekmekte.`
          );
        }
        db.set(`foto.${message.guild.id}.durum`, true);
            message.channel.send(`<a:arisa_loading:881697817230463046>`).then(msg => msg.delete({timeout:2000})).then(msg => message.channel.send(`🌠 **Başarıyla ayarlandı, kanalı ayarlamayı unutmayın.**`))
      }
      if (args[0] === "kapat") {
        if (!ban) {
          return message.replyNoMention(
            `Fotoğraf logu zaten kapalı. Açmak için \`${prefix}medya-log aç\` yazmanız gerekmekte.`
          );
        }
        db.delete(`foto.${message.guild.id}.durum`);
        db.delete(`foto.${message.guild.id}.kanal`)
            message.channel.send(`<a:arisa_loading:881697817230463046>`).then(msg => msg.delete({timeout:2000})).then(msg => message.channel.send(`🌠 **Başarılı**`))
      }
      if (args[0] === "kanal") {
        if (!ban) {
          return message.replyNoMention(
            `🔒 Fotoğraf logu kapalı. Açmak için \`${prefix}medya-log aç\` yazmanız gerekmekte.`
          );
        }
        let kanal = message.mentions.channels.first();
        if (!kanal)
          return message.replyNoMention(
            `🔎 Geçerli bir kanal belirtin. Örnek: \`${prefix}medya-log kanal #kanal\` yazmanız gerekmekte.`
          );
                db.set(`foto.${message.guild.id}.kanal`, kanal.id)
            message.channel.send(`<a:arisa_loading:881697817230463046>`).then(msg => msg.delete({timeout:2000})).then(msg => message.channel.send(`🌠 **Başarılı.**`))
      }
}

exports.conf = {
    aliases: ["media-log","foto-log","medyalog"]
}

exports.help = {
    name: "medya-log",
    cooldown: 5
}