
exports.run = async (client, message, args) => {
  let data = require('coders.db')
          let pre = data.get(`premiumMember_${message.author.id}`)
    if (!pre) return message.replyNoMention('HATA: Bu komutu yalnızca Premium Üyeler kullanabilir.').then(a => a.delete({timeout:3500}))
    const istek =  message.content.split(" ").slice(1).join(" ").trim()
    if(!istek) return message.replyNoMention("Yapay zekadan ne istediğini ingilizce şekilde girmelisin!")

    const {
        Configuration,
        OpenAIApi
    } = require("openai");

    const configuration = new Configuration({
        apiKey: process.env.openAI,
    });
    const openai = new OpenAIApi(configuration);

    async function makeAsync() {
        const response = await openai.createCompletion("text-davinci-001", {
            prompt: `Kullanici: ${istek}\nJavascript chatbot:\n\n`,
            temperature: 0.7,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
            stop: ["Kullanici:"],
        });
        message.replyNoMention("```js\n" + response.data.choices[0].text +  "```")
    }
    makeAsync()
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["openai"],
    permLevel: 0
};
exports.help = {
    name: "openai",
  cooldown: 10,
    description: "openai işte",
    usage: "openai <istek>"
};