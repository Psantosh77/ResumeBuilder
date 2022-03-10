const mongoose = require('mongoose');
const personalDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    max: 255,
  },
  email: {
    type: String,
    min: 6,
    max: 255,
  },
  mobile: {
    type: Number,
  },
});

const PersonalDetails = new mongoose.model(
  'PersonDetails',
  personalDetailsSchema
);
module.exports = PersonalDetails;
