const fs=require('fs');
const Discord=require("discord.js");
require('discord-replys');
const client = new Discord.Client()
const db = require('coders.db')
const chalk = require("chalk");
const moment = require("moment");
const ayarlar=require("./ayarlar.json");
const express = require('express');
const fetch = require("node-fetch");

client.cooldowns = new Discord.Collection()
/////
const app = express()

client.login("ODU5MTA0MDgwMTMxNzg0NzA0.G5J6Yw.tfImer_tUGiL9swbp-_bs0EDasyUQHA9AX7AIw")

setInterval(() => {
  const Linkler = db.get("Linkler");
  if (!Linkler) return;
  const De = Linkler.map(Revenge => Revenge.url);
  De.forEach(Link => {
    try {
      fetch(Link);
    } catch (e) {
      console.log(e);
    }
  });
  console.log(
    `| ${db.get("Proje") || 1} Proje Hostlandı`
  );
}, 60000);

client.on("message", message => {
   let client = message.client;
    if (!message.guild) return
  if (message.author.bot) return;
  if (message.author.id == '885894999009542205') return;
    let prefix;
  if (db.has(`prefix_${message.guild.id}`) === true) {
    prefix = db.get(`prefix_${message.guild.id}`)
  }
  if (db.has(`prefix_${message.guild.id}`) === false) {
    prefix = ayarlar.prefix
  }
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if(cmd && cmd.help.name !== 'bakım-modu') {
  const neblmölçmedimikamk = require('coders.db').get(client.user.id);
  if(neblmölçmedimikamk == true) {
  var DURATION = require('humanize-duration');
  const chimped = db.get(client.user.id+':)');
  var TIMESTAMP = Date.now() - chimped.time;
  var RESULT = DURATION(TIMESTAMP, { language: 'tr', round: true, conjunction: ', ', serialComma: false });
  return message.react('❌');
  };
  };
  if (cmd) {
        if (client.cooldowns.has(`${command}_${message.author.id}`)) {
        const finish = client.cooldowns.get(`${command}_${message.author.id}`)
        const date = new Date();
        const kalan = (new Date(finish - date).getTime() / 1000).toFixed(2);
        if (db.has(`${command}_${message.author.id}`)) {
        let dataget = db.get(`dahaOnceSorduMu_${message.author.id}`)
        if (dataget) {
            return
          } else {
           return message.replyNoMention(`<:arisaReddet:936386990935519262> ${message.author}, \`${command}\` adlı komutu tekrar kullanabilmek için \`${kalan} saniye\` beklemek zorundasınız.\nBu mesaj tek seferliktir. Önlem amaçlı süre bitene kadar bu mesaj tekrar **gönderilmeyecektir.** Yani bot cevap vermeyecektir.`)
           && db.set(`dahaOnceSorduMu_${message.author.id}`, true)
          }
        }
    };
    const finish = new Date();
    finish.setSeconds(finish.getSeconds() + cmd.help.cooldown);
    cmd.run(client, message, params);
    if (cmd.help.cooldown > 0) {
        client.cooldowns.set(`${command}_${message.author.id}`, finish);
        db.set(`${command}_${message.author.id}`, finish)
        setTimeout(() => {
          client.cooldowns.delete(`${command}_${message.author.id}`);
          db.delete(`${command}_${message.author.id}`)
          db.delete(`dahaOnceSorduMu_${message.author.id}`)
        }, cmd.help.cooldown * 1000);
      }
  }
})

const languages = {
   turkish: {},
   english: {},
   france: {}
}

global.GetLangText = async (guild, txt) => languages[db.get(`language.${guild.id}`) || "turkish"][txt]

client.on("ready", () => {
console.log ('_________________________________________');
  console.log (`Kullanıcı İsmi     : ${client.user.username}`);
  console.log (`Sunucular          : ${client.guilds.cache.size.toLocaleString()} Sunucu`);
  console.log (`Kullanıcılar       : ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı`);
  console.log (`Komut Sayısı       : ${client.commands.size} Komut Var`);
  console.log (`Prefix             : ${ayarlar.prefix}`);
  console.log (`Durum              : ${client.user.presence.status}!`);
  console.log (`Kuruluş Tarihi     :${moment(client.user.createdAt).format(" DD MMMM YYYY dddd (hh:mm:ss)")}`);
  console.log (`Ram Kullanımı      : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
  console.log (`Aktiflik Durumu    : Aktif!`);
  console.log ('_________________________________________');
  var oynuyor = [
    `• ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Kullanıcı!`,
    `• ${client.guilds.cache.size.toLocaleString()} Sunucu!`,
    `• ${client.user.username} - Maksimum Performans!`,
    `• Premium Sistemleri Yayında!`,
    `• w.yardım | w.sor`,
    `• w.yardım premium`,
    `• w.uptime`,
    `• w.yardım talep`,
    `• Talep Sistemi Getirildi!`
  ]
      setInterval(function() {
          let yapılcak = oynuyor[Math.floor(Math.random()*oynuyor.length)];
  client.user.setPresence({ activity: { name: yapılcak , type: 'STREAMING', url: "https://twitch.tv/twitch"}, status: 'dnd' })
        console.log('Setting name "Activity Status" has been completed.')
                }, 2 * 2500);
})

client.on('message', async message => {
  let ai = require('codare.ai')
  if(message.author.bot) return
  if (!message.content.startsWith('widow')) return;
  let aarg = message.content.split(" ").slice(6);
if (message.content.startsWith('widow')) {
  ai.sor(aarg).then(res => message.replyNoMention(res.replace("Furtsy", "**Widow.**").replace("SevFurtsyili"," ").replace("CodAre", "Widow").replace('arissa kimdir?','').replace(`Bitki mahsülü.`,`Benimle mi konuşmak istiyorsun ${message.author}, olur konuşalım :blush:`)))
}
})

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.on('message', async message => {
  if(message.channel.type == 'dm') {
    let cu = client.channels.cache.get('809027785674719293')
    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
    .setTitle('Bota Özel Mesaj Gönderildi.')
    .setDescription(`Gönderen kişi: **${message.author.tag} | ${message.author.id} | ${message.author}**\n\nGönderilen mesaj: ${message}`)
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL())
    cu.send(`@everyone`, embed)
    console.log(`özel mesaj |`, message)
  }
})

client.on('guildMemberAdd', async member => {
  if (member.guild.id == '809027785187262504') {
    member.roles.add('809027785196568588')
  }
}) 

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} adet komut yüklemeye hazırlanılıyor.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut ismi: ${props.help.name.toUpperCase()}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

  
client.yetkiler = message => {
  if(!message.guild) {
	return; }
  let permlvl = -ayarlar.varsayilanperm  ;
  if(message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if(message.member.hasPermission("KICK_MEMBERS")) permlvl = 2;
  if(message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
  if(message.member.hasPermission("MANAGE_GUILD")) permlvl = 4;
  if(message.member.hasPermission("ADMINISTRATOR")) permlvl = 5;
  if(message.author.id === message.guild.ownerID) permlvl = 6;
  if(message.author.id === ayarlar.sahip) permlvl = 7;
  return permlvl;
};

client.on('message', message => {
    let prefix;
  if (db.has(`prefix_${message.guild.id}`) === true) {
    prefix = db.get(`prefix_${message.guild.id}`)
  }
  if (db.has(`prefix_${message.guild.id}`) === false) {
    prefix = ayarlar.prefix
  }
   if (message.content.includes(`<@859104080131784704>`)){ const mg = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({dynamic:true})).setColor('RANDOM').setDescription(`:flag_tr: **Merhaba, yardım panelimi görmek için** \`${prefix}yardım\` **yazmanız yeterlidir.**\n:flag_us: **Hello, just type \`${prefix}help\` for my help panel.**`); return message.replyNoMention(mg) }
   if (message.content.includes(`<@!859104080131784704>`)){ const mg = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({dynamic:true})).setColor('RANDOM').setDescription(`:flag_tr: **Merhaba, yardım panelimi görmek için** \`${prefix}yardım\` **yazmanız yeterlidir.**\n:flag_us: **Hello, just type \`${prefix}help\` for my help panel.**`); return message.replyNoMention(mg) }
    if (message.author.id == '457481463294722050') {
      if (message.content.startsWith('polat-şarkı')) {
        let ays = new Discord.MessageAttachment()
        .setFile('https://cdn.discordapp.com/attachments/928351188603265055/938470825143730287/Y2Mate.is_-_Batuflex_ft._Lvbel_C5_-_Gonder_Gelsin_Picking_Audio-YZUSzLuy0nw-128k-1643819252387.mp3')
        .setName('polat&âri.mp3')
        message.replyNoMention('Al bakalım :)', ays)
      }
    }
});

