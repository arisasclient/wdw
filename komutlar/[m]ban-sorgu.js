const Discord = require('discord.js');
    require('discord-replys')
exports.run = (client, message, args) => {
	if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kullanabilirsiniz!');
  
  if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.replyNoMention("Yetkiniz Yetmiyor ");
  }

 //Bunu isterseniz açabilirsiniz. Kimselerin kullanacağını belirtirsiniz rollerin adını   if(message.member.roles.some(r=>["Kurucu"].includes(r.name)) ) {  
    let kullanici = args[0];
    if (!kullanici) return message.replyNoMention("Banlanan Bir kullanıcının ID'sini belirtmen gerek")
   try { message.guild.fetchBans()
        .then(bans => {
            if (!bans.has(kullanici)) {
                return message.replyNoMention(`Bu kullanıcı banlanmamış.`)
            }
        })
    message.guild.fetchBan(kullanici).then(({ user, reason }) => {

const Embed = new Discord.MessageEmbed()
 .setColor('#FFD100')
.setAuthor(`${client.user.username} - Ban Sorgulama`, client.user.avatarURL())
.setDescription(`${user.tag} adlı kullanıcının ban nedeni: \n\n**${reason || "Neden Belirtilmemiş"}**`)
message.replyNoMention(Embed)
    })
       } catch (e) {
         return message.channel.send('Botun izinlerini & rollerini kontrol edip tekrar deneyin. (!)')
       }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bansorgulama','bansorgu','ban-sorgulama','BANSORGULAMA','ban-sorgu'],
    permLevel: 0
};

exports.help = {
    name: 'bansorgulama',
    description: 'Ban sorgulama yaparsınız',
      cooldown: 5      ,
    usage: 'bansorgulama'
};