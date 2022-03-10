const mongoose = require('mongoose');

const aboutSchema = mongoose.Schema({
  about: {
    type: String,
    required: true,
  },
});

const aboutDetails = new mongoose.model('aboutDetails', aboutSchema);
module.export = aboutDetails;
