
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
const database = require('coders.db')

exports.run = async (client, message, args) => {
    const error = (str) => message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Hata').setDescription(str));
  
          let pre = database.get(`premiumMember_${message.author.id}`)

        if(!pre) return message.replyNoMention('HATA: Bu komudu yalnızca Premium Üyeler kullanabilir.').then(a => a.delete({timeout:3500}))


        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.replyNoMention("Yetkiniz Yetmiyor ");
  }
  
  let prefix;
  if (database.has(`prefix_${message.guild.id}`) === true) {
    prefix = database.get(`prefix_${message.guild.id}`);
  }
  if (database.has(`prefix_${message.guild.id}`) === false) {
    prefix = ayarlar.prefix;
  }


    // !aban ban <user> <reason> || !aban <user> <reason> || !aban <user> || !aban unban <user> || !aban liste || !aban sorgu
    const option = args[0];
    const options = ['ban', 'unban', 'liste', 'sorgu'];
  
  if(!args[0]) return message.channel.send(`Bir argüman belirtin: \`${prefix}aban @Kullanıcı Sebep\` | \`${prefix}aban unban ID\` | \`${prefix}aban liste\` | \`${prefix}aban sorgu ID\``)

    const ban = async (user, reason) => {
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return error('Bu işlemi yapabilmek için yeterli yetkim yok.');

        try {
            const executor = await message.author;
            const bans = database.get(`acilmayanBan.laura.${message.guild.id}`) || [];

            if (user.id == executor.id) return error('Kendini banlayamazsın.');
            if (bans.some(ban => ban.user.id == user.id)) return error('Bu kullanıcı zaten açılmayacak bir şekilde banlanmış.');
            if (message.guild.members.cache.has(user.id) && message.guild.members.cache.get(user.id).roles.highest.position >= message.member.roles.highest.position && message.member.id != message.guild.owner.id) return error('Bu kullanıcıyı banlayamazsınız.');
            if (message.guild.members.cache.has(user.id) && !message.guild.members.cache.get(user.id).bannable) return error('Bu kullanıcıyı banlayamam.');

            const banID = database.add(`acilmayanBanID_${message.guild.id}`, 1);

            user.send(new Discord.MessageEmbed().setColor('RED').setDescription(`> (#${banID}) **${message.guild.name}** adlı sunucudan banlandınız. Sebep: **${reason}**`));
            message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`> (#${banID}) **${user.tag}** kişisine açılmayan ban atıldı. Sebep: **${reason}**`));
            message.guild.members.ban(user, { reason });
            database.push(`acilmayanBan.laura.${message.guild.id}`, { id: banID, executor, user, reason, time: new Date() });
        } catch (err) {
            if (err.code == 50035) {
                error(`\`${err.message.split('"')[1]}\` geçerli bir üye veya ID değil.`);
            } else {
                error('Bir hata oluştu.');
                console.log(err);
            }
        };
    };

    const unban = async (user) => {
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return error('Bu işlemi yapabilmek için yeterli yetkim yok.');

        try {
            const executor = await message.author;
            const bans = database.get(`acilmayanBan.laura.${message.guild.id}`) || [];

            if (!bans.some(ban => ban.user.id == user.id)) return error('Bu kullanıcı zaten açılmayan şekilde banlanmamış.');
            if (user.id == executor.id) return error('Kendi banını açamazsın.');

            const ban = bans.find(ban => ban.user.id == user.id);

            user.send(new Discord.MessageEmbed().setColor('RED').setDescription(`> (#${ban.id}) **${message.guild.name}** adlı sunucudan banınız açıldı.`));
            message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`> (#${ban.id}) **${user.tag}** kişisine atılan açılmayan ban açıldı.`));
            message.guild.members.unban(user);

            bans.splice(bans.findIndex(ban => ban.user.id == user.id), 1);
            database.set(`acilmayanBan.laura.${message.guild.id}`, bans);
        } catch (err) {
            if (err.code == 50035) {
                error(`\`${err.message.split('"')[1]}\` geçerli bir üye veya ID değil.`);
            } else {
                error('Bir hata oluştu.');
                console.log(err);
            }
        };
    };

    const list = async () => {
        const bans = database.get(`acilmayanBan.laura.${message.guild.id}`) || [];
        const banneds = bans.map(ban => `${ban.user.tag} (${ban.user.id}) | ${ban.executor.tag} (${ban.executor.id})`).join('\n');

        const embed = new Discord.MessageEmbed().setColor('RED').setDescription(`Toplam **${bans.length}** kişi banlı. Açılmayan banlılar listesini aşağıdaki dosyadan görebilirsiniz.`);
        const attachment = new Discord.MessageAttachment(Buffer.from(banneds + '\n\n\nCodersCode ❤️ Arisa 🌙#0007', 'utf-8'), 'açılmayan-ban-listesi.txt');

        message.channel.send(embed);
        message.channel.send(attachment);
    };

    const query = async (user) => {
        const bans = database.get(`acilmayanBan.laura.${message.guild.id}`) || [];
        const ban = bans.find(ban => ban.user.id == user.id);

        if (!ban) return error('Girilen kullanıcı banlı değil.')

        const infoEmbed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setAuthor(user.tag, user.displayAvatarURL({ dynamic: true }))
            .setDescription(`Bu kullanıcı açılmayacak bir şekilde banlanmış.`)
            .addFields(
                { name: `Moderatör`, value: `${ban.executor.tag}`, inline: true },
                { name: `Üye`, value: `${ban.user.tag}`, inline: true },
                { name: `Sebep`, value: `${ban.reason}`, inline: true }
            ).setFooter(`Ban ID: ${ban.id} | Tarih: ${new Date(ban.time).toDateString('tr-TR')}`);

        message.channel.send(infoEmbed);
    };


    try {
        if (!options.includes(option)) {
            const bans = database.get(`acilmayanBan.laura.${message.guild.id}`) || [];
            const user = await message.mentions.users.first() || await client.users.fetch(args[0])

            if (bans.some(ban => ban.user.id == user.id)) {
                unban(user);
            } else {
                const reason = args.slice(1).join(' ') || 'Sebep belirtilmemiş.';
                ban(user, reason);
            };
        } else if (options.includes(option)) {
            switch (option) {
                case 'ban':
                    var user = await message.mentions.users.first() || await client.users.fetch(args[1]);
                    var reason = args.slice(2).join(' ') || 'Sebep belirtilmemiş.';
                    ban(user, reason);
                    break;
                case 'unban':
                    var user = await message.mentions.users.first() || await client.users.fetch(args[1]);
                    unban(user);
                    break;
                case 'liste':
                    list();
                    break;
                case 'sorgu':
                    var user = await message.mentions.users.first() || await client.users.fetch(args[1]);
                    query(user);
                    break;
                default:

            }
        }
    } catch (err) {
        if (err.code == 50035) {
            error(`\`${err.message.split('"')[1]}\` geçerli bir üye veya ID değil.`);
        } else {
            error('Bir hata oluştu.');
            console.log(err);
        }
    };
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['açılmayanban', 'aban'],
    permLevel: 0
};

exports.help = {
    name: 'açılmayan-ban',
    description: 'açılmayan ban sistemi, laura tarafından yapıldı.'
};

// lauraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
// CodAre 
