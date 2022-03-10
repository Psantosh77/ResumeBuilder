const express = require('express');
const app = express();
require('./db/connection');
const personalDetailsRoutes = require('./routes/personalDetailsRoutes');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(personalDetailsRoutes);
app.use(skillRoutes);
app.listen(PORT, () => {
  console.log('listening...');
});
