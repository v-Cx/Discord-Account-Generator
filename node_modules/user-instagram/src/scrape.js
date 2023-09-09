const cheerio = require("cheerio");

module.exports = body => {
  return new Promise((resolve, reject) => {
    let $ = cheerio.load(body);

    let scripts = $("script[type='text/javascript']"), graphql;
    try {
      graphql = JSON.parse(
        scripts[3].children[0].data
          .replace("window._sharedData = ", "")
          .replace("};", "}")
      ).entry_data.ProfilePage[0].graphql.user;
    } catch (e) {
      return reject(e)
    }

    return resolve({
      "profileLink": "https://www.instagram.com/".concat(graphql.username),
      "subscriberCount": graphql.edge_followed_by.count,
      "subscribtions": graphql.edge_follow.count,
      "postCount": graphql.edge_owner_to_timeline_media.count,
      "username": graphql.username,
      "isPrivate": graphql.is_private,
      "isVerified": graphql.is_verified,
      "fullName": graphql.full_name,
      "bio": graphql.biography,
      "id": graphql.id,
      "avatar": graphql.profile_pic_url,
      "avatarHD": graphql.profile_pic_url_hd,
      "posts": graphql.edge_owner_to_timeline_media.edges.map(edge => {
        return {
          "id": edge.node.id,
          "captionText": edge.node.edge_media_to_caption.edges.length === 0
            ? null
            : edge.node.edge_media_to_caption.edges[0].node.text,
          "shortcode": edge.node.shortcode,
          "link": `https://www.instagram.com/p/${edge.node.shortcode}`,
          "commentsCount": edge.node.edge_media_to_comment.count,
          "timestamp": edge.node.taken_at_timestamp,
          "likes": edge.node.edge_liked_by.count,
          "location": edge.node.location || null,
          "picture": {
            "url": edge.node.thumbnail_src,
            "thumbnail_150": edge.node.thumbnail_resources[0].src,
            "thumbnail_240": edge.node.thumbnail_resources[1].src,
            "thumbnail_320": edge.node.thumbnail_resources[2].src,
            "thumbnail_480": edge.node.thumbnail_resources[3].src,
            "thumbnail_640": edge.node.thumbnail_resources[4].src
          },
          "isVideo": edge.node.is_video
        }
      })
    })
  })
};
