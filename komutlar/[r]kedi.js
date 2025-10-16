const Discord = require('discord.js');
const superagent = require('superagent');
const db = require('coders.db')
    require('discord-replys')


exports.run = async(client, message, args) => {
  let dil = db.get(`language.${message.guild.id}`)
  if(!dil) dil = 'turkish'
  if(dil === 'turkish') {
    let msg = await message.replyNoMention("Resim aranıyor...");

    let {body} = await superagent 
    .get('https://aws.random.cat/meow');
    if(!{body}) return message.replyNoMention("Bir hata oluştu. Tekrar deneyiniz.")

    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription("**"+message.author.username+"**, İşte bir kedi !")
    .setImage(body.file)
    .setTimestamp()
    message.replyNoMention({embed})


    msg.delete();
  }
    if(dil === 'english') {
    let msg = await message.replyNoMention("Searching picture...");

    let {body} = await superagent 
    .get('https://aws.random.cat/meow');
    if(!{body}) return message.replyNoMention("Something went wrong. Try again.")

    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription("**"+message.author.username+"**, here is a cat !")
    .setImage(body.file)
    .setTimestamp()
    message.replyNoMention({embed})


    msg.delete();
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cat'],
    kategori: 'eğlence',
  permLevel: 0
};

exports.help = {
    name: "kedi",
      cooldown: 10      ,
    description: "Bir kedi resmi gönderir.",
    usage: "<prefix>kedi"
};
