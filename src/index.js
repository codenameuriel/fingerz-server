const express = require('express');
require('./db/mongoose');
const wordListRouter = require('./routers/wordList');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(wordListRouter);


app.listen(port, () => {
  console.log('Listening on port ' + port);
});
