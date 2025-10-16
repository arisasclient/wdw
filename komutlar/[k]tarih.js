const Discord = require("discord.js")
    require('discord-replys')
const useful = require('useful-tools')
exports.run = async (client, message, args) => {

const tarih = new Date()
message.replyNoMention(useful.tarih(tarih))
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    kategori: "genel"
   };
  
  exports.help = {
    name: 'tarih',
    description: 'Tarihe Bakmanı Sağlar',
        cooldown: 5      ,
    usage: 'tarih'
   }