const Discord = require("discord.js")
    require('discord-replys')

exports.run = async (client, message, args) => {
  
  const fbi = new Discord.MessageEmbed()
  .setColor("RED")
  .setImage("https://media1.giphy.com/media/QUY2pzDAKVpX3QacCg/200.gif")
  .setTitle("FBİ!")
  message.replyNoMention(fbi)
}


exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['fbi-gif'],
  permLevel: 0
};
//firex
exports.help = {
  name: "fbi",
  description: "FBi gif atar",
      cooldown: 5      ,
  usage:"!fbi"
}