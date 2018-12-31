require("dotenv").config();
// console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

// console.log("HERE",process.env.SPOTIFY_ID)