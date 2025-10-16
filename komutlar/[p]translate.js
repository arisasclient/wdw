const Discord = require('discord.js')
const trans = require('translate-google')
const db = require('coders.db')

exports.run = async (client, message, args) => {
            let pre = db.get(`premiumMember_${message.author.id}`)
    if (!pre) return message.replyNoMention('HATA: Bu komutu yalnızca Premium Üyeler kullanabilir.').then(a => a.delete({timeout:3500}))
var langs = [
    'auto',
    'af',
    'sq',
    'am',
    'ar',
    'hy',
    'az',
    'eu',
    'be',
    'bn',
    'bs',
    'bg',
    'ca',
    'ceb',
    'ny',
    'zh-cn',
    'zh-tw',
    'co',
    'hr',
    'cs',
    'da',
    'nl',
    'en',
    'eo',
    'et',
    'tl',
    'fi',
    'fr',
    'fy',
    'gl',
    'ka',
    'de',
    'el',
    'gu',
    'ht',
    'ha',
    'haw',
    'iw',
    'hi',
    'hmn',
    'hu',
    'is',
    'ig',
    'id',
    'ga',
    'it',
    'ja',
    'jw',
    'kn',
    'kk',
    'km',
    'ko',
    'ku',
    'ky',
    'lo',
    'la',
    'lv',
    'lt',
    'lb',
    'mk',
    'mg',
    'ms',
    'ml',
    'mt',
    'mi',
    'mr',
    'mn',
    'my',
    'ne',
    'no',
    'ps',
    'fa',
    'pl',
    'pt',
    'ma',
    'ro',
    'ru',
    'sm',
    'gd',
    'sr',
    'st',
    'sn',
    'sd',
    'si',
    'sk',
    'sl',
    'so',
    'es',
    'su',
    'sw',
    'sv',
    'tg',
    'ta',
    'te',
    'th',
    'tr',
    'uk',
    'ur',
    'uz',
    'vi',
    'cy',
    'xh',
    'yi',
    'yo',
    'zu'
];
    if (args[0] == 'fromDE') {
      trans(args.slice(1).join(' '), {from: 'de', to: 'tr'}).then(res => {
    let mmg = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
    .setColor('RANDOM')
    .setDescription(`
• Das Wort, das Sie abgefragt haben: **${args.slice(1).join(' ')} **

• der Ausgang: **${res}**
    `)
    .setFooter('Google Translate Aracılığı İle. x spectre', client.user.avatarURL())
    message.replyNoMention(mmg)
  }).catch(err => console.error(err))
      return
  }
  if (args[0] == 'fromEN') {
      trans(args.slice(1).join(' '), {from: 'en', to: 'tr'}).then(res => {
    let mmg = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
    .setColor('RANDOM')
    .setDescription(`
• The word which is you have queryied: **${args.slice(1).join(' ')} **

• output: **${res}**
    `)
    .setFooter('Google Translate Aracılığı İle. x spectre', client.user.avatarURL())
    message.replyNoMention(mmg)
  }).catch(err => console.error(err))
  } else {
  trans(args.slice(0).join(' '), {from: 'auto', to: 'auto'}).then(res => {
    let mmg = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
    .setColor('RANDOM')
    .setDescription(`
• Sorgulanan Kelime: ${args.slice(0).join(' ')} 

• Çıktı: **${res}**
    `)
    .setFooter('Google Translate Aracılığı İle.', client.user.avatarURL())
    message.replyNoMention(mmg)
  }).catch(err => console.error(err))
  }
}

exports.conf = {
  aliases: ['çeviri','çevir','trans']
}

exports.help = {
  name: "translate"
}