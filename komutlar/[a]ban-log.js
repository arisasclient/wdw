exports.run = (client, message, args) => {
  if (!message.guild) return;
  let db = require("coders.db");
  let Discord = require("discord.js");
  let ayarlar = require("../ayarlar.json");
  let { MessageButton } = require('discord-buttons')
  require("discord-replys");
  let ban = db.get(`ban.${message.guild.id}.durum`);
  let prefix;
  if (db.has(`prefix_${message.guild.id}`) === true) {
    prefix = db.get(`prefix_${message.guild.id}`);
  }
  if (db.has(`prefix_${message.guild.id}`) === false) {
    prefix = ayarlar.prefix;
  }
  const s = new Discord.MessageEmbed()
  .setColor('#bb0303')
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
  .setDescription(`<:arisaReddet:936386990935519262> HATA: Bu komutu kullanabilmek için bota "Yönetici" izni vermelisiniz.`);
  const a = new MessageButton()
  .setStyle('url')
  .setURL('https://discord.gg/sSeSmKybwz')
  .setLabel('Daha Fazla Bilgi Edinin');
  if (!message.guild.me.hasPermission('ADMINISTRATOR'))
    return message.channel.send(s, a)
  const member3 = new Discord.MessageEmbed()
    .setColor("#bb0303")
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
    .setDescription(`<:arisaReddet:936386990935519262> HATA: Bu komutu kullanabilmek için "Yönetici" iznine sahip olmalısın.`);
    const g = new MessageButton()
  .setStyle('url')
  .setURL('https://discord.gg/sSeSmKybwz')
  .setLabel('Daha Fazla Bilgi Edinin');
  if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(member3,g);
  if (!args[0])
    return message.replyNoMention(
      `📂 Bir argüman belirtin: \`${prefix}ban-log aç\` | \`${prefix}ban-log kapat\` | \`${prefix}ban-log kanal\``
    );
  if (args[0] === "aç") {
    if (ban) {
      return message.replyNoMention(
        `🔓 Ban logu zaten açık. Kapatmak için \`${prefix}ban-log kapat\` yazmanız gerekmekte.`
      );
    }
    db.set(`ban.${message.guild.id}.durum`, true);
        message.channel.send(`<a:arisa_loading:881697817230463046>`).then(msg => msg.delete({timeout:2000})).then(msg => message.channel.send(`🌠 **Başarıyla ayarlandı, kanalı ayarlamayı unutmayın.**`))
  }
  if (args[0] === "kapat") {
    if (!ban) {
      return message.replyNoMention(
        `Ban logu zaten kapalı. Açmak için \`${prefix}ban-log aç\` yazmanız gerekmekte.`
      );
    }
    db.delete(`ban.${message.guild.id}`);
    db.delete(`ban.${message.guild.id}.kanal`)
        message.channel.send(`<a:arisa_loading:881697817230463046>`).then(msg => msg.delete({timeout:2000})).then(msg => message.channel.send(`🌠 **Başarılı**`))
  }
  if (args[0] === "kanal") {
    if (!ban) {
      return message.replyNoMention(
        `🔒 Ban logu kapalı. Açmak için \`${prefix}ban-log aç\` yazmanız gerekmekte.`
      );
    }
    let kanal = message.mentions.channels.first();
    if (!kanal)
      return message.replyNoMention(
        `🔎 Geçerli bir kanal belirtin. Örnek: \`${prefix}ban-log kanal #kanal\` yazmanız gerekmekte.`
      );
            db.set(`ban.${message.guild.id}.kanal`, kanal.id)
        message.channel.send(`<a:arisa_loading:881697817230463046>`).then(msg => msg.delete({timeout:2000})).then(msg => message.channel.send(`🌠 **Başarılı.**`))

  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banlog"],
  permLevel: 0
};

exports.help = {
  name: "ban-log",
  description: "küfrü engel ab",
  cooldown: 5,
  usage: "küfürengel"
};
