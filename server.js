const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const download = require('download-file');
const fs = require("fs");

const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone:true});
bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
    if(err) console.log(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0){
        console.log("There are no installable script");
        return;
    }
    console.log(`${jsfiles.length} script to load!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}: ${f} Script File => Upload!`);
        bot.commands.set(props.help.name, props);
    });
});


bot.on("ready", async () => {
    bot.user.setActivity(`.help`, {type: "LISTENING"});
    console.log(`${bot.user.username}  bot ready!`);
});


bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    if (/(?:https?:\/)discord(?:app.com\/invite|.gg)/gi.test(message.content)) {
        message.delete();
        return;
        /*
           Blocks/deletes shared discord invitation links within the server.
       */
    }

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if (!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    const talkedRecently = new Set();
    if (cmd) cmd.run(bot, message, args);
    if(!bot.commands.get(command.slice(prefix.length))) {
      
      message.reply(new Discord.RichEmbed({description: "I have no such command.To see commands use the **.help** command."})).then(msg => msg.delete(10000));
              setTimeout(() => {
                  message.delete();
                  talkedRecently.delete(message.author.id);
              }, 10000);
    }
});

bot.login(botSettings.token);*/
