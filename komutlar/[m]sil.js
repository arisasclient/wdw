const db = require("coders.db"); ///////////wen qwe
const Discord = require("discord.js");
    require('discord-replys')
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.replyNoMention(
      `Bu komutu kullanailmek için Mesajları Yönet yetkisine sahip olmalısın!`
    );

  var selambenxsrow = args.slice(0).join(" ");

  const temizlemesajembed1 = new Discord.MessageEmbed()
    .setDescription(
      "Lütfen Silinecek Mesaj Miktarını Yazın.!  "
    )
    .setTimestamp()
    .setFooter(client.user.username)
    .setColor(0x36393e);
  const temizlemesajembed2 = new Discord.MessageEmbed()
    .setDescription("Sayının içinde harf var!")
    .setTimestamp()
    .setFooter(client.user.username)
    .setColor(0x36393e);

  const temizlemesajembed3 = new Discord.MessageEmbed()
    .setDescription("`14` günden önceki mesajları silemem!")
    .setTimestamp()
    .setFooter(client.user.username)
    .setColor(0x36393e);
if (args[0] > 100) return message.reply("**100** adetten fazla mesaj silemem!")
  const temizlemesajembed4 = new Discord.MessageEmbed()
    .setDescription(
      `${
        args[0]
      } adet mesaj başarıyla silindi!`
    )
    .setTimestamp()
    .setFooter(client.user.username)
    .setColor(0x36393e);

  if (!selambenxsrow) return message.replyNoMention(temizlemesajembed1);
  if (isNaN(selambenxsrow)) return message.replyNoMention(temizlemesajembed2);
  let fetched = await message.channel.messages.fetch({ limit: args[0] });

  message.channel
    .bulkDelete(fetched)
    .catch(error => message.replyNoMention(temizlemesajembed3));

  message.replyNoMention
    (temizlemesajembed4)
    .then(msg => msg.delete({ timeout: 2000, reason: "mesaj silme" }));

  message.delete();
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sil","clear","clean","c"],
  permLevel: 0
};
exports.help = {
      cooldown: 3      ,
  name: "temizle"
};