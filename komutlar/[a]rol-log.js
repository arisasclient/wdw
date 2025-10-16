exports.run = (client, message, args) => {
  if (!message.guild) return;
  let db = require("coders.db");
  let Discord = require("discord.js");
  let ayarlar = require("../ayarlar.json");
  require("discord-replys");
  let rol = db.get(`rol.${message.guild.id}.durum`);
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
      `Bir argüman belirtin: \`${prefix}rol-log aç\` | \`${prefix}rol-log kapat\` | \`${prefix}rol-log kanal\``
    );
  if (args[0] === "aç") {
    if (rol) {
      return message.replyNoMention(
        `Rol logu zaten açık. Kapatmak için \`${prefix}rol-log kapat\` yazmanız gerekmekte.`
      );
    }
    db.set(`rol.${message.guild.id}.durum`, true);
    message.replyNoMention(
      `Başarı ile **rol logu** açıldı. Rol log kanalını ayarlamak için \`${prefix}rol-log kanal #kanal\` yazmalısınız.`
    );
    message.react("✅");
  }
  if (args[0] === "kapat") {
    if (!rol) {
      return message.replyNoMention(
        `Rol logu zaten kapalı. Açmak için \`${prefix}rol-log aç\` yazmanız gerekmekte.`
      );
    }
    db.delete(`rol.${message.guild.id}`);
    message.replyNoMention(`**Başarı ile rol logu kapandı.**`);
    message.react("✅");
  }
  if (args[0] === "kanal") {
    if (!rol) {
      return message.replyNoMention(
        `Rol logu kapalı. Açmak için \`${prefix}rol-log aç\` yazmanız gerekmekte.`
      );
    }
    let kanal = message.mentions.channels.first();
    if (!kanal)
      return message.replyNoMention(
        `Geçerli bir kanal belirtin. Örnek: \`${prefix}rol-log kanal #kanal\` yazmanız gerekmekte.`
      );
            db.set(`rol.${message.guild.id}.kanal`, kanal.id)
        message.channel.send(`**Başarı ile rol log kanalı ayarlandı.**`)
              message.react("✅")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rollog"],
  permLevel: 0
};

exports.help = {
  name: "rol-log",
  description: "küfrü engel ab",
  cooldown: 5,
  usage: "küfürengel"
};
