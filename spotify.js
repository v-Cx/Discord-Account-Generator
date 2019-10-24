const mysql = module.require("mysql");
const Discord = module.require("discord.js");
const talkedRecently = new Set();
const inc = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const connection = mysql.createConnection({
          host            : process.env.MYSQL_HOST,
          user            : process.env.MYSQL_USER,
          password        : process.env.MYSQL_SECRET,
          database        : process.env.MYSQL_DB,
          port            : 3306
    });
    connection.connect(err => {
        if (err) throw err;
        console.log("Database connection successful.");
      console.log(err);
        /*connection.query("SHOW TABLES", console.log);*/
    });
    const preSorgu = connection.query('SELECT mail, pass, accountType FROM table WHERE accountType="Free" OR accountType="Premium" ORDER BY RAND() LIMIT 1 ');
    /*# Description - 1 : Users. when spotify uses the command, the bot connects to the database and takes one account from the table.*/
      let dhLink ="https://discord.gg/HFFc5Mr";
           if (message.member.roles.some(Rol => Rol.id === 'rol-id-1' || 'rol-id-2' || || 'Reproducible')){
           /*#  Description - 2 : The code here is based on the rank of the user . 
                The example has 3 different ranks. Silver Premium Gold. 
                If the user Rank is Premium or Gold, the following commands work.*/
                
                if (talkedRecently.has(message.author.id)) {
                    message.channel.send(message.author + "You can use this command every `48` hours!");
                    /*#  Description - 3 : If the user runs this command more than 1 in 48 hours, we warn the user. */
                } else {
                    talkedRecently.add(message.author.id);
                    setTimeout(() => {
                    }, 172800000 /* Note -1 : 48 Hours You can arrange this part by yourself. 
                                  Hours to milisecond: https://www.timecalculator.net/hours-to-milliseconds */);
                    sorgu.on('result', function (row) {
                        /*#  Description - 4 : We keep the data pulled from the database in variables..*/
                        let mail = row['mail'];
                        let pass = row['pass'];
                        let accountType = row['accountType'];
                        message.reply("Check DM!"); /*#  Description - 5 : We send the message "Check DM" to the channel to which the user is using the command, and then on...*/
                        message.author.send("\n**Mail** ⟹ 〘 " + mail + " 〙\n" + "**Pass** ⟹ ||〘 " + pass + " 〙||" + "\n**Account Type** ⟹ " + accountType
                           +
                            "```➤ v-Cx | Discord Bot -> Premium Account Generator /*This section can be edited*/```"); 
                            /*#  Description - 5 : We send the user account information via bot from a private message.*/
                            
                            /*#  Description - 6 : We open a channel to perform both a body demonstration and a log of the accounts we randomly provide. 
                            And we're printing a share of the given accounts there with the bot.*/
                        let guild = message.guild
                        let reason = args.slice(1).join(' ');
                        let modlog = guild.channels.find('name', 'account-log');
                        if (!modlog) return message.reply('account-log /* Note 2:this section can be edited*/ can't **i find channel.**');
                        const embed = new Discord.RichEmbed()
                            .setColor("#e5bd38")
                            .setTimestamp()
                            .addField('**Action Taken**', 'Account Request')
                            .addField('**Channel**', ` ID ⋙ ${message.channel.id} `)
                            .addField('**Channel**', ` Name ⋙ ${message.channel.name}`)
                            .addField('**User**', `ID ⋙ ${message.author.id}`)
                            .addField('**User**', `Name ⋙ ${message.author.username}`)
                            .addField('**Account Provided (MAİL)**', ` ⋙ ${mail}`)
                            .addField('**Account Provided  (PASS)**', ` ⋙ || HIDDEN ||`) /*Note 3:We're not sharing the password.*/
                            .addField('**Account Provided (TYPE)**', ` ⋙ ${accountType}`)
                            .addField('**Command Used**', ` ⋙ ${message.content.toLocaleUpperCase()}`)
                            .setFooter('© Charon X |', bot.user.avatarURL)
                            .setThumbnail(message.author.avatarURL);

                        return guild.channels.get(modlog.id).send(embed);
                    });
                }

            } else if (message.member.roles.some(Rol => Rol.id === 'silver-rol-id')){ /* /*#  Description - 6 : If the user role is silver, the following lines of code will work.*/
                if (talkedRecently.has(message.author.id)) {
                    message.channel.send(message.author + "You can use this command every `48` hours!");
                } else {
                    talkedRecently.add(message.author.id);
                    setTimeout(() => {
                    }, 172800000);
                    preSorgu.on('result', function (row) {
                        let mail = row['mail'];
                        let pass = row['pass'];
                        let accountType = row['accountType'];
                        message.reply("Check DM!");
                        message.author.send("\n**Mail** ⟹ 〘 " + mail + " 〙\n" + "**Pass** ⟹ ||〘 " + pass + " 〙||" + "\n**Account Type** ⟹ " + accountType
                           +
                            "```➤ v-Cx | Discord Bot -> Premium Account Generator | Join Discord: https://discord.gg/HFFc5Mr  /*This section can be edited*/```");
                            /*#  Description - 8 : We send the user account information via bot from a private message.*/
                            
                            /*#  Description - 9 : We open a channel to perform both a body demonstration and a log of the accounts we randomly provide. 
                            And we're printing a share of the given accounts there with the bot.*/
                        let guild = message.guild
                        let reason = args.slice(1).join(' ');
                        let modlog = guild.channels.find('name', 'account-log');
                        if (!modlog) return message.reply('account-log kanalını bulamıyorum.');
                        const embed = new Discord.RichEmbed()
                            .setColor("#e5bd38")
                            .setTimestamp()
                            .addField('**Action Taken**', 'Account Request')
                            .addField('**Channel**', ` ID ⋙ ${message.channel.id} `)
                            .addField('**Channel**', ` Name ⋙ ${message.channel.name}`)
                            .addField('**User**', `ID ⋙ ${message.author.id}`)
                            .addField('**User**', `Name ⋙ ${message.author.username}`)
                            .addField('**Account Provided (MAİL)**', ` ⋙ ${mail}`)
                            .addField('**Account Provided  (PASS)**', ` ⋙ || HIDDEN ||`)
                            .addField('**Account Provided (TYPE)**', ` ⋙ ${accountType}`)
                            .addField('**Command Used**', ` ⋙ ${message.content.toLocaleUpperCase()}`)
                            .setFooter('© Charon X |', bot.user.avatarURL)
                            .setThumbnail(message.author.avatarURL);

                        return guild.channels.get(modlog.id).send(embed);
                    });
                }

            }else {
                message.reply(new Discord.RichEmbed({description: `In order to access premium account please purchase any rank here: \n<#rankid>`})).then(msg => msg.delete(10000));
              setTimeout(() => {
                message.delete();
                talkedRecently.delete(message.author.id);
            }, 10000);
            }
        }
      }
    
};
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};
module.exports.help ={
    name: 'spotify',
    description: 'Spotify Commands',
    usage: 'spotify'
};
