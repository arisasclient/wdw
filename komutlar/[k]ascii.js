const Discord = require('discord.js')
    require('discord-replys')
const figlet = require('figlet')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async(client, message, args) => {
  
  let yazı = args.slice(0).join(' ')
  if(!yazı) return message.replyNoMention(`**Ascii formatına dönüştürülecek yazıyı yazmalısın. \nDoğru kullanım: w.ascii [Yazı]**`)
  
  figlet(yazı, function (err, data) {
    if(err) {
      message.replyNoMention('Hata oluştu.')
      console.log(err)
    } else {
      const embed = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL({dynamic:true}))
      .setDescription('```'+data+'```')
      .setColor("RANDOM")
    .setFooter(`© 2021 ${client.user.username} | Yapımcı: arisâ#0017`)
      message.replyNoMention(embed)
    }
    
    
  })
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ascii',
  description: '',
      cooldown: 5      ,
  usage: ''
};