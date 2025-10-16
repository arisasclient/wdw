const Discord = require("discord.js");
    require('discord-replys')
exports.run = (client, message, args) => {
  const engin = new Discord.MessageEmbed()
    .setDescription("Saat şu an ↓")
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`→`)
  message.replyNoMention(engin);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
      cooldown: 5      ,
  name:"saat"
}