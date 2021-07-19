const express = require('express');
const router = express.Router();
const categoryData = require('../../response/category')

router.get('/', async (req, res) => {
  try {
      res.send(categoryData);
  } catch (error) {
    console.log(error);
  }

})

module.exports = router