const Discord = require('discord.js');
const db = require('coders.db')
    require('discord-replys')

exports.run = async(client, message, args) => {
let dil = db.get(`language.${message.guild.id}`)
if(!dil) dil = 'turkish'
  let avatar = message.guild.iconURL({dynamic:true, size:2048})
      if (avatar.endsWith('.webp?size=2048')) {
      let a = new Discord.MessageAttachment()
      .setFile(avatar)
      .setName('widowService.png');
      message.replyNoMention(a)
    } else if (avatar.endsWith('.gif?size=2048')) {
            let a = new Discord.MessageAttachment()
      .setFile(avatar)
      .setName('widowService.gif');
      message.replyNoMention(a)
    }
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['sunucupp', 'swpp','swicon','servericon','serverpp'],
permLevel: 0
};

exports.help = {
name: 'sunucuresmi',
      cooldown: 5      ,
description: 'sw icon',
usage: 'swico' };