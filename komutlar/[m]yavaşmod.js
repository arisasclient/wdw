const Discord = require('discord.js');//Manyak*
const db = require('coders.db')
    require('discord-replys')
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {
      let prefix;
  if (db.has(`prefix_${message.guild.id}`) === true) {
    prefix = db.get(`prefix_${message.guild.id}`)
  }
  if (db.has(`prefix_${message.guild.id}`) === false) {
    prefix = ayarlar.prefix
  }
  let lang = db.get(`language.${message.guild.id}`)
if(!lang) lang = 'turkish'
  if(lang === 'turkish') {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.replyNoMention('Bu komutu kullanmak için MESAJLARI YÖNET yetkisine sahip olmalısın.')
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`Doğru kullanım: \` ${prefix}slowmode [0/120]\``)//firex
                .setColor("RANDOM")
                .setTimestamp()
            message.replyNoMention({embed})
            return
          }
if (limit > 120) {
    return message.replyNoMention(new Discord.MessageEmbed().setDescription("Süre limiti maksimum **120** saniye olabilir.").setColor("#36393F"));
}
    message.react('☑️');
    message.replyNoMention(new Discord.MessageEmbed().setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`).setColor("#36393F"));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})
  }
  if(lang === 'english') {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.replyNoMention('You must have MANAGE MESSAGES privilege to use this command.')
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`True use: \` ${prefix}slowmode [0/120]\``)//firex
                .setColor("RANDOM")
                .setTimestamp()
            message.replyNoMention({embed})
            return
          }
if (limit > 120) {
    return message.replyNoMention(new Discord.MessageEmbed().setDescription("The time limit can be maximum **120** seconds.").setColor("#36393F"));
}
    message.react('☑️');
    message.replyNoMention(new Discord.MessageEmbed().setDescription(`The write time limit is set to **${limit}** seconds.`).setColor("#36393F"));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})
  }
};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 3
};

exports.help = {
  name: 'yavaş-mod',
  description: 'Sohbete yazma sınır (süre) ekler.',
      cooldown: 5      ,
  usage: 'yavaş-mod [1/120]',
};
