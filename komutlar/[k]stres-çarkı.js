const Discord = require('discord.js');
    require('discord-replys')


exports.run = async (client, message) => {
    let dönme = await message.replyNoMention({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} bir stres çarkı çevirdi!`,
            image: {
                url: "https://cdn.discordapp.com/attachments/787720197653397547/832943463565230090/WarlikeRevolvingBarebirdbat-max-1mb.gif"
            }
        }
    });

    let bitiş = (Math.random() * (60 - 5 +1)) + 5;
    setTimeout(() => {
        dönme.edit({
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag}, stres çarkın ${bitiş.toFixed(2)} saniye döndü.`
            }
        });
    }, 5 * 1000);
};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["stres"],
  permLevel: 0 
};

exports.help = {
  name: 'stres-çarkı', 
  description: 'Sizin için bir stres çarkı çevirir.',
      cooldown: 5      ,
  usage: 'stresçarkı'
};