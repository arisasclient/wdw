const Discord = require('discord.js');
const db = require('coders.db')
    require('discord-replys')
const ms = require("ms");

exports.run = (client, message, args) => {
  let a = db.get(`language.${message.guild.id}`)
  if(!a) a = 'turkish'
        let prefix;
  if (db.has(`prefix_${message.guild.id}`) === true) {
    prefix = db.get(`prefix_${message.guild.id}`)
  }
  if (db.has(`prefix_${message.guild.id}`) === false) {
    prefix = 'a!'
  }
  if(a === 'turkish') {
        let pre = db.get(`premiumMember_${message.author.id}`)
    if (!pre) return message.replyNoMention('HATA: Bu komutu yalnızca Premium Üyeler kullanabilir.').then(a => a.delete({timeout:3500}))
        if (!message.member.hasPermission("MUTE_MEMBERS")) {
        return message.replyNoMention(' **Bu komutu yalnızca Kullanıcıları Sustur Yetkisine Sahip Olanlar Kullanabilir.** ')
    }
let kullanici = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!kullanici) return message.replyNoMention("Lütfen susturulacak kişiyi belirtiniz.")
  if(kullanici.hasPermission("MANAGE_MESSAGES")) return message.replyNoMention("Benden yetkili birini susturamam.");
  if (kullanici.id === message.author.id) return message.replyNoMention("Kendinizi susturamazsınız.");
  
    let süre = args[1]
  if(!süre) return message.replyNoMention(`Lütfen doğru bir zaman dilimi giriniz. Örneğin: **${prefix}vmute @kişi 1s/m/h/d sebep**`);
  let sebep = args[2]
  if (!sebep) return message.replyNoMention(`Lütfen bir sebep giriniz. Örneğin: **${prefix}vmute @kişi 1s/m/h/d sebep**`);
     let embed =  new Discord.MessageEmbed()
              .setAuthor(message.author.tag, message.author.displayAvatarURL)
              .setDescription(`${kullanici}, ${süre} süreliğine ${message.author} tarafından ${sebep} sebebiyle susturuldu!`)
              .setColor("#ffffff");
  kullanici.voice.setMute(true, `Susturan yetkili: ${message.author.tag} - Susturma süresi: ${süre}`)
        .then(() => message.replyNoMention(embed)).catch(console.error);
        setTimeout(() => {
 kullanici.voice.setMute(false,`Süresi dolduğu için susturması kaldırıldı.`)
          let sembed =  new Discord.MessageEmbed()
              .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .setDescription(`${kullanici} üyesinin, ${süre} sürelik susturulması, otomatik olarak kaldırıldı.`)
                .setColor("#ffffff");
        message.replyNoMention(sembed)

    }, ms(süre))
  }
  if(a === 'english') {
        if (!message.member.hasPermission("MUTE_MEMBERS")) {
        return message.replyNoMention(' **These users can be used by those who have the authority to mute.** ')
    }
let kullanici = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!kullanici) return message.replyNoMention("Specify a user.")
  if(kullanici.hasPermission("ADMINISTRATOR")) return message.replyNoMention("I can't silence someone in authority from me.");
  if (kullanici.id === message.author.id) return message.replyNoMention("You cannot silence yourself.");
  
    let süre = args[1]
  if(!süre) return message.replyNoMention(`Please enter a correct time zone: **${prefix}vmute @member 1s/m/h/d reason**`);
  let sebep = args[2]
  if (!sebep) return message.replyNoMention(`Please enter a reason: **${prefix}vmute @kişi 1s/m/h/d reason**`);
     let embed =  new Discord.MessageEmbed()
              .setAuthor(message.author.tag, message.author.displayAvatarURL)
              .setDescription(`${kullanici} has been silenced by ${message.author} for ${sebep} for ${süre}!`)
              .setColor("#ffffff");
  kullanici.voice.setMute(true, `The mute official: ${message.author.tag} - Silencing time: ${süre}`)
        .then(() => message.replyNoMention(embed)).catch(console.error);
        setTimeout(() => {
 kullanici.voice.setMute(false,`Removed mute because it expired.`)
          let sembed =  new Discord.MessageEmbed()
              .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .setDescription(`Suspending ${kullanici} for ${süre} has been automatically removed.`)
                .setColor("#ffffff");
        message.replyNoMention(sembed)

    }, ms(süre))
  }
}
exports.conf = {
      name: 'vmute',
    enabled: true,
    guildOnly: true,
    aliases: ['sesli-mute','voice-mute'],
    permLevel: 0
};

exports.help = {
    name: 'vmute',
    description: 'seslide sustur',
      cooldown: 5      ,
    usage: "vmute"
};