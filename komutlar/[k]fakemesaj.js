    const Discord = require("discord.js");
    require('discord-replys')
    exports.run = async (client, message, args) => {
      try {
        let kişi = message.mentions.users.first();
        const hataembed = new Discord.MessageEmbed()
          .setColor("RED")
          .setTimestamp()
          .addField("HATA:", "Lütfen Birisini Etiketle ve Bir Yazı Yaz!");
        if (message.mentions.users.size < 1) return message.replyNoMention(hataembed);
        let yazi = args.slice(1).join(" ");
        if (!yazi) return message.replyNoMention(hataembed);

        if (message.content.includes("@everyone")) return message.replyNoMention("Beni Spectre geliştirdi. Zekiyim; mesajın everyone içeremez.");
            if (message.content.includes("@here")) return message.replyNoMention("Beni Spectre geliştirdi. Zekiyim; mesajın here içeremez.");




        message.delete();      
      message.channel
          .createWebhook(kişi.username, {
            avatar: kişi.avatarURL({dynamic:true})
          })
          .then(hook => {
            hook.send(yazi).then(() => hook.delete())
          })
          .catch(console.error);
      } catch (err) {
        console.error(err)
      }
    };

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: "fakemesaj",
      description: "fakemesaj",
          cooldown: 5      ,
      usage: "fakemesaj"
    };
 