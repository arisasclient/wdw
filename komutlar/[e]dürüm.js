const Discord = require("discord.js")
    require('discord-replys')
exports.run = async (client, message, args) => {

let durum = new Discord.MessageEmbed()
.setColor(message.member.roles.highest.color)
.setImage("https://cdn.discordapp.com/attachments/792458868931166258/838489878001352754/r-selcuk-se-300200-994236.png")
.setAuthor(message.author.username)
.setDescription(`:tada: Dürümü yedin afiyet olsun!`)

   if(args[0] || !args[0]) return message.replyNoMention(durum)

};

  

  exports.help = {
    name:"dürüm",
    usage:"dürüm",
        cooldown: 5      ,
    description:"dürüm yersiniz."
    }
    
    exports.conf = {
    aliases:[],
    kategori:"genel"
    }