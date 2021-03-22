const Discord = require('discord.js');
const client = new Discord.Client();
const env = require('dotenv').config();
const axios = require("axios");

client.on("ready", () => {
    console.log("ready!");
})

client.on("message", msg => {
    let message = msg.content
    var string = message.split(" ")

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
        if (message === "!minecraft") {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Comment rejoindre le serveur ?')
                .setURL('https://www.twitch.tv/ccloud__')
                .setDescription('IP : la-sainte-chemise.minesr.com\n\nVersion: 1.16.5\n\nPrenium: Oui')
                .setTimestamp()
                .setFooter('Venez jouer !', 'https://static-cdn.jtvnw.net/jtv_user_pictures/b4b7080d-a3af-441a-9438-6317e6bbb07b-profile_image-300x300.png');

            msg.reply(exampleEmbed);
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
        if (string[0] === "!live") {
            let config = {
                headers: {
                    "Authorization": "Bearer " + process.env.VUE_APP_TWITCH_ACCESS_TOKEN,
                    "Client-ID": process.env.VUE_APP_TWITCH_API_KEY
                }
            }
            axios.get("https://api.twitch.tv/helix/users?login=" + string[1], config).then((response) => {
                if (response.status === 200 && response.data.data[0]) {
                    //console.log(response.data.data[0].id);
                    let id = response.data.data[0].id;
                    if (id) {
                        let config = {
                            headers: {
                                "Accept": "application/vnd.twitchtv.v5+json",
                                "Client-ID": process.env.VUE_APP_TWITCH_API_KEY
                            }
                        }
                        axios.get("https://api.twitch.tv/kraken/streams/" + id, config).then((response) => {
                            //console.log(response.data.stream);
                            if (response.data.stream != null) {
                                let message = response.data.stream.channel.display_name + " is now streaming !\nThe stream is actually in the category " + response.data.stream.channel.game + " for a total of " + response.data.stream.viewers + " viewers.\nThe title of the live is '" + response.data.stream.channel.status;
                                console.log(message);
                                const exampleEmbed = new Discord.MessageEmbed()
                                    .setColor('#0099ff')
                                    .setTitle(response.data.stream.channel.display_name)
                                    .setURL(response.data.stream.channel.url)
                                    .setDescription(message)
                                    .setImage(response.data.stream.channel.logo)
                                    .setTimestamp()
                                    .setFooter('Venez jouer !', response.data.stream.channel.logo);

                                msg.reply(exampleEmbed);
                            } else {
                                console.log("STREAM OFFLINE");
                            }
                        }).catch((error) => console.log(error))
                    }
                }
            }).catch((error) => console.log(error))
        }
    }
})

client.login(process.env.token);