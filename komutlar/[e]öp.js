const Discord = require('discord.js'); 
    require('discord-replys')
exports.run = (client, message , args) => {
	let kullanici = message.mentions.members.first() || message.guild.members.cache.get(args[0])
	if (!kullanici) return message.replyNoMention('Bir kullanıcı belirt.');
  var linkler = [
    'https://cdn.discordapp.com/attachments/809027785674719293/876526863718162432/tumblr_pr9oq48ZJm1slooaa_540.gif',
    'https://cdn.discordapp.com/attachments/809027785674719293/876526863340675152/tumblr_mofeempsen1rwuylqo1_500.gif',
    'https://cdn.discordapp.com/attachments/809027785674719293/876526864242470982/giphy.gif',
    'https://cdn.discordapp.com/attachments/809027785674719293/876526866163466250/tumblr_msha7rhcDY1rvrmano1_500.gif',
    'https://cdn.discordapp.com/attachments/809027785674719293/876526869531463770/tumblr_ncknvpvgYf1rks5xoo1_400.gif',
    'https://cdn.discordapp.com/attachments/809027785674719293/876526879434227762/yagmur-altinda-opusmek_1584025.gif'
  ]
  let yapılcak = linkler[Math.floor(Math.random()*linkler.length)];
	const embed = new Discord.MessageEmbed()
	.setColor(`BLACK`)
	.setDescription(message.author.username+` adlı kullanıcı, ${kullanici.user.username} adlı kullanıcıyı öptü.` )
	.setImage(yapılcak)
  message.replyNoMention(embed)
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
    kategori: 'eğlence',
	permLevel: 0
};

exports.help = {
	name: 'öp',
	description: 'İstediğiniz kişiyi öpersiniz.',
      cooldown: 5      ,
	usage: 'öp'
};