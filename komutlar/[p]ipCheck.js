const IPinfo = require("get-ipinfo");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let data = require('coders.db')
          let pre = data.get(`premiumMember_${message.author.id}`)
    if (!pre) return message.replyNoMention('HATA: Bu komutu yalnızca Premium Üyeler kullanabilir.').then(a => a.delete({timeout:3500}))
  if (!args[0]) return message.replyNoMention("GEÇERLİ BİR IP BELİRTİN").then(a => a.delete({timeout:3500}))
  IPinfo(args[0], function (err, ip) {
    if (err) return message.replyNoMention("Achtung! Ein notfall tritt auf! Bitte bleib ruhig! Weitere anweisungen folgen!").then(a => a.delete({timeout:3500}))
    const mg = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setColor('RANDOM')
    .setDescription(`
**${client.user.username} - IP Sorgu Sistemi**

• IP: **${args[0]}**
• IP Şehri: **${ip.city}**
• IP Hostu: **${ip.hostname}**
• IP Konumu: **${ip.region}**
• IP Kordinatı: **${ip.loc}**
• IP Şirketi: **${ip.org}**
• IP Şehri Posta Kodu: **${ip.postal}**
    `)
    .setThumbnail(client.user.avatarURL())
    message.channel.send(mg).then(a => a.delete({timeout:30000}))
    setTimeout(function() {
      message.react('✅')
    }, 30000)
  });
};

exports.conf = {
  aliases: ["IPGET","IPINFO","IPCHECK","ipCheck","ipcheck","ip-sorgu","ip-sorgulama","ip"],
};

exports.help = {
  name: "ipget",
};
