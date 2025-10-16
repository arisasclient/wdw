exports.run = (client, message, args) => {
  if (!message.guild) return;
  let db = require("coders.db");
  let Discord = require("discord.js");
  let ayarlar = require("../ayarlar.json");
  require("discord-replys");
  let ses = db.get(`ses.${message.guild.id}.durum`);
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
      `Bir argüman belirtin: \`${prefix}ses-log aç\` | \`${prefix}ses-log kapat\` | \`${prefix}ses-log kanal\``
    );
  if (args[0] === "aç") {
    if (ses) {
      return message.replyNoMention(
        `Ses logu zaten açık. Kapatmak için \`${prefix}ses-log kapat\` yazmanız gerekmekte.`
      );
    }
    db.set(`ses.${message.guild.id}.durum`, true);
    message.replyNoMention(
      `Başarı ile **ses logu** açıldı. Ses log kanalını ayarlamak için \`${prefix}ses-log kanal #kanal\` yazmalısınız.`
    );
    message.react("✅");
  }
  if (args[0] === "kapat") {
    if (!ses) {
      return message.replyNoMention(
        `Ses logu zaten kapalı. Açmak için \`${prefix}ses-log aç\` yazmanız gerekmekte.`
      );
    }
    db.delete(`ses.${message.guild.id}`);
    message.replyNoMention(`**Başarı ile ses logu kapandı.**`);
    message.react("✅");
  }
  if (args[0] === "kanal") {
    if (!ses) {
      return message.replyNoMention(
        `Ses logu kapalı. Açmak için \`${prefix}ses-log aç\` yazmanız gerekmekte.`
      );
    }
    let kanal = message.mentions.channels.first();
    if (!kanal)
      return message.replyNoMention(
        `Geçerli bir kanal belirtin. Örnek: \`${prefix}ses-log kanal #kanal\` yazmanız gerekmekte.`
      );
            db.set(`ses.${message.guild.id}.kanal`, kanal.id)
        message.channel.send(`**Başarı ile ses log kanalı ayarlandı.**`)
              message.react("✅")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["seslog"],
  permLevel: 0
};

exports.help = {
  name: "ses-log",
  description: "küfrü engel ab",
  cooldown: 5,
  usage: "küfürengel"
};
