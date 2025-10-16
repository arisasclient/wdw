const Discord = require('discord.js');
const db = require('coders.db')
    require('discord-replys')
const { MessageButton } = require('discord-buttons');

exports.run = async (client, message, args) => {
  let dil = db.get(`language.${message.guild.id}`)
  if(!dil) dil = 'turkish'

    const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

    
    const avatar = user.avatarURL({dynamic:true, size:2048});

  if (!avatar) return message.replyNoMention('Bu kullanıcının avatarı bulunamadı.')
    
    if (avatar.endsWith('.webp?size=2048')) {
      let a = new Discord.MessageAttachment()
      .setFile(avatar)
      .setName('widowService.png');
      message.replyNoMention(`• **\`${user.tag}\`** adlı kullanıcının avatarı!`, a)
    } else if (avatar.endsWith('.gif?size=2048')) {
            let a = new Discord.MessageAttachment()
      .setFile(avatar)
      .setName('widowService.gif');
      message.replyNoMention(`• **\`${user.tag}\`** adlı kullanıcının avatarı!`, a)
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pp","profile-photo","av"],
  permLevel: 0
};

exports.help = {
  cooldown: 10,
  name: 'avatar'
};