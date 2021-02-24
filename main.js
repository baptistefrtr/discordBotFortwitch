const Discord = require('discord.js');
const client = new Discord.Client();
const env = require('dotenv').config();

client.on("ready", () => {
    console.log("ready!");
})

client.on("message", msg => {
    let message = msg.content

    console.log(msg.author);
    if (message.startsWith("!")) {
        if (message === "!don-doodzee_") {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Donation ¤ Doodzee_')
                .setURL('https://streamlabs.com/doodzee_/tip')
                .setDescription('Donations pour le meilleur de tout les métaleux')
                .setImage('https://static-cdn.jtvnw.net/jtv_user_pictures/dfa55f70-6baa-4ec9-96cb-9b73b919eeed-profile_image-300x300.png')
                .setTimestamp()
                .setFooter('Venez jouer !', 'https://static-cdn.jtvnw.net/jtv_user_pictures/dfa55f70-6baa-4ec9-96cb-9b73b919eeed-profile_image-300x300.png');

            msg.reply(exampleEmbed);
        }
        if (message === "!don-ccloud__") {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Donation ¤ Ccloud__')
                .setURL('https://streamlabs.com/ccloud__/tip')
                .setDescription('Donations pour le plus gros charo de France et de Navard')
                .setImage('https://static-cdn.jtvnw.net/jtv_user_pictures/b4b7080d-a3af-441a-9438-6317e6bbb07b-profile_image-300x300.png')
                .setTimestamp()
                .setFooter('Venez jouer !', 'https://static-cdn.jtvnw.net/jtv_user_pictures/b4b7080d-a3af-441a-9438-6317e6bbb07b-profile_image-300x300.png');

            msg.reply(exampleEmbed);
        }
        if (message === "!ccloud__") {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Best streamer ca')
                .setURL('https://www.twitch.tv/ccloud__')
                .setDescription('Chaine Twitch du  meilleur de tout les métaleux top tiers')
                .setImage('https://static-cdn.jtvnw.net/jtv_user_pictures/b4b7080d-a3af-441a-9438-6317e6bbb07b-profile_image-300x300.png')
                .setTimestamp()
                .setFooter('Venez jouer !', 'https://static-cdn.jtvnw.net/jtv_user_pictures/b4b7080d-a3af-441a-9438-6317e6bbb07b-profile_image-300x300.png');

            msg.reply(exampleEmbed);
        }
        if (message === "!doodzee_") {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Best streamer ca')
                .setURL('https://www.twitch.tv/doodzee_')
                .setDescription('Chaine Twitch du plus gros charo de France et de Navard')
                .setImage('https://static-cdn.jtvnw.net/jtv_user_pictures/dfa55f70-6baa-4ec9-96cb-9b73b919eeed-profile_image-300x300.png')
                .setTimestamp()
                .setFooter('Venez jouer !', 'https://static-cdn.jtvnw.net/jtv_user_pictures/dfa55f70-6baa-4ec9-96cb-9b73b919eeed-profile_image-300x300.png');

            msg.reply(exampleEmbed);
        }
        if (message === "!clicker") {
            msg.reply("https://jam-2021.web.app/");
        }
        if (message === "!bye") {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Best clicker ever')
                .setURL('https://i.imgur.com/wSTFkRM.png')
                .setDescription('Petit jeu sur navigateur fait par la team admin')
                .setThumbnail('https://i.imgur.com/wSTFkRM.png')
                /*.addFields(
                    { name: 'Regular field title', value: 'Some value here' },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                )*/
                .setImage('https://i.imgur.com/wSTFkRM.png')
                .setTimestamp()
                .setFooter('Venez jouer !', 'https://i.imgur.com/wSTFkRM.png');

            msg.reply(exampleEmbed);
        }
    }
})

client.login(process.env.token);