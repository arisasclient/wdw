const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (
    !message.member.hasPermission("KICK_MEMBERS")
  )
    return message
      .replyNoMention("Bu komutu kullanamazsınız.")
      .then(msg => msg.delete({ timeout: 2500 }));
  let banlogkanal = ayarlar.banlog;
  const member =
    message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!member)
    return message
      .reply("Sunucuda olan geçerli bir kullanıcı belirtin!")
      .then(a => a.delete({ timeout: 3500 }));
  let reason = args.slice(1).join(" ");
  if (!reason) {
    reason = "Belirtilmemiş.";
  }
  if (member.id == message.author.id) return;
  if (member.id == client.user.id) return;
  if (member.roles.highest.position >= message.guild.me.roles.highest.position) return message.replyNoMention('Bu üye atılamaz!')
  if (member.roles.highest.position >= message.member.roles.highest.position) return message.replyNoMention('Bu üye atılamaz!')
  if (message.guild.member(member)) {
    message.guild.members.cache
      .get(member.id)
      .kick({ reason: `Yetkili: ${message.author.tag} | Sebep: ${reason}` });
    const onayEmbed = new Discord.MessageEmbed()
      .setAuthor(
        message.author.tag,
        message.author.avatarURL({ dynamic: true })
      )
      .setColor("RANDOM")
      .setDescription(
        `<@${member.id}> üyesi, ${message.author} tarafından; **${reason}** sebebiyle atıldı.`
      )
      .setFooter(`${client.user.username} - provided by Spectre`);
    message.channel.send(onayEmbed).then(msg => msg.delete({ timeout: 7500 }));
    message.react('✅');
  } else {
message.replyNoMention('Belirtilen üye ya geçersiz, ya da sunucuda bulunmuyor.')
  }
};

exports.conf = {
  aliases: ["at", "KİCK"]
};

exports.help = {
  name: "kick",
  cooldown: 5
};
