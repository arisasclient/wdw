exports.run = (client, message, args) => {
  if (!message.guild) return;
  let db = require("coders.db");
  let Discord = require("discord.js");
  let ayarlar = require("../ayarlar.json");
  require("discord-replys");
  let kanals = db.get(`kufur.${message.guild.id}.durum`);
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
      `Bir argüman belirtin: \`${prefix}küfür-engel aç\` | \`${prefix}küfür-engel kapat\``
    );
  if (args[0] === "aç") {
    if (kanals) {
      return message.replyNoMention(
        `Küfür engel zaten açık. Kapatmak için \`${prefix}küfür-engel kapat\` yazmanız gerekmekte.`
      );
    }
    db.set(`kufur.${message.guild.id}.durum`, true);
    message.replyNoMention(
      `Başarı ile **küfür engel** açıldı.`
    );
    message.react("✅");
  }
  if (args[0] === "kapat") {
    if (!kanals) {
      return message.replyNoMention(
        `Küfür engel zaten kapalı. Açmak için \`${prefix}küfür-engel aç\` yazmanız gerekmekte.`
      );
    }
    db.delete(`kufur.${message.guild.id}`);
    message.replyNoMention(`**Başarı ile küfür engel kapandı.**`);
    message.react("✅");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfürengel"],
  permLevel: 0
};

exports.help = {
  name: "küfür-engel",
  description: "küfrü engel ab",
  cooldown: 5,
  usage: "küfürengel"
};
