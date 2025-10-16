const Discord = require("discord.js");
    require('discord-replys')
const moment = require("moment");
const os = require("os");
const process = require("process");
require("moment-duration-format");
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => { //
    try {
        const samita = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
        let wen = client.users.cache.get(ayarlar.sahip)
        const wensamita = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`${client.user.username} - İstatistikler`, client.user.avatarURL())
        .setDescription(`
        👑 **Yapımcım**
        ${wen} | ${wen.tag} | ${wen.id}
        `)
        .addField(`
        🤖 Bot Hakkında`, `\`\`\`cs
» #Ping: ${client.ws.ping} ms
» Uptime: ${samita}
» #Sunucu Sayısı: ${client.guilds.cache.size.toLocaleString()} 
» Kullanıcı Sayısı: ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}
» #Kanal Sayısı: ${client.channels.cache.size.toLocaleString()}
» Emoji Sayısı: ${client.emojis.cache.size.toLocaleString()}\`\`\``, true)
        .addField(`📑 Versiyonlar`, `\`\`\`cs
» Node.js Versiyonu: 16.2.0
» #Discord.js Versiyonu: v13.0.1
        \`\`\``, true)
        .addField(`💻 Sistem Bilgileri`, `\`\`\`cs
        » #İşletim Sistemi: win32 x64
        » CPU: AMD Ryzen 5 3600 6-Core Processor
        » #RAM kullanımı: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / 16330.09 MB\`\`\`
        `)      
        .setFooter(`${message.author.tag} tarafından istendi.`)
        return message.replyNoMention(wensamita)
    }
catch(err) {
        console.error(err); //firex
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["i", "istatistik"],
      cooldown: 5      ,
    permLevel: 0
};
  
exports.help = {
    name: "istatistik",
    usage: "istatistik"
};