const Discord = require('discord.js')
    require('discord-replys')
exports.run = async(client, message, args) => {
if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.replyNoMention("Yetkiniz Yetmiyor :x:");
   }
    if (!args[0]) return message.replyNoMention("`Bir ID Girmelisin`");
  if (isNaN(args[0])) return message.replyNoMention('ID yalnızca rakamlardan oluşabilir!')
    let kisi = args[0];
    message.guild.members.ban(kisi).then(() => {
        message.replyNoMention(`${kisi} ID'li kullanıcı başarıyla banlandı.`).then(msg => msg.delete({timeout:7500}))
      message.react('✅')
    
    }).catch(err => {
        message.replyNoMention("Bir hata oluştu. Böyle bir kişi yok");
    })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['force-ban'],
  permLevel: 0
};
//firex
exports.help = {
  name: 'forceban',
  description: 'ID ban by Firex',
      cooldown: 5      ,
  usage: 'forceban'
};