const Discord = require('discord.js');
const db = require('coders.db')
    require('discord-replys')
exports.run = async(client, message) => {
  let dil = db.get(`language.${message.guild.id}`)
  if(!dil) dil = 'turkish'
  if(dil === 'turkish') {
     
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Mustafa Kemal Atatürkü Anıyoruz.')
    .setColor("BLACK")
        .setImage(`https://cdn.discordapp.com/attachments/809027785674719293/1028711693552976042/ataM.gif`)
    return message.replyNoMention(vatan);
  }
  if(dil === 'english') {
          const vatan = new Discord.MessageEmbed()
    .setAuthor('We commemorate Mustafa Kemal Atatürk.')
    .setColor("BLACK")
        .setImage(`https://cdn.discordapp.com/attachments/809027785674719293/1028711693552976042/ataM.gif`)
    return message.replyNoMention(vatan);
  }
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//firex
exports.help = {
  name: 'atatürk',
  description: '',
      cooldown: 5      ,
  usage: ''
};