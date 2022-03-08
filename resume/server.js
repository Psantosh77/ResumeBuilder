const express = require('express');
const app = express();
require('./db/connection');
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT, () => {
  console.log('listening...');
});
