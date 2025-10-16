const Discord = require('discord.js');
const db = require('coders.db')
    require('discord-replys')

exports.run = async (client, message, args) => {
  let lang = db.get(`language.${message.guild.id}`)
  if(!lang) lang = 'turkish'
  if(lang === 'turkish') {
    if(!message.member.permissions.has('MOVE_MEMBERS')) return message.replyNoMention(new Discord.MessageEmbed().setTitle(`**• \`${client.ayarlar.prefix}çek\` kullanmak için, \`Üyeleri Taşı\` İznine sahip olmanız gerekiyor.**`));
if(message.member.voice.channel == undefined) return message.replyNoMention(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setDescription('Sesli kanala girerek dener misin?').setFooter(`Ping: ${client.ws.ping}`, client.user.avatarURL({dynamic:true})))
if(!message.mentions.members.first()) return message.replyNoMention(new Discord.MessageEmbed().setColor('#000001').setTitle('Bir hata oldu!').setDescription('Kullanıcı Etiketleyerek dener misin?'));
if(message.author.id === message.mentions.members.first()) return;
if(message.mentions.members.first().voice.channel == undefined) return message.replyNoMention(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setDescription(`Etiketlediğin ${message.mentions.members.first()} Sesli kanalda yok.`).setFooter(`Ping: ${client.ws.ping}`, client.user.avatarURL({dynamic:true})))
message.guild.members.cache.get(message.mentions.members.first().id).voice.setChannel(message.member.voice.channel.id);
message.react('☑️');
  }
  if(lang === 'english') {
if(!message.member.permissions.has('MOVE_MEMBERS')) return message.replyNoMention(new Discord.MessageEmbed().setTitle(`To use it, you must have the 'Move Members' Permission.`));
if(message.member.voice.channel == undefined) return message.replyNoMention(new Discord.MessageEmbed().setTitle('Error').setDescription('You need to enter the voice channel.'))
if(!message.mentions.members.first()) return message.replyNoMention(new Discord.MessageEmbed().setColor('#000001').setTitle('Error').setDescription('Can you try tagging User?'));
if(message.author.id === message.mentions.members.first()) return;
if(message.mentions.members.first().voice.channel == undefined) return message.replyNoMention(new Discord.MessageEmbed().setTitle('Error').setDescription(`The ${message.mentions.members.first()} you tagged is not on the voice channel.`))
message.guild.members.cache.get(message.mentions.members.first().id).voice.setChannel(message.member.voice.channel.id);
message.react('☑️');
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['move'],
  permLevel: 0
}

exports.help = {
      cooldown: 5      ,
  name: 'çek'
};