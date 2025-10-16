exports.run = (client, message, args) => {
  if (!message.guild) return;
  let db = require("coders.db");
  let Discord = require("discord.js");
  let ayarlar = require("../ayarlar.json");
  require("discord-replys");
  let kanals = db.get(`link.${message.guild.id}.durum`);
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
      `Bir argüman belirtin: \`${prefix}link-engel aç\` | \`${prefix}link-engel kapat\``
    );
  if (args[0] === "aç") {
    if (kanals) {
      return message.replyNoMention(
        `Link engel zaten açık. Kapatmak için \`${prefix}link-engel kapat\` yazmanız gerekmekte.`
      );
    }
    db.set(`link.${message.guild.id}.durum`, true);
    message.replyNoMention(
      `Başarı ile **link engel** açıldı.`
    );
    message.react("✅");
  }
  if (args[0] === "kapat") {
    if (!kanals) {
      return message.replyNoMention(
        `Link engel zaten kapalı. Açmak için \`${prefix}link-engel aç\` yazmanız gerekmekte.`
      );
    }
    db.delete(`link.${message.guild.id}`);
    message.replyNoMention(`**Başarı ile link engel kapandı.**`);
    message.react("✅");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["linkengel"],
  permLevel: 0
};

exports.help = {
  name: "link-engel",
  description: "küfrü engel ab",
  cooldown: 5,
  usage: "küfürengel"
};
