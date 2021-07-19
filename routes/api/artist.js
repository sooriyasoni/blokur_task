const express = require('express');
const router = express.Router();
const artistData = require('../../response/artistJson')


router.get('/', async (req, res) => {
  try {
      res.send(artistData);
  } catch (error) {
    console.log(error);
  }
})

module.exports = router