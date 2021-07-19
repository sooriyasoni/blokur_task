const express = require('express');
const router = express.Router();
const SpotifyWebApi = require('spotify-web-api-node');
const constants = require('../../constants');
var spotify = new SpotifyWebApi();

router.get('/', async (req, res) => {
  try {
    await spotify.setAccessToken(constants.ACCESS_TOKEN);
    var playlist = await spotify.getPlaylistTracks(constants.PLAYLIST_ID);
    if(playlist)
      res.send(playlist.body);
  } catch (error) {
    console.log(error);
  }
})

module.exports = router