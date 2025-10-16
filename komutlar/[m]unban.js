const Discord = module.require("discord.js");
     require('discord-replys')
module.exports.run = async (client, message, args) => {
 
  const permError = new Discord.MessageEmbed()
    .setColor('#ed455a')
      .setTitle('• Hata: 01 •')
        .setDescription('Bu Komutu Kullanmak İçin "Üyeleri Yasakla" Yetkisine Sahip Olmalısın')
   
  const userError = new Discord.MessageEmbed()
    .setColor('#ed455a')
      .setTitle('• Hata: 02 •')
        .setDescription('Yasağı kaldırmak için bir kullanıcı kimliği girmelisiniz')
 
  const userError2 = new Discord.MessageEmbed()
    .setColor('#ed455a')
      .setTitle('• Hata: 03 •')
        .setDescription("ID'de Harf Kullanılanamaz.")
 
  const userError3 = new Discord.MessageEmbed()
    .setColor('#ed455a')
      .setTitle('• Hata: 04 •')
        .setDescription('```Bu Kullanıcı Yasaklanmamış```')
   
  const levelError = new Discord.MessageEmbed()
    .setColor('#ed455a')
      .setTitle('• Hata: 05 •')
        .setDescription('```Sizinle aynı veya daha yüksek bir role sahip bir üyenin yasağını kaldırmazsınız```')
 
 
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.replyNoMention
        (permError).then
          (message.delete()).then
            (msg => msg.delete({timeout: 5000, reason: "xD"}));
 
  let user = args[0];
    if  (!user) return message.replyNoMention
          (userError).catch(console.error).then
            (message.delete()).then
              (msg => msg.delete({timeout: 5000, reason: "xD"}));
 
  if  (isNaN(args[0])) return message.replyNoMention
        (userError2).catch(console.error).then
          (message.delete()).then
            (msg => msg.delete({timeout: 5000, reason: "xD"}));
 
  if  (user.highestRole >= message.author.highestRole) return message.replyNoMention
          (levelError).then
            (message.delete()).then
              (msg => msg.delete({timeout: 5000, reason: "xD"}));
 
 
  const banList = await message.guild.fetchBans();
 
 // console.log(banList.map(s => s.users.id))
 
  if (!user.id === banList) return message.replyNoMention
      (userError3).then
        (message.delete()).then
          (msg => msg.delete({timeout: 5000, reason: "xD"}));
 
  message.guild.members.unban(user);
message.replyNoMention(`<@!${user}> Adlı Kullanıcının Yasağı Başarıyla Kaldırıldı.`).then(msg => msg.delete({timeout:7500}))
  message.react('✅');
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
        kategori: "Yetkili"
 
  };
 
  exports.help = {
    name: 'unban',
    description: 'İstediğiniz kişinin banını kaldırır.',
        cooldown: 5      ,
    usage: 'unban [kullanıcı] [sebep]'
  };