const logs = require('discord-logs');
logs(client)

client.on('guildMemberAdd', async (member) => {
  if (member.user.bot) return
  let data1 = db.get(`autoRole&${member.guild.id}`)
  if (data1) {
    let role = db.get(`autoRoleRole&${member.guild.id}`)
    let channel = db.get(`autoRoleChannel&${member.guild.id}`)
    if (!role) return
    if (!channel) return
    member.roles.add(role)
    member.guild.channels.cache.get(channel).send(`${member} | \`${member.user.tag}\` üyesi sunucumuza katıldı! Toplamda **${member.guild.memberCount}** kişiyiz!`)
  }
})

client.on("rolePermissionsUpdate", async (role, oldPermissions, newPermissions) => {
    let entry = await role.guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first())
let user = client.users.cache.get(entry.executor.id)
        let i = db.get(`rol.${role.guild.id}.durum`);
        let y = db.get(`rol.${role.guild.id}.kanal`);
   if(!y) return
  if (i) {
               const embed = new Discord.MessageEmbed().setColor(role.guild.me.displayHexColor).setAuthor(role.guild.name, role.guild.iconURL({ dynamic: true })).setDescription(`${role.name} adlı rolün izinleri ${user} tarafından değiştirildi.\nEski İzinler: ${oldPermissions} =>\nYeni İzinler:${newPermissions}`).setThumbnail(user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
  }
});

client.on("guildBoostLevelUp", (guild, oldLevel, newLevel) => {
        let i = db.get(`sunucu.${oldLevel.guild.id}.durum`);
        let y = db.get(`sunucu.${oldLevel.guild.id}.kanal`);
   if(!y) return
  if (i) {
               const embed = new Discord.MessageEmbed().setColor(oldLevel.guild.me.displayHexColor).setAuthor(oldLevel.guild.name, oldLevel.guild.iconURL({ dynamic: true })).setDescription(`Sunucu seviye atladı.\nEski Seviye: ${oldLevel}\nYeni Seviye: ${newLevel}`).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
  }
});

client.on("guildBoostLevelDown", (guild, oldLevel, newLevel) => {
        let i = db.get(`sunucu.${oldLevel.guild.id}.durum`);
        let y = db.get(`sunucu.${oldLevel.guild.id}.kanal`);
   if(!y) return
  if (i) {
               const embed = new Discord.MessageEmbed().setColor(oldLevel.guild.me.displayHexColor).setAuthor(oldLevel.guild.name, oldLevel.guild.iconURL({ dynamic: true })).setDescription(`Sunucu seviyesi düştü.\nEski Seviye: ${oldLevel}\nYeni Seviye: ${newLevel}`).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
  }
});

client.on("guildBannerAdd", (guild, bannerURL) => {
        let i = db.get(`sunucu.${guild.guild.id}.durum`);
        let y = db.get(`sunucu.${guild.guild.id}.kanal`);
   if(!y) return
  if (i) {
               const embed = new Discord.MessageEmbed().setColor(bannerURL.guild.me.displayHexColor).setAuthor(guild.guild.name, guild.guild.iconURL({ dynamic: true })).setDescription(`Sunucuya yeni bir banner yüklendi.\n[Link](${bannerURL})`).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
  }
});

client.on("guildAfkChannelAdd", (guild, afkChannel) => {
        let i = db.get(`sunucu.${guild.guild.id}.durum`);
        let y = db.get(`sunucu.${guild.guild.id}.kanal`);
   if(!y) return
  if (i) {
               const embed = new Discord.MessageEmbed().setColor(afkChannel.guild.me.displayHexColor).setAuthor(guild.guild.name, guild.guild.iconURL({ dynamic: true })).setDescription(`Sunucu AFK kanalı, ${afkChannel} olarak ayarlandı.`).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
  }
});

client.on("guildVanityURLAdd", (guild, vanityURL) => {
        let i = db.get(`sunucu.${guild.guild.id}.durum`);
        let y = db.get(`sunucu.${guild.guild.id}.kanal`);
   if(!y) return
  if (i) {
               const embed = new Discord.MessageEmbed().setColor(vanityURL.guild.me.displayHexColor).setAuthor(guild.guild.name, guild.guild.iconURL({ dynamic: true })).setDescription(`Sunucu özel URLsi, ${vanityURL} olarak ayarlandı.`).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
  }
});

client.on("guildVanityURLRemove", (guild, vanityURL) => {
        let i = db.get(`sunucu.${guild.guild.id}.durum`);
        let y = db.get(`sunucu.${guild.guild.id}.kanal`);
   if(!y) return
  if (i) {
               const embed = new Discord.MessageEmbed().setColor(vanityURL.guild.me.displayHexColor).setAuthor(guild.guild.name, guild.guild.iconURL({ dynamic: true })).setDescription(`Sunucu özel URLsi kaldırıldı.`).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
  }
});

client.on("guildVanityURLUpdate", (guild, oldVanityURL, newVanityURL) => {
        let i = db.get(`sunucu.${guild.guild.id}.durum`);
        let y = db.get(`sunucu.${guild.guild.id}.kanal`);
   if(!y) return
  if (i) {
               const embed = new Discord.MessageEmbed().setColor(oldVanityURL.guild.me.displayHexColor).setAuthor(guild.guild.name, guild.guild.iconURL({ dynamic: true })).setDescription(`Sunucu özel URLsi değiştirildi:\nEski URL:${oldVanityURL} \nYeni URL:${newVanityURL}`).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
  }
});

