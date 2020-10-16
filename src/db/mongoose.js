const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fingerz-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Database Connected'))
  .catch(error => console.log(error));
