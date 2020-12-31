
# Before Begin
It is a bot I wrote for Discord. You can review the details of what you can do with this bot below.

## Contents

 - [Installation](#installation)
 - [Usage](#usage)
	 - [token](#token)
	 - [prefix](#prefix)
	 - [bId](#bId)
	 - [accountChannel](#accountChannel)
	 - [insChannel](#insChannel)
 - [.env](#env)
 - [Images Within The Application](#screen)

<h1 id="installation">Installation</h1>

To download all files to your workspace;

```gh
git clone https://github.com/v-Cx/Discord-Account-Generator.git
```
[![ForTheBadge uses-js](http://ForTheBadge.com/images/badges/uses-js.svg)](http://ForTheBadge.com)

<h2 id="usage">Usage</h2>

#### Main Points You Should Arrange

```javascript
{
    "token" : "SERVER TOKEN",
    "prefix" : "Prefix that you want to use",
    "bId" : SERVER ID,
    "accountChannel" : ACCOUNT CHANNEL ID,
    "insChannel" : INSTAGRAM CHANNEL ID,
}
```

<h3 id="token">token</h3>
Paste the token you received from the Discord developer portal for your server here.

[Discord Developer Portal](https://discord.com/developers/applications/)
*To Get Token;*

1- Select Your Application

2- Click Bot on the left sidebar menu

3- Click the "Click to Reveal Token" link next to the Icon option.

<h3 id="prefix">prefix</h3>
Define your custom prefix.

<h3 id="bid">bId</h3>
Paste your server id here. 
*If you don't know how to make your server ID*
*-Open Settings in Discord -> Click Apparence -> Enable Developer Mode.*
*Right click your own server on the servers listed on the left and click "copy ID".*

<h3 id="accountChannel">accountChannel</h3>
In which channel can users generate accounts using commands?
*Detailed explanation: Create a channel. Example (#generate_channel) Users can now generate accounts using the #generate_channel channel.*

***Developer mode must be turned on.***

*Right click the channel you created and click "copy ID"..*

<h3 id="insChannel">insChannel</h3>

Enter the id of the channel that users query users for Instagram.
***Developer mode must be turned on.***

*Right click the channel you created and click "copy ID"..*

<h1 id="env">.env</h1>

```env
MYSQL_HOST=/* MYSQL HOST */
MYSQL_USER=/* MYSQL USER */
MYSQL_SECRET=/* MYSQL PASS */
MYSQL_DB=/* MYSQL DATABASE */
```

<h3 id="MYSQL_HOST">MYSQL_HOST</h3>

The host where your SQL table is located *(default: localhost)*

<h3 id="MYSQL_USER">MYSQL_USER</h3>

MySQL Username

<h3 id="MYSQL_SECRET">MYSQL_SECRET</h3>

MySQL Password

<h3 id="MYSQL_DB">MYSQL_DB</h3>

MySQL database name

<h1 id="spotifyjs">Spotify.js</h1>

This file contains functions that will respond to the! Spotify command written by the user according to the prefix (example (!)) You specify on your discord server.

If you wish, you can duplicate this file as many as the number of platforms you will give your users. Or you can write a function instead and rearrange it according to the command that the user has written.

<h2 id="screen">Screenshots from within the Discord bot</h2>

![alt text](https://media.discordapp.net/attachments/714991142084804649/794198969533333514/68747470733a2f2f692e6962622e636f2f736d703034625a2f436861726f6e2d426f742d312e706e67.png?width=667&height=554)

[![Website sellthing.co](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://sellthing.co)

[![Discord](https://img.shields.io/discord/591914197219016707.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/PJuYWChV6z)
