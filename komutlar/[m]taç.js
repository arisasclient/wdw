const Discord = require("discord.js");
    require('discord-replys')
const ayarlar = require("../ayarlar.json");

exports.run = async (bot, message, args) => {

const pinkcode = new Discord.MessageEmbed()

    .setColor("RED")
    .setDescription(
      `Sunucu tacı bu kişide; <@${message.guild.owner.id}>`
    )
    .setFooter(`Komutu kullanan: ${message.author.tag}`);

return message.replyNoMention(pinkcode).then(msg => {
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kurucu','tac','sahip'],
  permLevel: 0
};

exports.help = {
  name: "taç",
  description: "",
      cooldown: 5      ,
  usage: ""
};