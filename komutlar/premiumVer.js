const Discord = require('discord.js')
const db = require('coders.db')
const ms = require('ms')

exports.run = async (client, message, args) => {
  if (message.author.id !== '457481463294722050') return
  let member = message.mentions.members.first() || client.users.cache.get(args[0])
  if (!member) return message.replyNoMention('HATA: Geçerli bir üye belirtin!')
    db.set(`premiumMember_${member.id}`, true)

  message.react('❤️')
  message.replyNoMention('Üye, başarıyla premium kategorisine alındı.')
}

exports.conf = {
  aliases: ["premiumver","pre-ver","pre","p"]
}

exports.help = {
  name: "premium-ver"
}