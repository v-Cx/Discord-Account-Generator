# Node-Instagram
[![NPM](https://nodei.co/npm/user-instagram.png)](https://nodei.co/npm/user-instagram)  

## Introduction
The aim of this module is to provide an easy way to retrieve a user's Instagram data.  
This module is available on NPM.
```
npm install user-instagram
```

## Usage

I tried to make this module user-friendly as much as I could. Just provide a username or a profile link.
  > edouard_courty  
  > https://www.instagram.com/edouard_courty

```js
const getInstaProfile = require("user-instagram");

getInstaProfile("edouard_courty")
  .then(userData => {
    console.log(userData.user)
  })
  .catch(console.error);
```

## Data Structure

The output will look like the following:
```json
{
  "profileLink": "https://www.instagram.com/edouard_courty",
  "subscriberCount": 444,
  "subscribtions": 362,
  "postCount": 27,
  "username": "edouard_courty",
  "isPrivate": false,
  "isVerified": false,
  "fullName": "Edouard Courty",
  "bio": "<userBio",
  "id": "<userId>",
  "avatar": "<avatarThumbnailLink>",
  "avatarHD": "<HDAvatarLink>",
  "posts": []
}
```
This module uses ES6 Promises.

© 2020 - Edouard Courty