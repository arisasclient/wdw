const Discord = require('discord.js');
    require('discord-replys')
exports.run = (client, message, args) => {
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.replyNoMention("Bu Komutu Kullanmak İçin İzniniz Yok!");
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.replyNoMention('Lütfen Duyuru Metnini Giriniz.');
  const embed = new Discord.MessageEmbed()
  .setTitle(`${message.guild.name} | Duyuru`)
  .setDescription(`${mesaj}`)
  .setColor('RANDOM')
  .setFooter(`${client.user.username} Duyuru Sistemi`, client.user.avatarURL())
  message.delete();
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//firex
exports.help = {
  name: 'duyuru',
  description: '',
      cooldown: 5      ,
  usage: ''
};