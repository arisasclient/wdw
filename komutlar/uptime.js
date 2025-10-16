const Discord = require('discord.js')
const db = require('coders.db')
    require('discord-replys')
const fetch = require('node-fetch')
const { MessageButton } = require('discord-buttons')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
      let prefix;
  if (db.has(`prefix_${message.guild.id}`) === true) {
    prefix = db.get(`prefix_${message.guild.id}`)
  }
  if (db.has(`prefix_${message.guild.id}`) === false) {
    prefix = ayarlar.prefix
  }
  let dil = db.get(`language.${message.guild.id}`)
  if(!dil) dil = 'turkish'
  if(dil === 'turkish') {

    //oy vermişse yapılacak işlem
  if(!args[0]) return message.replyNoMention(`Bir argüman belirtin. \`${prefix}uptime ekle\` | \`${prefix}uptime sil\` | \`${prefix}uptime linklerim\``)
      let url = args.slice(1)
if(!url) return message.replyNoMention(`Bir URL belirtin.`)
 var Split = message.content.split(" ");
 let pre = db.get(`premiumMember_${message.author.id}`)
 if (pre) {
if (args[0] == 'ekle') {
  let aşım = db.get(`Sahiplik_${message.author.id}`)
  if (aşım >= 10) return message.replyNoMention('Premium üyeler en fazla 10 URL ekleyebilir.')
  if (!args[1]) return message.replyNoMention(`Bir URL belirtin.`)
  db.add(`Sahiplik_${message.author.id}`, 1);
   db.push(`Projesi_${message.author.id}`, url);
            db.add(`Proje`, 1);
            db.push("Linkler", {
          url: url,
          owner: message.author.id,
          owner2: message.author.tag
        });
        message.replyNoMention(`URL başarıyla listeye eklendi. Uptime başlatılıyor.`).then(msg => msg.delete({timeout: 5000}))
        message.react('✅')
}
else if (args[0] == 'sil') {
  let url = args[1]
  const Linkleri = db.get(`Projesi_${message.author.id}`);
if (!Linkleri) return message.replyNoMention(`Silebileceğiniz bir URL mevcut değil.`)
if(!args[1]) return message.replyNoMention(`Bir URL belirtin.`)
db.delete(`Projesi_${message.author.id}`, url)
db.delete(`Sahiplik_${message.author.id}`)
message.replyNoMention(`URL başarıyla listeden silindi. Uptime durduruldu.`).then(msg => msg.delete({timeout: 5000}))
message.react('✅')
}
else if (args[0] == 'linklerim') {
  const Linkleri = db.get(`Projesi_${message.author.id}`);
  if (!Linkleri) return message.replyNoMention(`Henüz bir link girilmemiş.`)
let bu = new MessageButton()
.setStyle('blurple')
.setLabel('Tıkla!')
.setID('createrUptime');
message.channel.send(`
• Gizlilik nedeniyle linklerinizi sadece siz görebileceksiniz.
• Linklerinizi görmek için aşağıdaki butona tıklayabilirsiniz.
`, bu).then(async function(sent) { 
      sent.createButtonCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => { 
        if (button.id == 'createrUptime') {
          if (message.author.id !== button.clicker.member.user.id) return
          let s = new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
          .setColor('#04FF01')
  .setDescription(
    `Linklerin: \n\n\`` +
      Linkleri.join("\n") +
      `\``
  )
          .setThumbnail(client.user.avatarURL())
          
          await button.reply.think(true)
          await button.reply.edit(s)
        }
      })

})
}
 } else {
  if(args[0] === 'ekle') {
    let aşım = db.get(`Sahiplik_${message.author.id}`)
    if (aşım >= 2) return message.replyNoMention('En fazla 2 URL eklenebilir.')
    if(!args[1]) return message.replyNoMention(`Bir URL belirtin.`)
db.add(`Sahiplik_${message.author.id}`, 1);
   db.push(`Projesi_${message.author.id}`, url);
            db.add(`Proje`, 1);
            db.push("Linkler", {
          url: url,
          owner: message.author.id,
          owner2: message.author.tag
        });
  
  message.replyNoMention(`URL başarıyla listeye eklendi. Uptime başlatılıyor.`).then(msg => msg.delete({timeout: 5000}))
  message.react('✅')
  }
  
  if(args[0] === 'sil') {
          let url = args[1]
                  const Linkleri = db.get(`Projesi_${message.author.id}`);
        if (!Linkleri) return message.replyNoMention(`Silebileceğiniz bir URL mevcut değil.`)
              if(!args[1]) return message.replyNoMention(`Bir URL belirtin.`)
  db.delete(`Projesi_${message.author.id}`, url)
    db.delete(`Sahiplik_${message.author.id}`)
  message.replyNoMention(`URL başarıyla listeden silindi. Uptime durduruldu.`).then(msg => msg.delete({timeout: 5000}))
  message.react('✅')
  }
  if(args[0] === 'linklerim') {
        const Linkleri = db.get(`Projesi_${message.author.id}`);
        if (!Linkleri) return message.replyNoMention(`Henüz bir link girilmemiş.`)
    let bu = new MessageButton()
    .setStyle('blurple')
    .setLabel('Tıkla!')
    .setID('createrUptime');
    message.channel.send(`
• Gizlilik nedeniyle linklerinizi sadece siz görebileceksiniz.
• Linklerinizi görmek için aşağıdaki butona tıklayabilirsiniz.
    `, bu).then(async function(sent) { 
            sent.createButtonCollector(user => user.clicker.user.id == message.author.id).on('collect', (button) => { 
              if (button.id == 'createrUptime') {
                if (message.author.id !== button.clicker.member.user.id) return
                let s = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
                .setColor('#04FF01')
        .setDescription(
          `Linklerin: \n\n\`` +
            Linkleri.join("\n") +
            `\``
        )
                .setThumbnail(client.user.avatarURL())
                
                button.reply.think(true)
                button.reply.edit(s)
              }
            })
      
    })
  }
    }
  }  
}             
exports.conf = {
  aliases: []
}

exports.help = {
  name: 'uptime',
  cooldown: 5
}