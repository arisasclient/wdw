const Discord = require('discord.js');
    require('discord-replys')
const client = new Discord.Client();

exports.run = (client, message) => {
   message.replyNoMention(' ```Acaba Kazanabilecek Mi?``` ').then(message => {
      var espriler = ['**Tebrikler! Piyangoyu Kazandınız!** :money_with_wings:','**Üzgünüm, Kaybettin.** :unamused:'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'piyango',
  description: 'Acaba Kazanabilecek Misin?',
      cooldown: 5      ,
  usage: 'piyango'
};