client.on("guildOwnerUpdate", (oldGuild, newGuild) => {
        let i = db.get(`sunucu.${oldGuild.guild.id}.durum`);
        let y = db.get(`sunucu.${oldGuild.guild.id}.kanal`);
   if(!y) return
  if (i) {
               const embed = new Discord.MessageEmbed().setColor(oldGuild.guild.me.displayHexColor).setAuthor(oldGuild.guild.name, oldGuild.guild.iconURL({ dynamic: true })).setDescription(`Sunucu mülkiyeti değiştirildi.\nEski Sahip: ${oldGuild.owner.id} \nYeni Sahip: ${newGuild.owner.id}`).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
  }
});

client.on("guildMemberNicknameUpdate", (member, oldNickname, newNickname) => {
        let i = db.get(`sunucu.${member.guild.id}.durum`);
        let y = db.get(`sunucu.${member.guild.id}.kanal`);
   if(!y) return
  if (i) {
    var ad
    if(oldNickname === null) ad = 'Yok.'
               const embed = new Discord.MessageEmbed().setColor(member.guild.me.displayHexColor).setAuthor(member.guild.name, member.guild.iconURL({ dynamic: true })).setDescription(`${member} adlı kullanıcının takma adı değiştirildi.\nEski Takma Ad: ${ad} \nYeni Takma Ad: ${newNickname}`).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
  }
});

client.on("guildMemberRoleAdd", (member, role) => {
        let i = db.get(`sunucu.${member.guild.id}.durum`);
        let y = db.get(`sunucu.${member.guild.id}.kanal`);
   if(!y) return
  if (i) {
               const embed = new Discord.MessageEmbed().setColor(member.guild.me.displayHexColor).setAuthor(member.guild.name, member.guild.iconURL({ dynamic: true })).setDescription(`${member} adlı kullanıcıya ${role.name} rolü eklendi.`).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
  }
});

client.on("guildMemberRoleRemove", (member, role) => {
        let i = db.get(`sunucu.${member.guild.id}.durum`);
        let y = db.get(`sunucu.${member.guild.id}.kanal`);
   if(!y) return
  if (i) {
               const embed = new Discord.MessageEmbed().setColor(member.guild.me.displayHexColor).setAuthor(member.guild.name, member.guild.iconURL({ dynamic: true })).setDescription(`${member} adlı kullanıcıdan ${role.name} rolü alındı.`).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
  }
});

    client.on('guildMemberAdd', member => {
      require('moment-duration-format')
      let user = member.user
      const arisaolusturuldu = new Date().getTime() - user.createdAt.getTime();
      let kayıt = db.get(`kayıt.${member.guild.id}.durum`)
      if (kayıt) {
      let kayıtkanal = db.get(`kayıt.${member.guild.id}.kanal`)
        const channel2 = member.guild.channels.cache.find(
    ch => ch.id === kayıtkanal
  );
      if(!kayıtkanal) return
      let kayıtsız = db.get(`kayıt.${member.guild.id}.kayıtsız.rol`)
      if(!kayıtsız) return
      let kayıtcı = db.get(`kayıt.${member.guild.id}.kayıtcı.rol`)
      if(!kayıtcı) return
      let memberGün = moment(member.user.createdAt).format("DD");
      let memberAylar = moment(member.user.createdAt)
      .format("MM")
      .replace("01", "Ocak")
      .replace("02", "Şubat")
      .replace("03", "Mart")
      .replace("04", "Nisan")
      .replace("05", "Mayıs")
      .replace("06", "Haziran")
      .replace("07", "Temmuz")
      .replace("08", "Ağustos")
      .replace("09", "Eylül")
      .replace("10", "Ekim")
      .replace("11", "Kasım")
      .replace("12", "Aralık");
      let memberYıllar = moment(member.user.createdAt).format("YYYY");
      var kontrol 
      if (arisaolusturuldu < 604800016) kontrol = 'Güvenilir Gözükmüyor 👎'
      if (arisaolusturuldu > 604800016) kontrol = 'Güvenli 👌'
      member.roles.add(kayıtsız)
      const embed = new Discord.MessageEmbed()
      .setTitle(`WELCOME TO ${member.guild.name}`)
      .setDescription(`Sunucumuza hoşgeldin ${member}, seninle beraber **${member.guild.memberCount}** kişiyiz! 🥳 \n\nSunucumuza kayıt olmak için yetkilileri etiketleyebilirsin!\n\nHesabın \`${memberGün} ${memberAylar} ${memberYıllar}\` tarihinde oluşturulduğu için ${kontrol}.`)
      .setThumbnail(member.user.avatarURL({dynamic:true}))
      .setColor(member.guild.me.displayHexColor)
      .setTimestamp()
      .setFooter(`${client.user.username} Kayıt Sistemi - 2021`, client.user.avatarURL({dynamic:true}))
      channel2.send(`<@&${kayıtcı}>, ${member} sunucuya giriş yaptı.`, embed)
      console.log(member)
      }
    })

