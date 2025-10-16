exports.run = (client, message, args) => {
  if (!message.guild) return;
  let db = require("coders.db");
  let Discord = require("discord.js");
  let ayarlar = require("../ayarlar.json");
  require("discord-replys");
  let sunucu = db.get(`sunucu.${message.guild.id}.durum`);
  let prefix;
  if (db.has(`prefix_${message.guild.id}`) === true) {
    prefix = db.get(`prefix_${message.guild.id}`);
  }
  if (db.has(`prefix_${message.guild.id}`) === false) {
    prefix = ayarlar.prefix;
  }
  const member3 = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription(`**HATA** - Bu Sunucuda Yetkili Değilsin.`);
  if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.replyNoMention(member3);
  if (!args[0])
    return message.replyNoMention(
      `Bir argüman belirtin: \`${prefix}sunucu-log aç\` | \`${prefix}sunucu-log kapat\` | \`${prefix}sunucu-log kanal\``
    );
  if (args[0] === "aç") {
    if (sunucu) {
      return message.replyNoMention(
        `Sunucu logu zaten açık. Kapatmak için \`${prefix}sunucu-log kapat\` yazmanız gerekmekte.`
      );
    }
    db.set(`sunucu.${message.guild.id}.durum`, true);
    message.replyNoMention(
      `Başarı ile **sunucu logu** açıldı. Sunucu log kanalını ayarlamak için \`${prefix}sunucu-log kanal #kanal\` yazmalısınız.`
    );
    message.react("✅");
  }
  if (args[0] === "kapat") {
    if (!sunucu) {
      return message.replyNoMention(
        `Sunucu logu zaten kapalı. Açmak için \`${prefix}sunucu-log aç\` yazmanız gerekmekte.`
      );
    }
    db.delete(`sunucu.${message.guild.id}`);
    message.replyNoMention(`**Başarı ile sunucu logu kapandı.**`);
    message.react("✅");
  }
  if (args[0] === "kanal") {
    if (!sunucu) {
      return message.replyNoMention(
        `Sunucu logu kapalı. Açmak için \`${prefix}sunucu-log aç\` yazmanız gerekmekte.`
      );
    }
    let kanal = message.mentions.channels.first();
    if (!kanal)
      return message.replyNoMention(
        `Geçerli bir kanal belirtin. Örnek: \`${prefix}sunucu-log kanal #kanal\` yazmanız gerekmekte.`
      );
            db.set(`sunucu.${message.guild.id}.kanal`, kanal.id)
        message.channel.send(`**Başarı ile sunucu log kanalı ayarlandı.**`)
              message.react("✅")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunuculog"],
  permLevel: 0
};

exports.help = {
  name: "sunucu-log",
  description: "küfrü engel ab",
  cooldown: 5,
  usage: "küfürengel"
};
