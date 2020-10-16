const express = require('express');
const router = new express.Router();
const WordList = require('../models/wordList');

router.post('/wordlists', async (req, res) => {
  const wordList = new WordList(req.body);

  try {
    await wordList.save();
    res.status(201).send(wordList);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;