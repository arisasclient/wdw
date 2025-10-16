const Discord = require("discord.js");

exports.run = (client, message, args) => {
  // ' Arisa#0007
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.replyNoMention('Yetkiniz bulunmamaktadır.').then(a => a.delete({timeout:3000}))
  
  if (!message.guild.me.hasPermission('MANAGE_CHANNELS'))
    return message.replyNoMention('Yetkim bulunmamakta.').then(a => a.delete({timeout:4500}))

  let channel = message.mentions.channels.first() || message.channel;

  let reason;
  if (!message.mentions.channels.first()) {
    if (args[0]) reason = args.slice(0).join(" ");
  }
  if (message.mentions.channels.first()) {
    if (args[1]) reason = args.slice(1).join(" ");
  }

  let reasonn;
  if (!reason) reasonn = "Herhangi bir neden belirtilmedi.";
  if (reason) reasonn = reason;
  message.channel
    .send(`${channel} kanalında, everyone rolü için mesaj yazma, tepki ekleme izinleri açıldı.`)
    .then(m => m.delete({ timeout: 7000 }));

  let everyone = message.guild.roles.cache.find(a => a.name === "@everyone");
  channel.updateOverwrite(
    everyone,
    { SEND_MESSAGES: true, ADD_REACTIONS: true },
    "Kilit Kaldırıldı by " + message.author.tag
  );
  message.react("✅");
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["unlock","unkilit","un-lock","remove-lock"],
  permLevel: 0
};

exports.help = {
  name: "kilit-aç",
  cooldown: 5
}; // coderscode
