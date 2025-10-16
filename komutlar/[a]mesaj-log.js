exports.run = (client, message, args) => {
  if (!message.guild) return;
  let db = require("coders.db");
  let Discord = require("discord.js");
  let ayarlar = require("../ayarlar.json");
  require("discord-replys");
  let mesaj = db.get(`mesaj.${message.guild.id}.durum`);
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
      `Bir argüman belirtin: \`${prefix}mesaj-log aç\` | \`${prefix}mesaj-log kapat\` | \`${prefix}mesaj-log kanal\``
    );
  if (args[0] === "aç") {
    if (mesaj) {
      return message.replyNoMention(
        `Mesaj logu zaten açık. Kapatmak için \`${prefix}kanal-log kapat\` yazmanız gerekmekte.`
      );
    }
    db.set(`mesaj.${message.guild.id}.durum`, true);
    message.replyNoMention(
      `Başarı ile **mesaj logu** açıldı. Mesaj log kanalını ayarlamak için \`${prefix}mesaj-log kanal #kanal\` yazmalısınız.`
    );
    message.react("✅");
  }
  if (args[0] === "kapat") {
    if (!mesaj) {
      return message.replyNoMention(
        `Mesaj logu zaten kapalı. Açmak için \`${prefix}mesaj-log aç\` yazmanız gerekmekte.`
      );
    }
    db.delete(`mesaj.${message.guild.id}`);
    message.replyNoMention(`**Başarı ile mesaj logu kapandı.**`);
    message.react("✅");
  }
  if (args[0] === "kanal") {
    if (!mesaj) {
      return message.replyNoMention(
        `Mesaj logu kapalı. Açmak için \`${prefix}mesaj-log aç\` yazmanız gerekmekte.`
      );
    }
    let kanal = message.mentions.channels.first();
    if (!kanal)
      return message.replyNoMention(
        `Geçerli bir kanal belirtin. Örnek: \`${prefix}mesaj-log kanal #kanal\` yazmanız gerekmekte.`
      );
    db.set(`mesaj.${message.guild.id}.kanal`, kanal.id);
    message.channel.send(`**Başarı ile mesaj log kanalı ayarlandı.**`);
    message.react("✅");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mesajlog"],
  permLevel: 0
};

exports.help = {
  name: "mesaj-log",
  description: "küfrü engel ab",
  cooldown: 5,
  usage: "küfürengel"
};
