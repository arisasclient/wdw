exports.run = (client, message, args) => {
  if (!message.guild) return;
  let db = require("coders.db");
  let Discord = require("discord.js");
  let ayarlar = require("../ayarlar.json");
  require("discord-replys");
  let kanals = db.get(`kanal.${message.guild.id}.durum`);
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
      `Bir argüman belirtin: \`${prefix}kanal-log aç\` | \`${prefix}kanal-log kapat\` | \`${prefix}kanal-log kanal\``
    );
  if (args[0] === "aç") {
    if (kanals) {
      return message.replyNoMention(
        `Kanal logu zaten açık. Kapatmak için \`${prefix}kanal-log kapat\` yazmanız gerekmekte.`
      );
    }
    db.set(`kanal.${message.guild.id}.durum`, true);
    message.replyNoMention(
      `Başarı ile **kanal logu** açıldı. Kanal log kanalını ayarlamak için \`${prefix}kanal-log kanal #kanal\` yazmalısınız.`
    );
    message.react("✅");
  }
  if (args[0] === "kapat") {
    if (!kanals) {
      return message.replyNoMention(
        `Kanal logu zaten kapalı. Açmak için \`${prefix}kanal-log aç\` yazmanız gerekmekte.`
      );
    }
    db.delete(`kanal.${message.guild.id}`);
    message.replyNoMention(`**Başarı ile kanal logu kapandı.**`);
    message.react("✅");
  }
  if (args[0] === "kanal") {
    if (!kanals) {
      return message.replyNoMention(
        `Kanal logu kapalı. Açmak için \`${prefix}kanal-log aç\` yazmanız gerekmekte.`
      );
    }
    let kanal = message.mentions.channels.first();
    if (!kanal)
      return message.replyNoMention(
        `Geçerli bir kanal belirtin. Örnek: \`${prefix}kanal-log kanal #kanal\` yazmanız gerekmekte.`
      );
            db.set(`kanal.${message.guild.id}.kanal`, kanal.id)
        message.channel.send(`**Başarı ile kanal log kanalı ayarlandı.**`)
              message.react("✅")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kanallog"],
  permLevel: 0
};

exports.help = {
  name: "kanal-log",
  description: "küfrü engel ab",
  cooldown: 5,
  usage: "küfürengel"
};
