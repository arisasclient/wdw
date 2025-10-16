const Discord = require("discord.js")
    require('discord-replys')
exports.run = async (client, message, args) => {

    let acebot = new Discord.MessageEmbed().setColor('#70ff70').setFooter(`Komut ${message.author.tag} tarafından kullanıldı.`).setTimestamp();
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.replyNoMention(`⛔️ Komudu kullanmak için şu izne ihtiyacın var: **\`Manage Messages\`** `);
  
  
  const onayembed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTimestamp()
  .setAuthor("Nuke Komutu")
  .setFooter("Onay için 👍 emojisine, Reddetmek için 👎 emojisine tıklayın.")
  .setDescription("Uyarı! Bu işlemi onaylarsanız kanal silinecek ve bir kopyası oluşturulacaktır.")
  message.replyNoMention(onayembed).then(msg => {
msg.react('👍').then(() => msg.react('👎'));

const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
      message.channel.clone({position: message.channel.position});
      message.channel.delete({reason:`provided by ${message.author.tag}`});
		} else {
			message.channel.send('İptal edildi.');
      msg.delete({timeout:3000})
		}
	})
	.catch(collected => {
		message.replyNoMention('Bir şeyler hatalı. Tekrar deneyin.');
	});
  
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = { 
	name: 'nuke', 
  description: "Bot bulunduğunuz kanalı siler ve yeniden oluşturur.",
  usage: 'nuke'
}
