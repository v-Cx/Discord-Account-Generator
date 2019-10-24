const Discord = require("discord.js");

module.exports.run = function(client, message) {
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('» **Commands Available to Users!')
        .setTimestamp()
        .addField('⤇ Spotify', '```css\n .spotify```')
        .setFooter('© DarkHia | Premium World!', client.user.avatarURL)
        .setThumbnail(client.user.avatarURL);
    message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'help',
    description: 'Commands!',
    usage: 'help'
};
