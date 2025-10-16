const Discord = require('discord.js');
    require('discord-replys')
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
// Start with the character '!'
const OFFSET = '!'.charCodeAt(0);

exports.run = (bot, message, args) => {
    if (args.length < 1) {
        message.replyNoMention('Ters yapacağım kelimeyi/yazıyı yazmalısın.');
    }
    message.replyNoMention(
        args.join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .reverse().join('')
    );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tersyazı","ters-yazı"],
  permLevel: 0
};

exports.help = {
  name: 'ters',
  description: 'Mesajınızı tersden yazar.',
      cooldown: 5      ,
  usage: 'ters <mesaj>'
};