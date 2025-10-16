const Discord = require("discord.js");
const {MessageButton} = require('discord-buttons')
    require('discord-replys')
const ayarlar = require("../ayarlar.json");
const db = require('coders.db')

exports.run = (client, message, args) => {
    let prefix;
  if (db.has(`prefix_${message.guild.id}`) === true) {
    prefix = db.get(`prefix_${message.guild.id}`)
  }
  if (db.has(`prefix_${message.guild.id}`) === false) {
    prefix = ayarlar.prefix
  }
        let wen = client.users.cache.get(ayarlar.sahip)
        if(args[0] === undefined) {
  const EmbedNarcosCode = new Discord.MessageEmbed()

    .setColor(message.guild.me.displayHexColor)
  .setAuthor(message.author.username, message.author.avatarURL({dynamic:true}))
    .setTitle(
      `**Yardım Paneli**`
    )
    .setDescription(
      `
[Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=859104080131784704&permissions=8&scope=bot) | [Destek Sunucusu](https://discord.gg/h8hWtJgj9g) | [Oy Kullanma Linki](https://top.gg/bot/859104080131784704)

• Bot ile ilgili tavsiyelerinizi veya bulduğunuz hataları ${prefix}bildir yazarak bize iletebilirsiniz.

• Sunucu içerisinde botun prefixini (ön ekini) değiştirmek için ${prefix}prefix yazabilirsiniz.

• **Komutlar**
**${prefix}yardım moderasyon** • Moderasyon Menüsü
**${prefix}yardım talep** • Talep Sistemi Menüsü
**${prefix}yardım kullanıcı** • Kullanıcı Menüsü
**${prefix}yardım kayıt** • Kayıt Menüsü
**${prefix}yardım eğlence** • Eğlence Menüsü
**${prefix}yardım ayarlamalı** • Ayarlamalı Komutlar Menüsü
**${prefix}yardım resim** • Resim Menüsü
**${prefix}yardım bot** • Bot Menüsü
**${prefix}yardım uptime** • Uptime Menüsü
**${prefix}yardım premium** • Premium Menüsü
`)
.setThumbnail(client.user.avatarURL({dynamic:true}))
    .setFooter(`© 2021 ${client.user.username}`);
            const a = new MessageButton()
  .setStyle('url')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=859104080131784704&permissions=8&scope=bot')
  .setLabel('Sunucunuza Ekleyin!');
          const b = new MessageButton()
            .setStyle('url')
  .setURL('https://discord.gg/h8hWtJgj9g')
  .setLabel('Destek Sunucumuza Katılın!');
  return message.channel.send(EmbedNarcosCode, a)
        }
  if(args[0] === 'moderasyon') {
    const mod = new Discord.MessageEmbed()
.setColor(message.guild.me.displayHexColor)
  .setAuthor(client.user.username, client.user.avatarURL({dynamic:true}))
.setTitle("» **Moderasyon Menüsü**")
.setThumbnail(client.user.avatarURL({dynamic:true}))
.setDescription(`
🔒 | **${prefix}otorol:** Sunucunuza katılan üyelere otomatik rol verme sistemi.
🔒 | **${prefix}ban-sorgu:** Kullanıcının yasak sebebini gösterir.
🔒 | **${prefix}ban:** Kullanıcıyı sunucudan yasaklarsınız.
🔒 | **${prefix}kick:** Kullanıcıyı sunucudan atarsınız.
🔒 | **${prefix}forceban:** Sunucuda olmayan birini IDsi ile yasaklar.
🔒 | **${prefix}kurallar:** Hazır şekilde kurallar yazar.
🔒 | **${prefix}oylama:** Oylama yaparsınız.
🔒 | **${prefix}kilit:** Belirtilen kanal için mesaj yazmayı kapatır.
🔒 | **${prefix}kilit-aç:** Belirtilen kanal için mesaj yazmayı açar.
🔒 | **${prefix}sil:** Belirtilen miktarda mesaj siler.
🔒 | **${prefix}taç:** Sunucu sahibini gösterir.
🔒 | **${prefix}unban:** Yasaklı bir kullanıcının banını kaldırır.
🔒 | **${prefix}emojiekle:** Sunucuya belirtilen emojiyi ekler.
🔒 | **${prefix}nuke:** Belirtilen kanalı siler ve yeniden oluşturur.
🔒 | **${prefix}yavaş-mod:** Kanalda yavaş mod ayarlarsınız.
🔒 | **${prefix}yetkilerim:** Sunucu içerisindeki yetkilerinizi gösterir.
🔒 | **${prefix}çek:** Sesli kanaldaki bir kullanıcıyı yanınıza çekersiniz.
🔒 | **${prefix}duyuru:** Bot'a duyuru yaptırırsınız.
`)
    .setFooter(`© 2021 ${client.user.username}`)
message.replyNoMention(mod)
  }
  if(args[0] === 'eğlence') {
    const mod = new Discord.MessageEmbed()
.setColor(message.guild.me.displayHexColor)
  .setAuthor(client.user.username, client.user.avatarURL({dynamic:true}))
.setTitle("» **Eğlence Menüsü**")
.setThumbnail(client.user.avatarURL({dynamic:true}))
.setDescription(`
🎉 | **${prefix}ara112:** Ambulans çağırırsınız.
🎉 | **${prefix}ara155:** Polis çağırırsınız.
🎉 | **${prefix}atasözü:** Rastgele bir atasözü gösterir.
🎉 | **${prefix}balık:** Balık tutarsınız.
🎉 | **${prefix}dürüm:** Dürüm yersiniz.
🎉 | **${prefix}espri:** Rastgele bir espri gösterir.
🎉 | **${prefix}fbi:** FBİ!
🎉 | **${prefix}kapaklaf:** Rastgele kapak laf gösterir.
🎉 | **${prefix}kaçcm:** Küçük oğlanı ölçer.
🎉 | **${prefix}öldür:** Belirtilen kullanıcıyı öldürür. (Sadece eğlence amaçlıdır.)
🎉 | **${prefix}kasaaç:** Rastgele CS:GO kasası açarsınız.
🎉 | **${prefix}kralol:** Kral olursunuz.
🎉 | **${prefix}stres-çarkı:** Stres çarkı çevirirsiniz.
🎉 | **${prefix}token:** Botun tokenini verir.
🎉 | **${prefix}yumruk-at:** Etiketlenen kişiye yumruk atar.
🎉 | **${prefix}zar-at:** Zar atarsınız.
🎉 | **${prefix}öp:** Etiketlenen kişiyi öper.
🎉 | **${prefix}düello:** Etiketlenen kişiyle düello atarsınız.
`)
    .setFooter(`© 2021 ${client.user.username}`)
message.replyNoMention(mod)
  }
  if(args[0] === 'ayarlamalı') {
    const mod = new Discord.MessageEmbed()
.setColor(message.guild.me.displayHexColor)
  .setAuthor(client.user.username, client.user.avatarURL({dynamic:true}))
.setTitle("» **Ayarlamalı Komutlar**")
.setThumbnail(client.user.avatarURL({dynamic:true}))
.setDescription(`
📁 | **${prefix}emoji-log:** Sunucuda emoji silindiğinde, eklendiğinde kanala loglar.
📁 | **${prefix}ban-log:** Sunucuda biri yasakladığında belirtilen kanala loglar.
📁 | **${prefix}kanal-log:** Sunucuda kanal oluşturulduğunda, düzenlendiğinde ve silindiğinde kanala loglar.
📁 | **${prefix}rol-log:** Sunucuda rol oluşturulduğunda, düzenlendiğinde ve silindiğinde kanala loglar.
📁 | **${prefix}mesaj-log:** Sunucuda mesaj silindiğinde, düzenlendiğinde eski mesajı veya silenen mesajı kanala loglar.
📁 | **${prefix}ses-log:** Sunucuda herhangi bir üye ses kanalına katıldığında, çıktığında veya başka kanala geçiş yaptığında kanala loglar.
📁 | **${prefix}sunucu-log:** Sunucuda herhangi bir güncelleme yapıldığında kanala loglar.
📁 | **${prefix}küfür-engel:** Sunucuda herhangi bir üye yasaklı kelime kullandığında mesajı siler ve üyeyi uyarır.
📁 | **${prefix}link-engel:** Sunucuda herhangi bir üye yasaklı link attığında mesajı siler ve üyeyi uyarır.
`)
    .setFooter(`© 2021 ${client.user.username}`)
message.replyNoMention(mod)
  }
  if(args[0] === 'resim') {
    const mod = new Discord.MessageEmbed()
.setColor(message.guild.me.displayHexColor)
  .setAuthor(client.user.username, client.user.avatarURL({dynamic:true}))
.setTitle("» **Resim Menüsü**")
.setThumbnail(client.user.avatarURL({dynamic:true}))
.setDescription(`
🌃 | **${prefix}atatürk:** 1881-193∞
🌃 | **${prefix}avatar:** Etiketlenen kullanıcının profil fotoğrafını gösterir.
🌃 | **${prefix}banner:** Etiketlenen kullanıcının bannerini gösterir.
🌃 | **${prefix}kedi:** Rastgele kedi fotoğrafı gösterir.
🌃 | **${prefix}sunucupp:** Sunucunun fotoğrafını gösterir.
`)
    .setFooter(`© 2021 ${client.user.username}`)
message.replyNoMention(mod)
  }
  if(args[0] === 'bot') {
    const mod = new Discord.MessageEmbed()
.setColor(message.guild.me.displayHexColor)
  .setAuthor(client.user.username, client.user.avatarURL({dynamic:true}))
.setTitle("» **Bot Menüsü**")
.setThumbnail(client.user.avatarURL({dynamic:true}))
.setDescription(`
🤖 | **${prefix}prefix:** Sunucudaki prefixi ayarlar.
🤖 | **${prefix}bakım:** Botu bakım moduna alır. (Yalnızca Sahibim kullanabilir.)
🤖 | **${prefix}bildir:** Botta bulduğunuz hataları veya istediğiniz komutları bildirirsiniz.
🤖 | **${prefix}davet:** Botun destek sunucusunun ve sunucunuza davet edebilmek için gereken linkleri gösterir.
🤖 | **${prefix}istatistik:** Botun anlık istatistiklerini gösterir.
🤖 | **${prefix}ping:** Botun anlık gecikmesini (ms) değerinde gösterir.
🤖 | **${prefix}reboot:** Botu yeniden başlatır. (Yalnızca Sahibim kullanabilir.)
🤖 | **${prefix}sor:** Botla sohbet edersiniz. (Beta sürüm.)
`)
    .setFooter(`© 2021 ${client.user.username}`)
message.replyNoMention(mod)
  }
  if(args[0] === 'uptime') {
    const mod = new Discord.MessageEmbed()
.setColor(message.guild.me.displayHexColor)
  .setAuthor(client.user.username, client.user.avatarURL({dynamic:true}))
.setTitle("» **Uptime Menüsü**")
.setThumbnail(client.user.avatarURL({dynamic:true}))
.setDescription(`
🌎 | **${prefix}uptime ekle:** Belirtilen linki 7/24 aktif tutar. (Botlarınız için ideal)
🌎 | **${prefix}uptime sil:** Belirtilen linki kayıtlardan siler.
🌎 | **${prefix}uptime linklerim:** Sisteme girmiş olduğunuz linkleri DM'den gösterir.
`)
    .setFooter(`© 2021 ${client.user.username}`)
message.replyNoMention(mod)
  }
  if(args[0] === 'kullanıcı') {
    const mod = new Discord.MessageEmbed()
.setColor(message.guild.me.displayHexColor)
  .setAuthor(client.user.username, client.user.avatarURL({dynamic:true}))
.setTitle("» **Kullanıcı Menüsü**")
.setThumbnail(client.user.avatarURL({dynamic:true}))
.setDescription(`
📌 | **${prefix}ascii:** Yazdığınız yazıyı ascii stiline dönüştürür.
📌 | **${prefix}avatar:** Etiketlenen kullanıcının profil fotoğrafını gösterir.
📌 | **${prefix}emojiyazı:** Yazdığınız yazıyı emojiyle yazar.
📌 | **${prefix}fakemesaj:** Etiketlenen kullanıcı fakesini oluşturup yazdığınız metni gönderir.
📌 | **${prefix}fal:** Falınıza bakarsınız.
📌 | **${prefix}hava-durumu:** Yazdığınız şehrin hava durumunu gösterir.
📌 | **${prefix}id:** Etiketlenen kullanıcının ID'sini gösterir.
📌 | **${prefix}ilginç-bilgi:** Rastgele ilginç bilgi gösterir.
📌 | **${prefix}kullanıcı-bilgi:** Etiketlenen kullanıcının bilgilerini gösterir.
📌 | **${prefix}hesapla:** Matematiksel bir işlem hesaplar.
📌 | **${prefix}mcskin:** Girdiğiniz isme göre Minecraft skini gösterir.
📌 | **${prefix}piyango:** Piyango alırsınız.
📌 | **${prefix}rastgelegif:** Yazdığınız içerik ile ilgili rastgele gif gönderir.
📌 | **${prefix}romen:** Yazdığınız sayıyı romen biçimine çevirir.
📌 | **${prefix}şifre:** Yazdığınız boyutta rastgele bir şifre oluşturur.
📌 | **${prefix}saat:** Türkiye konumlu anlık saati gösterir.
📌 | **${prefix}stres-çarkı:** Stres çarkı çevirirsiniz.
📌 | **${prefix}tarih:** Türkiye konumlu anlık tarihi gösterir.
📌 | **${prefix}tersyazı:** Yazdığınız yazıyı tam tersine çevirir.
📌 | **${prefix}yazan-kazanır:** Etiketlediğiniz kişiyle botun attığı ilk yazıyı yazan kişi oyunu kazanır.
📌 | **${prefix}çeviri:** Türkçe kelimeyi ingilizceye çevirirsiniz.
`)
    .setFooter(`© 2021 ${client.user.username}`)
message.replyNoMention(mod)
  }
    if(args[0] === 'kayıt') {
    const mod = new Discord.MessageEmbed()
.setColor(message.guild.me.displayHexColor)
  .setAuthor(client.user.username, client.user.avatarURL({dynamic:true}))
.setTitle("» **Kayıt Menüsü**")
.setThumbnail(client.user.avatarURL({dynamic:true}))
.setDescription(`
(!) Dikkat: Aşağıdaki iki bölüme ayrılan komutlarda ilk bölüme ayrılan sistemlerinin hepsini ayarlamazsanız, komutların hiçbiri düzgün çalışmaz.

💣 | **${prefix}kayıt:** Adım 1 = Kayıt sistemini aktifleştirir veya deaktif eder.
💣 | **${prefix}erkek-rol:** Adım 2 = Kayıt sisteminde **erkek** rolünü ayarlar.
💣 | **${prefix}kadın-rol:** Adım 3 = Kayıt sisteminde **kadın** rolünü ayarlar.
💣 | **${prefix}kayıtsız-rol:** Adım 4 = Kayıt sisteminde **kayıtsız** rolünü ayarlar.
💣 | **${prefix}kayıtçı-rol:** Adım 5 = Kayıt sisteminde **kayıtları yapacak** rolü ayarlar.
💣 | **${prefix}kanal-ayarla:** Adım 6 = Kayıt sisteminde **kayıtların yapılacağı / üye giriş yapınca mesaj atılacak** kanalı ayarlar.
💣 | **${prefix}log-ayarla:** Adım 7 = Kayıt sisteminde **kayıtların yapıldıktan sonra loglanacağı** kanalı ayarlar.
------------------------------------------------------------------------
💣 | **${prefix}erkek:** Belirtilen kullanıcıyı **erkek** olarak kayıt eder.
💣 | **${prefix}kadın:** Belirtilen kullanıcıyı **kadın** olarak kayıt eder.
`)
    .setFooter(`© 2021 ${client.user.username}`)
message.replyNoMention(mod)
  }
  if (args[0] == 'premium') {
        const mod = new Discord.MessageEmbed()
.setColor(message.guild.me.displayHexColor)
  .setAuthor(client.user.username, client.user.avatarURL({dynamic:true}))
.setTitle("» **Premium Menüsü**")
.setThumbnail(client.user.avatarURL({dynamic:true}))
.setDescription(`
(!) Not: Bu kısımdaki komutlar zaman içinde artacaktır.

🔮 | **${prefix}openai:** Yapay zeka sistemine dayalı istek kod sistemi. İstediğiniz kodu yazar.
🔮 | **${prefix}aban:** Açılmayan ban sistemi. Hiç kimse yasaklanan üyenin banını kaldıramaz.
🔮 | **${prefix}medya-log:** Sunucuda bir fotoğraf, video, ses silindiğinde, kanala içeriği ile birlikte loglar.
🔮 | **${prefix}vmute:** Sesli kanalda süreli olarak mute atar.
🔮 | **${prefix}uptime:** Normal şartlarda en fazla 2 link uptime edilebiliyorken, premium'da 10 link uptime edilebilir.
🔮 | **${prefix}ipget:** İstediğiniz IP adresini sorgular ve detaylarını gösterir.
`)
    .setFooter(`© 2021 ${client.user.username}`)
message.replyNoMention(mod)
  }
    if (args[0] == 'talep') {
        const mod = new Discord.MessageEmbed()
.setColor(message.guild.me.displayHexColor)
  .setAuthor(client.user.username, client.user.avatarURL({dynamic:true}))
.setTitle("» **Talep Sistemi Menüsü**")
.setThumbnail(client.user.avatarURL({dynamic:true}))
.setDescription(`
📪 | **${prefix}talep-kanal:** Talep açma kanalının ayarlanması.
📪 | **${prefix}talep-yetkili:** Talep açıldığında kanala belirtilen yetkili rolünü etiketler.
📪 | **${prefix}talep-mesaj:** Talep açma kanalındaki yazının ayarlanması.
📪 | **${prefix}talep-sistemi:** Talep sistemi hakkında sizi bilgilendirir ve sistemin açık olup olmadığını rolleri ve kanallarıyla birlikte gösterir.
`)
    .setFooter(`© 2021 ${client.user.username}`)
message.replyNoMention(mod)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help","yardim","h","y","halp"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
      cooldown: 3      ,
  description: "Botun Komut Listesini Gösterir!",
  usage: "-yardım"
};
