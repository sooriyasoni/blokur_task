const express = require('express');
const router = express.Router();
const playlistData = require('../../response/playListJson');

router.get('/', async (req, res) => {
  try {
      res.send(playLiplaylistDatastJson);
  } catch (error) {
    console.log(error);
  }
})

module.exports = router