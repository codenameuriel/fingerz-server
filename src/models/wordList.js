const mongoose = require('mongoose');

const WordList = mongoose.model('WordList', {
  category: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true  
  },
  words: {
    type: Array,
    required: true
  }
});

module.exports = WordList;
