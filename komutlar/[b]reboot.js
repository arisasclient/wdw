const {MessageEmbed} = require("discord.js");
    require('discord-replys')
const ayarlar = require('../ayarlar.json')// [package required: discord.js]
exports.run = async (client, message, args, level) => {
  if(message.author.id !== "457481463294722050") return
  // EMBED
  let embed = new MessageEmbed()
  .setColor("BLACK")
  .setThumbnail("https://cdn.discordapp.com/attachments/809027785674719293/839628185288704050/spinner.mov.gif")
  .setDescription("Achtung! Ein notfall tritt auf! Bitte bleib ruhig! Weitere anweisungen folgen!")
  .setTitle("resource restarting..")
  await message.replyNoMention(embed); // send the embed
  // unload all commands before shutting down
  
  console.log("restarting..");

  // you can always leave out this code // (cmd part)
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  }); // end of cmd function

  // shut down the bot
  process.exit(1).then(embed.edit(`Reload success.`))
}; // end of code

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reeboot", "reset", "yenile", "yeniden-başlat","r"],
  permLevel: 7,
    kategori: "yapımcı",
 
};

exports.help = {
  name: "reboot",
  description: "Botu yeniden başlatır.",
  usage: "reboot",
 
};