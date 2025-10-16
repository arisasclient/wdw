const Discord = require('discord.js');
    require('discord-replys')
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents



exports.run = function(client, message, args) {
    var soru = args.join(' ');

    if(!soru) return message.reply('Lütfen bir işlem yazın. Örnek: ``w.hesapla 16*40``')
    else { let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
           if (message.replyNoMention('Hatalı işlem: ' + 'Lütfen çarpma işlemi yaparken \`x\` yerine \` * \` kullanın.')){
             
           } else return
        } 

        message.replyNoMention(`\nİşlem : \`${soru}\`\nCevap: \`${cevap}\``)
          
         }


};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['matematik'],
    kategori: 'eğlence',
  permLevel: 0 
};

exports.help = {
  name: 'hesapla', 
  description: 'Belirtilen işlemi yapar.',
      cooldown: 5      ,
  usage: '!!matematik <işlem>'
};
