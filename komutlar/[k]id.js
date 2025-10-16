const Discord = require("discord.js");
    require('discord-replys')
exports.run = async (client, message, args) => {
  let kişi = message.mentions.members.first() || message.author;
  message.replyNoMention(`**İstediğiniz Kişinin ID Numarası:** **${kişi.id}**`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:['id'],
  permlevel:0
}
//firex
exports.help = {
  name : "id",
  description:"Birisinin İD Sini Alırsınız",
      cooldown: 5      ,
  usage:"!id"
}