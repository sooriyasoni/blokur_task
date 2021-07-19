const express = require('express');
const router = express.Router();
const SpotifyWebApi = require('spotify-web-api-node');
const constants = require('../../constants');
const spotify = new SpotifyWebApi();

router.get('/', async (req, res) => {
  try {
    await spotify.setAccessToken(constants.ACCESS_TOKEN);
    var artist = await spotify.getArtist(constants.ARTIST_ID);
    if(artist)
      res.send(artist.body);
  } catch (error) {
    console.log(error);
  }

})

module.exports = router