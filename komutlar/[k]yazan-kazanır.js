const Discord = require('discord.js');
    require('discord-replys')
const { delay, randomRange, verify } = require('../util/Util');
const words = ['çikolata', 'vortex', 'odun', 'bomba', 'süt', 'şimşek', 'yıldırım', 'patlat', 'savaş', 'kelime', 'yok et', 'bilmem', 'öldür', 'sonsuzluk', 'gerçek'];

exports.run = async (client, message, args) => {
  
  this.fighting = new Set();
  
  let opponent = message.mentions.users.first() || message.guild.users.cache.get(args[0])
	if (!opponent) return message.replyNoMention("Oynamak istediğin kişiyi etiketlemelisin!")
  
  if (opponent.bot) return message.replyNoMention('Botlar ile oynayamazsın!');
		if (opponent.id === message.author.id) return message.replyNoMention('Kendin ile kapışamassın!');
		if (this.fighting.has(message.channel.id)) return message.replyNoMention('Kanal başına sadece bir meydan okuma gelebilir!');
		this.fighting.add(message.channel.id);
		try {
			await message.channel.send(`${opponent}, bu meydan okumayı kabul ediyor musun? (\`evet\` veya \`hayır\` olarak cevap veriniz.)`);
			const verification = await verify(message.channel, opponent);
			if (!verification) {
				this.fighting.delete(message.channel.id);
				return message.replyNoMention('Meydan okuman reddedildi...');
			}
			await message.channel.send('Hazırlanın kelime geliyor...').then(m => {m.delete(3000)});
			const word = words[Math.floor(Math.random() * words.length)];
			await message.channel.send(`ŞİMDİ \`${word.toUpperCase()}\` YAZ!`);
			await message.channel.send(`_Kelimeyi tamamen küçük harfle yazınız._`);
			const filter = res => [opponent.id, message.author.id].includes(res.author.id) && res.content.toLowerCase() === word;
			const winner = await message.channel.awaitMessages(filter, {
				max: 1,
				time: 30000
			});
			this.fighting.delete(message.channel.id);
			if (!winner.size) return message.channel.send('Kimse kazanmadı, berabere bitti!');
			return message.replyNoMention(`Hızlıymışsın! Tebrikler ${winner.first().author} Kazandın!`);
		} catch (err) {
			this.fighting.delete(message.channel.id);
			throw err;
		}
  
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazı-yarışı', 'ilk-yazan-kazanır','kelime-yarışması'],
  permLevel: 0,
  kategori: "eğlence"
};

exports.help = {
  name: 'yazan-kazanır',
  category: "eğlence",
      cooldown: 5      ,
  description: 'Botun verdiği kelimeyi ilk yazan kazanır oyunu!',
  usage: 'yazan-kazanır [@kullanıcı]'
};