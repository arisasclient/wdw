const { Discord, MessageEmbed } = require('discord.js')
require("discord-replys");
const moment = require('moment')
moment.locale('tr')

exports.run = function(client, message, args) {
 const kisi = message.mentions.users.first() || message.author
  if(!kisi) return message.replyNoMention("Bir kullanıcıyı **etiket** atarak belirtin.")
  if(kisi.bot) return message.replyNoMention("Botların bilgisi alınamaz.")
let x = (kisi.presence.status).replace('dnd', `Rahatsız etmeyin. 🔴`).replace('idle', `Boşta. 🟡`).replace('online', `Çevrimiçi. 🟢`).replace('offline', `Çevrimdışı. ⚪`);
  let baknedicm = {
  web: 'İnternet Tarayıcısı',
  desktop: 'Bilgisayar (Uygulama)',
  mobile: 'Mobil'
}
  let uyy;
if(kisi.presence.status !== 'offline') {
  uyy = `${baknedicm[Object.keys(kisi.presence.clientStatus)[0]]}` } else { uyy = 'Algılanamadı. (Kişi aktif değilse data alınamaz.)' }
 var f =''
 if(kisi.presence.activities.map(a=>a.state)) f=kisi.presence.activities.map(a=>a.state)
 if(kisi.presence.activities.map(a=>a.state) =='') f='Yok'
 let k 
 const m = message.guild.members.cache.find(a=>a.id == kisi.id)
 const embed = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({dynamic:true}))
        .setColor('RANDOM')
        .setDescription(`\`Kullanıcı adı:\` **${kisi.username}**\n
\`Kullanıcı tagı:\` **${kisi.tag}**\n
\`Kullanıcı ID:\` **${kisi.id}**\n
\`Kullanıcı #:\` **${kisi.discriminator}**\n
\`Kullanıcı Cihazı:\` **${uyy}**\n
\`Kullanıcı oluşturulma tarihi:\` **${moment(kisi.createdAt).format("D MMMM YYYY")}**\n
\`Kullanıcı durum:\` **${x}**\n
\`Kullanıcı durum mesajı:\` **${f}**\n
\`Sunucuya girme zamanı:\` **${moment(m.joinedAt).format('D MMMM YYYY')}**`)
        .setTimestamp()        
        .setThumbnail(message.author.avatarURL({dynamic:true}))
        message.replyNoMention(embed)
}




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kullanıcı-bilgi","kullanıcıbilgi","user","kullanıcı","kullanici"],
  permLevel: 0
};
//firex
exports.help = {
  name: 'kb',
};