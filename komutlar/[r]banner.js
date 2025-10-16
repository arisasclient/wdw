const fetch = require('node-fetch');
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const db = require('coders.db')
    require('discord-replys')
const { MessageButton } = require('discord-buttons')

exports.run = async (client, message, args) => {
  let dil = db.get(`language.${message.guild.id}`)
  if(!dil) dil = 'turkish'
    const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

    let uid = user.id


    let response = fetch(`https://discord.com/api/v8/users/${uid}`, {
        method: 'GET',
        headers: {
            Authorization: `Bot ${client.token}`
        }
    })

    let receive = ''
    let banner = 'https://cdn.discordapp.com/attachments/829722741288337428/834016013678673950/banner_invisible.gif'

    response.then(a => {
        if (a.status !== 404) {
            a.json().then(data => {
                receive = data['banner']
                console.log(data)

                if (receive !== null) {

                    let response2 = fetch(`https://cdn.discordapp.com/banners/${uid}/${receive}.gif`, {
                        method: 'GET',
                        headers: {
                            Authorization: `Bot ${client.token}`
                        }
                    })
                    let statut = ''
                    response2.then(b => {
                        statut = b.status
                        banner = `https://cdn.discordapp.com/banners/${uid}/${receive}.gif?size=2048`
                        if (statut === 415) {
                            banner = `https://cdn.discordapp.com/banners/${uid}/${receive}.png?size=2048`
                        }
// slm
                    })
                }
            })
        }
    })
if(dil === 'turkish') {
  setTimeout(() => {
  if (!receive) return message.replyNoMention("Bu kullanıcının banneri bulunamadı!")
  if (banner.endsWith('.png?size=2048')) {
      let a1red = new Discord.MessageAttachment()
  .setFile(banner)
      .setName('widowService.png')
      message.replyNoMention(`• **\`${user.tag}\`** adlı üyenin banneri!`, a1red)
  } else if (banner.endsWith('.gif?size=2048')) {
          let a2red = new Discord.MessageAttachment()
  .setFile(banner)
      .setName('widowService.gif');
      message.replyNoMention(`• **\`${user.tag}\`** adlı üyenin banneri!`, a2red)
  }
  }, 1000)
}
  if(dil === 'english') {
    setTimeout(() => {
        if (!receive) return message.replyNoMention("Banner not found for this user!")
        let button = new MessageButton()
          .setLabel('Banner URL')
  .setStyle('url')
  .setURL(banner);
        let embed = new MessageEmbed()
            .setColor("RANDOM")
        .setAuthor(user.tag, user.avatarURL({dynamic:true}))
            .setImage(banner)
        .setFooter(client.user.username, client.user.avatarURL({dynamic:true}))
        message.replyNoMention(embed, button)
    }, 1000)
}
}

// Coderscode <3 || matarelo#3200

exports.conf = {
  aliases: ['banner'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'Banner',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};