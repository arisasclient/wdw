const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
const ai = require("codare.ai")
      require('discord-replys')
exports.run = function(client, message, args) {

  let soru = args.join(' ')
    if(!soru) return message.reply(`Merhabalar! Benimle konuşmak istersen \`w.sor (sözcüklerin)\` örneği gibi konuşabiliriz :)`)
    ai.sor (args.join(' ')).then(res => {  
      const arisa = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
      .setDescription(`${res.replace("Furtsy", "**arisâ#0017**").replace("SevFurtsyili"," ").replace("CodAre", "Widow")}`)
      .setColor("RANDOM")
      message.replyNoMention(arisa)
      .catch(err => message.replyNoMention('API HATASI: '+err))
})
}; 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["8ball","acaba"],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'güncel sor',
      cooldown: 5      ,
  usage: 'sor <soru>'
};

//  if(args.join(' ').toLowerCase() === 'yapımcın kim') return message.channel.send("Beni **'  Arisa 🌙#2012** geliştirdi.")
