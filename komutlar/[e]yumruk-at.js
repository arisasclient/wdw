const Discord = require("discord.js");
    require('discord-replys')
exports.run = function(client, message) {
  const pinkcodeetiketlenenkisi = message.mentions.users.first();

  if (!pinkcodeetiketlenenkisi)
    return message.replyNoMention(
      "**Lütfen Yumruk Atmak İçin Birini Etiketleyin**"
    );
  var linkler = [
    'https://cdn.discordapp.com/attachments/787720197653397547/827613139637895168/original.gif',
    'https://cdn.discordapp.com/attachments/809027785674719293/876528018582016070/yumruk-atmak_868667.gif',
    'https://cdn.discordapp.com/attachments/809027785674719293/876528030409977956/ALVAREZ.gif',
    'https://cdn.discordapp.com/attachments/809027785674719293/876527990572478494/7days-the-movie-punch.gif',
    'https://cdn.discordapp.com/attachments/809027785674719293/876527990773788752/dean-winchester-punch.gif'
  ]
    let yapılcak = linkler[Math.floor(Math.random()*linkler.length)];
  const pinkcodeembed = new Discord.MessageEmbed()
    .setDescription(
      `${pinkcodeetiketlenenkisi}` +
        ` **${message.author} Sana Yumruk Attı**`
    )
  .setColor("RANDOM")
    .setImage(
      yapılcak
    );
  return message.replyNoMention(pinkcodeembed);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yumrukat","yumruk"],
  permLevel: 0
};
exports.help = {
  name: "yumruk-at",
  description: " Yumruk Atarsınız işte ",
      cooldown: 5      ,
  usage: "-yumruk-at"
};