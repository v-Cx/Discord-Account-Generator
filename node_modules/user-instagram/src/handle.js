const scrape = require("./scrape");
const axios = require("axios");

module.exports = (userLink) => {
  userLink = (userLink.includes("instagram.com") ? "" : "https://www.instagram.com/") + userLink;

  return new Promise((resolve, reject) => {
    axios.get(userLink)
      .then(response => {
        scrape(response.data)
          .then(resolve)
          .catch(reject)
      })
      .catch(reject)
  })
};