exports.run = (client, message, args) => {
  if (!message.guild) return;
  let db = require("coders.db");
  let Discord = require("discord.js");
  let ayarlar = require("../ayarlar.json");
  require("discord-replys");
  let emoji = db.get(`emoji.${message.guild.id}.durum`);
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
      `Bir argüman belirtin: \`${prefix}emoji-log aç\` | \`${prefix}emoji-log kapat\` | \`${prefix}emoji-log kanal\``
    );
  if (args[0] === "aç") {
    if (emoji) {
      return message.replyNoMention(
        `Emoji logu zaten açık. Kapatmak için \`${prefix}emoji-log kapat\` yazmanız gerekmekte.`
      );
    }
    db.set(`emoji.${message.guild.id}.durum`, true);
        message.channel.send(`<a:arisa_loading:881697817230463046>`).then(msg => msg.delete({timeout:2000})).then(msg => message.channel.send(`**Başarılı.**`))
  }
  if (args[0] === "kapat") {
    if (!emoji) {
      return message.replyNoMention(
        `Emoji logu zaten kapalı. Açmak için \`${prefix}emoji-log aç\` yazmanız gerekmekte.`
      );
    }
    db.delete(`emoji.${message.guild.id}`);
        message.channel.send(`<a:arisa_loading:881697817230463046>`).then(msg => msg.delete({timeout:2000})).then(msg => message.channel.send(`**Başarılı.**`))
  }
  if (args[0] === "kanal") {
    if (!emoji) {
      return message.replyNoMention(
        `Emoji logu kapalı. Açmak için \`${prefix}emoji-log aç\` yazmanız gerekmekte.`
      );
    }
    let kanal = message.mentions.channels.first();
    if (!kanal)
      return message.replyNoMention(
        `Geçerli bir kanal belirtin. Örnek: \`${prefix}emoji-log kanal #kanal\` yazmanız gerekmekte.`
      );
            db.set(`emoji.${message.guild.id}.kanal`, kanal.id)
        message.channel.send(`<a:arisa_loading:881697817230463046>`).then(msg => msg.delete({timeout:2000})).then(msg => message.channel.send(`**Başarılı.**`))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emojilog"],
  permLevel: 0
};

exports.help = {
  name: "emoji-log",
  description: "küfrü engel ab",
  cooldown: 5,
  usage: "küfürengel"
};