client.on('guildBanAdd', async (guild, user) => {
        let i = db.get(`ban.${guild.id}.durum`);
        let y = db.get(`ban.${guild.id}.kanal`);
   if(!y) return
          if (i) {

               const embed = new Discord.MessageEmbed().setColor(user.guild.me.displayHexColor).setAuthor(user.guild.name, user.guild.iconURL({ dynamic: true })).setDescription(`${user} adlı kullanıcı sunucudan yasaklandı.`).setThumbnail(user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                }
})

client.on('guildBanRemove', async (guild, user) => {
        let i = db.get(`ban.${guild.id}.durum`);
        let y = db.get(`ban.${guild.id}.kanal`);
   if(!y) return
          if (i) {

               const embed = new Discord.MessageEmbed().setColor(user.guild.me.displayHexColor).setAuthor(user.guild.name, user.guild.iconURL({ dynamic: true })).setDescription(`${user} adlı kullanıcının yasağı kaldırıldı.`).setThumbnail(user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                }
})
// Main Alanı
  client.on('voiceStateUpdate', async (oldState, newState) => {
  if(!oldState.guild) return
          let i = db.get(`ses.${oldState.guild.id}.durum`);
        let y = db.get(`ses.${oldState.guild.id}.kanal`);
   if(!y) return
  const embed = new Discord.MessageEmbed()
  if(i) {
            let entry = await oldState.guild.fetchAuditLogs({type: 'MUTE_MEMBER'}).then(audit => audit.entries.first())
let yt = client.users.cache.get(entry.executor.id)
        let entry3 = await oldState.guild.fetchAuditLogs({type: 'UNMUTE_MEMBER'}).then(audit => audit.entries.first())
let yt3 = client.users.cache.get(entry.executor.id)
        let entry4 = await oldState.guild.fetchAuditLogs({type: 'UNDEAFEN_MEMBER'}).then(audit => audit.entries.first())
let yt4 = client.users.cache.get(entry.executor.id)
        let entry2 = await oldState.guild.fetchAuditLogs({type: 'DEAFEN_MEMBER'}).then(audit => audit.entries.first())
let yt2 = client.users.cache.get(entry.executor.id)
    let user = newState.guild.members.cache.get(newState.id)
    let yenikanal = newState.guild.channels.cache.get(newState.channelID)
    let eskikanal = newState.guild.channels.cache.get(oldState.channelID)
  if (!oldState.channelID && newState.channelID) return newState.guild.channels.cache.get(y).send(embed.setColor('#0d0636').setAuthor(oldState.guild.name, oldState.guild.iconURL({ dynamic: true })).setDescription(`${user} üyesi ${yenikanal} adlı sesli kanala girdi!`).setThumbnail(user.user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`))
  if (oldState.channelID && !newState.channelID) return newState.guild.channels.cache.get(y).send(embed.setColor('#0d0636').setAuthor(oldState.guild.name, oldState.guild.iconURL({ dynamic: true })).setDescription(`${user} üyesi ${eskikanal} adlı sesli kanaldan çıkış yaptı.`).setThumbnail(user.user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`))
       if(oldState.streaming === false && newState.streaming === true) 
  return newState.guild.channels.cache.get(y).send(embed.setColor(oldState.guild.me.displayHexColor).setAuthor(oldState.guild.name, oldState.guild.iconURL({ dynamic: true })).setDescription(`${oldState.member.user} üyesi ${newState.channel.name} adlı kanalda yayın başlattı.`).setThumbnail(user.user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`))
         if(oldState.streaming === true && newState.streaming === false) 
  return newState.guild.channels.cache.get(y).send(embed.setColor(oldState.guild.me.displayHexColor).setAuthor(oldState.guild.name, oldState.guild.iconURL({ dynamic: true })).setDescription(`${oldState.member.user} üyesi ${newState.channel.name} adlı kanalda yayını durdurdu.`).setThumbnail(user.user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`))
         if(oldState.serverMute === false && newState.serverMute === true) 
  return newState.guild.channels.cache.get(y).send(embed.setColor(oldState.guild.me.displayHexColor).setAuthor(oldState.guild.name, oldState.guild.iconURL({ dynamic: true })).setDescription(`${user} üyesi ses kanallarında ${yt} tarafından **sunucuda** susturuldu.`).setThumbnail(user.user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`))
  
      if(oldState.serverMute === true && newState.serverMute === false) 
  return newState.guild.channels.cache.get(y).send(embed.setColor(oldState.guild.me.displayHexColor).setAuthor(oldState.guild.name, oldState.guild.iconURL({ dynamic: true })).setDescription(`${user} üyesinin ses kanallarında olan susturulması ${yt3} tarafından kaldırıldı.`).setThumbnail(user.user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`))
  
  
      if(oldState.serverDeaf === false && newState.serverDeaf === true) 
  return newState.guild.channels.cache.get(y).send(embed.setColor(oldState.guild.me.displayHexColor).setAuthor(oldState.guild.name, oldState.guild.iconURL({ dynamic: true })).setDescription(`${user} üyesi ses kanallarında ${yt2} tarafından **sunucuda** sağırlaştırıldı.`).setThumbnail(user.user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`))
  
  
      if(oldState.serverDeaf === true && newState.serverDeaf === false) 
  return newState.guild.channels.cache.get(y).send(embed.setColor(oldState.guild.me.displayHexColor).setAuthor(oldState.guild.name, oldState.guild.iconURL({ dynamic: true })).setDescription(`${user} üyesinin ses kanallarında olan sağırlaştırılması ${yt4} tarafından kaldırıldı.`).setThumbnail(user.user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`))
  
  
      if(oldState.selfVideo === false && newState.selfVideo === true) 
  return newState.guild.channels.cache.get(y).send(embed.setColor(oldState.guild.me.displayHexColor).setAuthor(oldState.guild.name, oldState.guild.iconURL({ dynamic: true })).setDescription(`${user} üyesi ${newState.channel.name} adlı kanalda kamera paylaşımı açtı.`).setThumbnail(user.user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`))
 
     if(oldState.selfMute === false && newState.selfMute === true)
       return newState.guild.channels.cache.get(y).send(embed.setColor(oldState.guild.me.displayHexColor).setAuthor(oldState.guild.name, oldState.guild.iconURL({ dynamic: true })).setDescription(`${user} üyesi ses kanallarında kendini susturdu.`).setThumbnail(user.user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`))
  
    if(oldState.selfMute === true && newState.selfMute === false)
      return newState.guild.channels.cache.get(y).send(embed.setColor(oldState.guild.me.displayHexColor).setAuthor(oldState.guild.name, oldState.guild.iconURL({ dynamic: true })).setDescription(`${user} üyesi ses kanallarında kendi susturmasını kaldırdı.`).setThumbnail(user.user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`))
  
    if(oldState.selfDeaf === false && newState.selfDeaf === true)
      return newState.guild.channels.cache.get(y).send(embed.setColor(oldState.guild.me.displayHexColor).setAuthor(oldState.guild.name, oldState.guild.iconURL({ dynamic: true })).setDescription(`${user} üyesi ses kanallarında kendini sağırlaştırdı.`).setThumbnail(user.user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`))
  
    if(oldState.selfDeaf === true && newState.selfDeaf === false)
      return newState.guild.channels.cache.get(y).send(embed.setColor(oldState.guild.me.displayHexColor).setAuthor(oldState.guild.name, oldState.guild.iconURL({ dynamic: true })).setDescription(`${user} üyesi ses kanallarında kendin sağırlaştırmasını kaldırdı.`).setThumbnail(user.user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`))
  
      if(oldState.selfVideo === true && newState.selfVideo === false) 
  return newState.guild.channels.cache.get(y).send(embed.setColor(oldState.guild.me.displayHexColor).setAuthor(oldState.guild.name, oldState.guild.iconURL({ dynamic: true })).setDescription(`${user} üyesi ${newState.channel.name} adlı kanalda kamera paylaşımını kapattı.`).setThumbnail(user.user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`))

    if (oldState.channelID && newState.channelID && oldState.channelID != newState.channelID) return newState.guild.channels.cache.get(y).send(embed.setColor(oldState.guild.me.displayHexColor).setAuthor(oldState.guild.name, oldState.guild.iconURL({ dynamic: true })).setDescription(`${user} üyesi ses kanalını değiştirdi: \n${eskikanal} => ${yenikanal}`).setThumbnail(user.user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`))
  }
});

client.on("roleCreate", async role => {
        let i = db.get(`rol.${role.guild.id}.durum`);
        let y = db.get(`rol.${role.guild.id}.kanal`);
   if(!y) return
        if (i) {
  let entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first())
let user = client.users.cache.get(entry.executor.id)
               const embed = new Discord.MessageEmbed().setColor(role.guild.me.displayHexColor).setAuthor(role.guild.name, role.guild.iconURL({ dynamic: true })).setDescription(`${user} adlı kullanıcı rol oluşturdu;\n\n:white_check_mark: | ${role.name}`).setThumbnail(user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                }
})
    
      client.on("roleDelete", async role => {
        let i = db.get(`rol.${role.guild.id}.durum`);
        let y = db.get(`rol.${role.guild.id}.kanal`);
         if(!y) return
        if (i) {
  let entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first())
let user = client.users.cache.get(entry.executor.id)
               const embed = new Discord.MessageEmbed().setColor(role.guild.me.displayHexColor).setAuthor(role.guild.name, role.guild.iconURL({ dynamic: true })).setDescription(`${user} adlı kullanıcı rol sildi;\n\n:x: | ${role.name}`).setThumbnail(user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                }
  })

client.on("channelCreate", async channel => {
  if(!channel.guild) return
          let i = db.get(`kanal.${channel.guild.id}.durum`);
        let y = db.get(`kanal.${channel.guild.id}.kanal`);
   if(!y) return
        if (i) {
      let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
               const embed = new Discord.MessageEmbed().setColor(channel.guild.me.displayHexColor).setAuthor(channel.guild.name, channel.guild.iconURL({ dynamic: true })).setDescription(`${user} adlı kullanıcı kanal oluşturdu;\n\n:white_check_mark: | ${channel.name}`).setThumbnail(user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                }
})

client.on('channelPinsUpdate', async channel => {
            let i = db.get(`kanal.${channel.guild.id}.durum`);
        let y = db.get(`kanal.${channel.guild.id}.kanal`);
   if(!y) return
        if (i) {

               const embed = new Discord.MessageEmbed().setColor(channel.guild.me.displayHexColor).setAuthor(channel.guild.name, channel.guild.iconURL({ dynamic: true })).setDescription(`${channel.name} adlı kanalda bir mesaj sabitlendi veya sabitlenmesi kaldırıldı.`).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                }
})

client.on("channelDelete", async channel => {
            let i = db.get(`kanal.${channel.guild.id}.durum`);
        let y = db.get(`kanal.${channel.guild.id}.kanal`);
   if(!y) return
        if (i) {
    let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
               const embed = new Discord.MessageEmbed().setColor(channel.guild.me.displayHexColor).setAuthor(channel.guild.name, channel.guild.iconURL({ dynamic: true })).setDescription(`${user} adlı kullanıcı kanal sildi;\n\n:x: | ${channel.name}`).setThumbnail(user.avatarURL({dynamic:true})).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                }
})

client.on('guildIntegrationsUpdate', async guild => {
              let i = db.get(`sunucu.${guild.id}.durum`);
        let y = db.get(`sunucu.${guild.id}.kanal`);
   if(!y) return
        if (i) {

               const embed = new Discord.MessageEmbed().setColor(guild.guild.me.displayHexColor).setDescription(`Sunucuda yeni bir entegrasyon oluşturuldu.`).setTimestamp().setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                }
})

client.on('webhookUpdate', async channel => {
              let i = db.get(`sunucu.${channel.guild.id}.durum`);
        let y = db.get(`sunucu.${channel.guild.id}.kanal`);
   if(!y) return
        if (i) {

               const embed = new Discord.MessageEmbed().setColor(channel.guild.me.displayHexColor).setAuthor(channel.guild.name, channel.guild.iconURL({ dynamic: true }))
               .setDescription(`${channel.name} adlı kanalda webhook oluşturuldu.`)
               .setTimestamp()
               .setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                }
}) //PROFESYONEL CODDER ARİSA ABI ALOOOOOOOOOOOOOOOOOOOO

client.on('guildMemberAdd', async member => {
  require('moment-duration-format')
        let memberGünler = moment(member.user.createdAt).format("DD");
      let memberAylar = moment(member.user.createdAt)
      .format("MM")
      .replace("01", "Ocak")
      .replace("02", "Şubat")
      .replace("03", "Mart")
      .replace("04", "Nisan")
      .replace("05", "Mayıs")
      .replace("06", "Haziran")
      .replace("07", "Temmuz")
      .replace("08", "Ağustos")
      .replace("09", "Eylül")
      .replace("10", "Ekim")
      .replace("11", "Kasım")
      .replace("12", "Aralık");
      let memberYear = moment(member.user.createdAt).format("YYYY");
  let i = db.get(`sunucu.${member.guild.id}.durum`)
  let y = db.get(`sunucu.${member.guild.id}.kanal`)
   if(!y) return
  if(i) {
                   const embed = new Discord.MessageEmbed().setColor(member.guild.me.displayHexColor).setAuthor(member.guild.name, member.guild.iconURL({ dynamic: true }))
               .setDescription(`${member} adlı kullanıcı sunucuya giriş yaptı.\n\nKullanıcı Oluşturulma Tarihi: **${memberGünler} ${memberAylar} ${memberYear}**`)
               .setTimestamp()
                   .setThumbnail(member.user.avatarURL({dynamic:true}))
               .setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                
  }
})

client.on('guildMemberRemove', async member => {
    let i = db.get(`sunucu.${member.guild.id}.durum`)
  let y = db.get(`sunucu.${member.guild.id}.kanal`)
   if(!y) return
  if(i) {
                   const embed = new Discord.MessageEmbed().setColor(member.guild.me.displayHexColor).setAuthor(member.guild.name, member.guild.iconURL({ dynamic: true }))
               .setDescription(`${member} adlı kullanıcı sunucudan çıkış yaptı.`)
               .setTimestamp()
                   .setThumbnail(member.user.avatarURL({dynamic:true}))
               .setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                
  }
})

 client.on('emojiDelete', async emoji => {
       let entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_DELETE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
            let i = db.get(`emoji.${emoji.guild.id}.durum`);
        let y = db.get(`emoji.${emoji.guild.id}.kanal`);
    if(!y) return
        if (i) {

               const embed = new Discord.MessageEmbed().setColor(emoji.guild.me.displayHexColor).setAuthor(emoji.guild.name, emoji.guild.iconURL({ dynamic: true }))
               .setDescription(`${user} adlı kullanıcı emoji sildi;\n\n:x: | ${emoji.name}`)
               .setTimestamp()
                 .setThumbnail(user.avatarURL({dynamic:true}))
               .setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                }
 })

client.on('emojiUpdate', async emoji => {
              let i = db.get(`emoji.${emoji.guild.id}.durum`);
        let y = db.get(`emoji.${emoji.guild.id}.kanal`);
          if (i) {
          let entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_UPDATE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
   if(!y) return

               const embed = new Discord.MessageEmbed().setColor(emoji.guild.me.displayHexColor).setAuthor(emoji.guild.name, emoji.guild.iconURL({ dynamic: true }))
               .setDescription(`${emoji.name} adlı emoji ${user} tarafından düzenlendi.`)
               .setTimestamp()
                 .setThumbnail(user.avatarURL({dynamic:true}))
               .setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                }
})

client.on('emojiCreate', async emoji => {
              let i = db.get(`emoji.${emoji.guild.id}.durum`);
        let y = db.get(`emoji.${emoji.guild.id}.kanal`);
          if (i) {
            let entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_CREATE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
   if(!y) return

               const embed = new Discord.MessageEmbed().setColor(emoji.guild.me.displayHexColor).setAuthor(emoji.guild.name, emoji.guild.iconURL({ dynamic: true }))
               .setDescription(`${user} adlı kullanıcı emoji oluşturdu;\n\n:white_check_mark: | ${emoji.name}`)
               .setTimestamp()
               .setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                }
})

client.on('messageDelete', message => {
                let i = db.get(`mesaj.${message.guild.id}.durum`);
        let y = db.get(`mesaj.${message.guild.id}.kanal`);
  if(message.author.bot) return;
  if(message.attachments.size == '1') return
   if(!y) return
        if (i) {

               const embed = new Discord.MessageEmbed().setColor(message.guild.me.displayHexColor).setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
               .setDescription(`${message.author} tarafından gönderilen \n \n ${message} \n \n adlı ileti ${message.channel} adlı kanalda silindi.`)
               .setTimestamp()
               .setThumbnail(message.author.avatarURL({dynamic:true}))
               .setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                }
})

client.on('messageUpdate', (oldMessage, newMessage) => {
                let i = db.get(`mesaj.${oldMessage.guild.id}.durum`);
        let y = db.get(`mesaj.${oldMessage.guild.id}.kanal`);
  if(oldMessage.author.bot) return;
  if(oldMessage.content.includes('https')) return;
  if(!y) return
        if (i) {

               const embed = new Discord.MessageEmbed().setColor(oldMessage.guild.me.displayHexColor).setAuthor(oldMessage.guild.name, oldMessage.guild.iconURL({ dynamic: true }))
               .setDescription(`${oldMessage.author} tarafından gönderilen \n \n \`\`\`${oldMessage}\`\`\` \n \nadlı ileti \n \n \`\`\`${newMessage}\`\`\` \n \n${oldMessage.channel} adlı kanalda düzenlendi.`)
               .setTimestamp()
               .setThumbnail(oldMessage.author.avatarURL({dynamic:true}))
               .setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                }
})

client.on('inviteCreate', async invite => {
   let entry = await invite.guild.fetchAuditLogs({type: 'INVITE_CREATE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
            let i = db.get(`sunucu.${invite.guild.id}.durum`);
        let y = db.get(`sunucu.${invite.guild.id}.kanal`);
   if(!y) return
        if (i) {

               const embed = new Discord.MessageEmbed().setColor(invite.guild.me.displayHexColor).setAuthor(invite.guild.name, invite.guild.iconURL({ dynamic: true }))
               .setDescription(`${invite} bağlantılı davet kodu ${user} tarafından oluşturuldu.`)
               .setTimestamp()
               .setThumbnail(user.avatarURL({dynamic:true}))
               .setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                }
})

client.on('inviteDelete', async invite => {
     let entry = await invite.guild.fetchAuditLogs({type: 'INVITE_DELETE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
            let i = db.get(`sunucu.${invite.guild.id}.durum`);
        let y = db.get(`sunucu.${invite.guild.id}.kanal`);
   if(!y) return
        if (i) {

               const embed = new Discord.MessageEmbed().setColor(invite.guild.me.displayHexColor).setAuthor(invite.guild.name, invite.guild.iconURL({ dynamic: true }))
               .setDescription(`${invite} bağlantılı davet kodu ${user} tarafından silindi.`)
               .setTimestamp()
               .setThumbnail(user.avatarURL({dynamic:true}))
               .setFooter(`${client.user.username} Log Sistemi - 2021`)
                client.channels.cache.get(y).send(embed)
                }
})

client.on('messageDelete', async message => {
let dt = db.get(`foto.${message.guild.id}.durum`)
let ds = db.get(`foto.${message.guild.id}.kanal`)
if (!ds) return
if (dt) {
 let aroxLog = message.guild.channels.cache.get(ds) // Mesaj Silinme Log
 if(aroxLog) {
   if (message.author.bot || message.channel.type == "dm") return;
 const arxEmb = new Discord.MessageEmbed().setTimestamp()
   if (message.attachments.first()) {
     let imageName = message.attachments.first().proxyURL;
       // var check1
        if (imageName.endsWith('.png')) {
          let attach = new Discord.MessageAttachment()
          .setFile(message.attachments.first().proxyURL)
         // .setSpoiler(true)
          .setName('widowServices.png');
          message.guild.channels.cache.get(ds).send(`**\`${message.author.tag}\`** tarafından gönderilen görsel, ${message.channel} kanalında silindi.`, attach)
        } else if (imageName.endsWith('.gif')) {
          let attach = new Discord.MessageAttachment()
                    .setFile(message.attachments.first().proxyURL)
        //  .setSpoiler(true)
          .setName('widowServices.gif');
          message.guild.channels.cache.get(ds).send(`**\`${message.author.tag}\`** tarafından gönderilen görsel, ${message.channel} kanalında silindi.`, attach)
        } else if (imageName.endsWith('.webp')) {
                    let attach = new Discord.MessageAttachment()
                    .setFile(message.attachments.first().proxyURL)
        //  .setSpoiler(true)
          .setName('widowServices.webp');
          message.guild.channels.cache.get(ds).send(`**\`${message.author.tag}\`** tarafından gönderilen görsel, ${message.channel} kanalında silindi.`, attach)
        } else if (imageName.endsWith('.jpg')) {
                              let attach = new Discord.MessageAttachment()
                    .setFile(message.attachments.first().proxyURL)
        //  .setSpoiler(true)
          .setName('widowServices.jpg');
          message.guild.channels.cache.get(ds).send(`**\`${message.author.tag}\`** tarafından gönderilen görsel, ${message.channel} kanalında silindi.`, attach)
        } else if (imageName.endsWith('.jpeg')) {
                              let attach = new Discord.MessageAttachment()
                    .setFile(message.attachments.first().proxyURL)
        //  .setSpoiler(true)
          .setName('widowServices.jpeg');
          message.guild.channels.cache.get(ds).send(`**\`${message.author.tag}\`** tarafından gönderilen görsel, ${message.channel} kanalında silindi.`, attach)
        } else if (imageName.endsWith('.mp4')) {
                              let attach = new Discord.MessageAttachment()
                    .setFile(message.attachments.first().proxyURL)
        //  .setSpoiler(true)
          .setName('widowServices.mp4');
          message.guild.channels.cache.get(ds).send(`**\`${message.author.tag}\`** tarafından gönderilen video, ${message.channel} kanalında silindi.`, attach)
        } else if (imageName.endsWith('.mov')) {
                              let attach = new Discord.MessageAttachment()
                    .setFile(message.attachments.first().proxyURL)
        //  .setSpoiler(true)
          .setName('widowServices.mov');
          message.guild.channels.cache.get(ds).send(`**\`${message.author.tag}\`** tarafından gönderilen video, ${message.channel} kanalında silindi.`, attach)
        } else if (imageName.endsWith('.avi')) {
                              let attach = new Discord.MessageAttachment()
                    .setFile(message.attachments.first().proxyURL)
        //  .setSpoiler(true)
          .setName('widowServices.avi');
          message.guild.channels.cache.get(ds).send(`**\`${message.author.tag}\`** tarafından gönderilen video, ${message.channel} kanalında silindi.`, attach)
        } else if(imageName.endsWith('.mp3')) {
                              let attach = new Discord.MessageAttachment()
                    .setFile(message.attachments.first().proxyURL)
        //  .setSpoiler(true)
          .setName('widowServices.mp3');
          message.guild.channels.cache.get(ds).send(`**\`${message.author.tag}\`** tarafından gönderilen ses, ${message.channel} kanalında silindi.`, attach)
        }
     }
      }
    }
})

client.on('message', async message => {
  if(!message.guild) return
              let i = db.get(`kufur.${message.guild.id}.durum`);
  if (i) {
    const küfürler = [
       "oç",
  "orusbu",
  "oruspu",
  "orosbu",
  "orospu",
  "orsbu",
  "Oç",
  "OÇ",
  "PİÇ",
  "pİÇ",
  "Piç",
  "piç",
  "Ananı",
  "ananı",
  "ANANI",
  "Anneni",
  "ANNENİ",
  "anneni",
  "Bacını",
  "BACINI",
  "bacını",
  "Skerim",
  "skerim",
  "SKERİM",
  "SKERIM",
  "SİKERİM",
  "sikerim",
  "Sikerim",
  "skerm",
  "amına",
  "AMINA",
  "Amına",
  "Göt",
  "GÖT",
  "göt",
  "amk",
  "AMK",
  "Amk",
  "sikicem",
  "MQ",
  "SG",
  "sg",
  "Sg",
  "aq",
  "siktir",
  "siktim",
  "SİKTİR",
  "sktr",
  "Amcık",
  "AMCIK",
  "amcık",
  "bok",
  "BOK",
  "Bok",
  "gahbe",
  "Gahbe",
  "siktir",
  "yarağm",
  "orsbu",
  "skm"
    ]
    if(küfürler.some(word => word.includes(küfürler))) {
   
      message.delete()  // bide tolovercase ekle buna abim
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
      .setColor('RANDOM')
      .setDescription(`${message.author}, ${message.guild.name} sunucusunda küfürler engelleniyor.`)
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL())
      message.channel.send(`${message.author}`, embed).then(ca => ca.delete({timeout:2500}))
    }
  }
})

client.on('messageUpdate', async (oldMessage, newMessage) => {
  if(!oldMessage.guild) return
               let i = db.get(`kufur.${newMessage.guild.id}.durum`);
  if (i) {
    const küfürler = [
       "oç",//
  "orusbu",
  "oruspu",// dead team bot komut gel
  "orosbu",
  "orospu",
  "orsbu",
  "Oç",
  "OÇ",
  "PİÇ",
  "pİÇ",
  "Piç",
  "piç",
  "Ananı",
  "ananı",
  "ANANI",
  "Anneni",
  "ANNENİ",
  "anneni",
  "Bacını",
  "BACINI",
  "bacını",
  "Skerim",
  "skerim",
  "SKERİM",
  "SKERIM",
  "SİKERİM",
  "sikerim",
  "Sikerim",
  "skerm",
  "amına",
  "AMINA",
  "Amına",
  "Göt",
  "GÖT",
  "göt",
  "amk",
  "AMK",
  "Amk",
  "sikicem",
  "MQ",
  "SG",
  "sg",
  "Sg",
  "aq",
  "siktir",
  "siktim",
  "SİKTİR",
  "sktr",
  "Amcık",
  "AMCIK",
  "amcık",
  "bok",
  "BOK",
  "Bok",
  "gahbe",
  "Gahbe",
  "siktir",
  "yarağm",
  "orsbu",
  "skm"
    ]
   if(küfürler.some(word => word.includes(küfürler))) {
   
      newMessage.delete()
      let embed = new Discord.MessageEmbed()
      .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL({dynamic:true}))
      .setColor('RANDOM')
      .setDescription(`${oldMessage.author}, ${oldMessage.guild.name} sunucusunda küfürler engelleniyor.`)
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL())
      newMessage.channel.send(`${oldMessage.author}`, embed).then(ca => ca.delete({timeout:2500}))
    }
  }
})

client.on('message', async message => {
  if(!message.guild) return
  let i = db.get(`link.${message.guild.id}.durum`)
  if(i) {
        const küfürler = [
".com",
          "discord.gg",
          "https://",
          ".net",
          ".xyz",
          "http://"
    ]
   if(küfürler.some(word => word.includes(küfürler))) {
   if(message.member.hasPermission('ADMINISTRATOR')) return
      message.delete()
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
      .setColor('RANDOM')
      .setDescription(`${message.author}, ${message.guild.name} sunucusunda linkler engelleniyor.`)
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL())
      message.channel.send(`${message.author}`, embed).then(ca => ca.delete({timeout:2500}))
    }
  }
})

client.on('messageUpdate', async (oldMessage, newMessage) => {
  if(!oldMessage.guild) return
  let i = db.get(`link.${oldMessage.guild.id}.durum`)
  if(i) {
        const küfürler = [
".com",
          "discord.gg",
          "https://",
          ".net",
          ".xyz",
          "http://"
    ]
    if(küfürler.some(word => word.includes(küfürler))) {
      if(newMessage.member.hasPermission('ADMINISTRATOR')) return
      newMessage.delete()
      let embed = new Discord.MessageEmbed()
      .setAuthor(newMessage.author.tag, newMessage.author.avatarURL({dynamic:true}))
      .setColor('RANDOM')
      .setDescription(`${newMessage.author}, ${newMessage.guild.name} sunucusunda linkler engelleniyor.`)
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL())
      newMessage.channel.send(`${newMessage.author}`, embed).then(ca => ca.delete({timeout:2500}))
    }
  }
})

client.login(process.env.token)
require('discord-buttons')(client);


client.on("guildBanRemove", (guild, user) => {
  const database = require("coders.db");
  const bans = database.get(`acilmayanBan.laura.${guild.id}`) || [];
  if (bans.some(ban => ban.user.id == user.id))
    return guild.members.ban(user, { reason: "Açılmayan Ban Sistemi - Widow" });
});
const { MessageButton } = require('discord-buttons')
client.on('clickButton', async button => {
  if (button.id == 'createTicket') {
        await button.reply.think(true)
    if (!db.get(`talepKanal.${button.guild.id}.kanal`)) return await button.reply.edit('HATA: Sunucu yöneticisi bazı özellikleri tam ayarlamamış. (TalepKanal)')
    if (!db.get(`talepYetkili.${button.guild.id}.rol`)) return await button.reply.edit('HATA: Sunucu yöneticisi bazı özellikleri tam ayarlamamış. (TalepYetkili)')
    let member = db.get(`${button.guild.id}.createdTicket.${button.clicker.member.user.id}`)
          if (member) {
        if (member.userID == button.clicker.member.user.id) {
          return await button.reply.edit('Zaten bir talebiniz açık!')
        }
      } else {
        db.set(`fastTicket.${button.guild.id}`, { author: button.clicker.member.user.id })
        button.guild.channels.create(`talep-${button.clicker.member.user.username}`, 'text').then(async c => {
          let allahkerimdir1 = db.get(`talepKanal.${c.guild.id}.kanal`)
          let allahkerimdir = c.guild.channels.cache.get(allahkerimdir1)
            let category = c.guild.channels.cache.get(allahkerimdir.parent.id)
            let everyoneRole = c.guild.roles.cache.find(a => a.name === "@everyone")
            let staffRole = c.guild.roles.cache.get(db.get(`talepYetkili.${c.guild.id}.rol`))
            c.setParent(category)
            let userGET = db.get(`fastTicket.${c.guild.id}`)
            if (!userGET) return await button.reply.edit('Sistem hatası. Spectre#0076 kişisine ulaşın.')
            let kullanıcıf = userGET.author
            let kullanıcı = c.guild.members.cache.get(kullanıcıf)
            let embedMenu = new Discord.MessageEmbed()
            .setAuthor(kullanıcı.user.tag, kullanıcı.user.avatarURL({dynamic:true}))
            .setColor('#05fd05')
            .setDescription(`
Bu kısımdan sadece sunucuyla ilgili sorunlarınız vb. için destek alabilirsiniz.
Kısa süre içerisinde geri dönüş yapmazsanız talep yöneticiler tarafından kapatılır.
Talebi kapatmak için butona tıklayın.
            `)
            .setThumbnail(c.guild.iconURL({dynamic:true}))
            .setFooter(`Widow - Talep Sistemi`, client.user.avatarURL());
            let buttonMenu = new MessageButton()
            .setStyle('red')
            .setLabel('⛔ | Talebi Kapat')
            .setID('closeTicket');
            c.send(`<@${kullanıcıf}> - <@&${db.get(`talepYetkili.${c.guild.id}.rol`)}>`)
            c.send(embedMenu, buttonMenu)
                c.overwritePermissions([
                {
                    id: kullanıcıf,
                    allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
                },
                {
                    id: everyoneRole,
                    deny: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
                },
                {
                    id: staffRole,
                    allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
                },
            ]);
           await button.reply.edit(`Talep başarıyla oluşturuldu. (<#${c.id}>)`)
          db.set(`${button.guild.id}.createdTicket.${c.id}`, { userID: kullanıcıf, channelID: c.id })
          db.set(`${button.guild.id}.createdTicket.${button.clicker.member.user.id}`, { userID: kullanıcıf, channelID: c.id })
          db.delete(`fastTicket.${c.guild.id}`)
        })
      }
  }
  else if (button.id == 'closeTicket') {
      await button.reply.think(true)
     let control = db.get(`${button.guild.id}.createdTicket.${button.channel.id}`)
         let channelID = button.channel.id
         let memberID = control.userID
      let c = button.guild.channels.cache.get(channelID)
                let everyoneRole = button.guild.roles.cache.find(a => a.name === "@everyone")
      let m = button.guild.members.cache.get(memberID)
                  let staffRole = c.guild.roles.cache.get(db.get(`talepYetkili.${c.guild.id}.rol`))
      let a = 'kapatıldı'
      await button.reply.edit('Başarılı.')
        c.updateOverwrite(
    memberID,
    { VIEW_CHANNEL: null, SEND_MESSAGES: false }
  );
      c.overwritePermissions([
        {
                    id: everyoneRole,
                    deny: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
                },
                        {
                    id: staffRole,
                    allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
                },
    ]);
       c.edit({name:`${a}`})
      db.set(`${button.guild.id}.haveBeenClose.${button.channel.id}`, { memberID: memberID })
       db.delete(`${button.guild.id}.createdTicket.${button.channel.id}`)
      db.delete(`${button.guild.id}.createdTicket.${memberID}`)
    let embed = new Discord.MessageEmbed()
    .setAuthor(button.clicker.member.user.tag, button.clicker.member.user.avatarURL({dynamic:true}))
    .setColor('#f3ff00')
    .setDescription(`
Talep, ${button.clicker.member} tarafından kapatıldı.
Kontrolleri sağlayıp talebi butonlara göre silin, tekrar açın.
    `)
    .setThumbnail(button.guild.iconURL({dynamic:true}))
    .setFooter('Widow - Talep Sistemi', client.user.avatarURL());
    let button1 = new MessageButton()
    .setStyle('red')
    .setLabel('💣 | Talebi Sil')
    .setID('deleteTicket');
    let button2 = new MessageButton()
    .setStyle('green')
    .setLabel('🔓 | Talebi Yeniden Aç')
    .setID('reopenTicket');
    c.send(embed, { buttons: [button1, button2]})
    }
  else if (button.id == 'deleteTicket') {
      await button.reply.think(true)
            await button.reply.edit(`${button.clicker.member}, talep 5 saniye içinde silinecek.`)
    db.delete(`${button.guild.id}.haveBeenClose.${button.channel.id}`)
            setTimeout(() => { button.channel.delete() }, 5000)
    }
  else if (button.id == 'reopenTicket') {
        await button.reply.think(true)
        let local = db.get(`${button.guild.id}.haveBeenClose.${button.channel.id}`) 
        if (!local) return await button.reply.think(true) && await button.reply.edit('Achtung! Ein notfall tritt auf! Bitte bleib ruhig! Weitere anweisungen folgen!')
        let member = local.memberID
        let channel = button.channel
                    let everyoneRole = button.guild.roles.cache.find(a => a.name === "@everyone")
                                      let staffRole = channel.guild.roles.cache.get(db.get(`talepYetkili.${button.guild.id}.rol`))
        let asd = button.guild.members.cache.get(member)
        let ada = asd.user.username
        channel.overwritePermissions([
            {
                id: member,
                allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
            },
                  {
                    id: everyoneRole,
                    deny: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
                },
                                  {
                    id: staffRole,
                    allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
                },
        ]);   
        channel.edit({name:`talep-${ada}`})
      const embed = new Discord.MessageEmbed()
      .setAuthor(button.clicker.member.user.tag, button.clicker.member.user.avatarURL({dynamic:true}))
      .setColor('#0482ff')
      .setDescription(`Talep, ${button.clicker.member} tarafından yeniden açıldı.`)
      .setThumbnail(button.guild.iconURL({dynamic:true}))
      .setFooter('Widow - Talep Sistemi', client.user.avatarURL())
      channel.send(embed)
      button.message.delete()
      db.delete(`${button.guild.id}.haveBeenClose.${button.channel.id}`)
      db.set(`${button.guild.id}.createdTicket.${member}`, { userID: member, channelID: button.channel.id })
      db.set(`${button.guild.id}.createdTicket.${button.channel.id}`, { userID: member, channelID: button.channel.id })
      await button.reply.edit('BAŞARILI')
    }
})

