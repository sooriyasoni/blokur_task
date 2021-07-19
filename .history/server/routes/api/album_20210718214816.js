const express = require('express');
const router = express.Router();
const SpotifyWebApi = require('spotify-web-api-node');
const constants = require('../../constants');
var spotify = new SpotifyWebApi();
const albumData = require('../../response/albumJson')

router.get('/', async (req, res) => {
  try {
    // await spotify.setAccessToken(constants.ACCESS_TOKEN);
    // var album = await spotify.getAlbum(constants.ALBUM_ID)
    // if(album)
      res.send(albumData);
  } catch (error) {
    console.log(error)
  }
})

module.exports = router