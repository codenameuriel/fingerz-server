const express = require('express');
const cors = require('cors');
require('./db/mongoose');
const wordListRouter = require('./routers/wordList');
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(wordListRouter);

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
