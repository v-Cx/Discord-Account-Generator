####### BONUS #######



const Discord = require('discord.js');
const instagram = require("user-instagram");
const talkedRecently = new Set();
const inc = require("../botsettings.json");


exports.run = (client, message, args) => {
    if (message.channel.id != inc.insChannel) return message.reply(`This command is only ${inc.insChannelStr} available on the Channel.`).then(msg => msg.delete(4000) + message.delete());
        if (talkedRecently.has(message.author.id)) {
            return message.channel.send(message.author + "You can use this command once every `48` hours!");
        } else {
            talkedRecently.add(message.author.id);
            setTimeout(() => {
                message.delete();
                talkedRecently.delete(message.author.id);
            }, 86400000);
        }
        let iUserName = args.join(' ');
        if(!iUserName) return message.reply(`You did not enter a username!`);

        instagram('https://www.instagram.com/' + iUserName)
            .then(data => {

                const bio = (data.bio.length === 0 ? 'Empty' : data.bio);
                const iName = (data.fullName.length === 0 ? 'Empty' : data.fullName);

                let iSecret;
                let iVerifed;

                if (data.isPrivate === false) iSecret = "No";
                if (data.isPrivate === true) iSecret = "Yes";
                if (data.isVerified === false) iVerifed = "No";
                if (data.isVerified === true) iVerifed = "Yes";

                const embed = new Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setAuthor(`${iUserName} Information About User Instagram Account`)
                    .setThumbnail(`${data.avatarHD}`)
                    .addField('Full Name', '**' + iName +'**')
                    .addField('Followers Count', `** ${data.subscriberCount} **`)
                    .addField('Number of people followed', `** ${data.subscribtions} **`)
                    .addField('Posts Counts', `** ${data.postCount} **`)
                    .addField('Bio', '**' + bio + '**')
                    .addField('ID', `** ${data.id} **`)
                    .addField('Profile hidden?', `** ${iSecret} **`)
                    .addField('Is the profile verify ?', `** ${iVerifed} **`)
                    .addField('Profile Link', `${data.profileLink}`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} was requested by.`, message.author.avatarURL);

                message.channel.send(embed);
            })
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'ins',
    description: 'Provides information about the specified instagram account.',
    usage: 'ins <user name>'
};
