const mongoose = require('mongoose');
const personalDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  mobile: {
    type: Number,
    required: true,
    min: 10,
    max: 10,
  },
});

const PersonalDetails = new mongoose.model(
  'PersonDetails',
  personalDetailsSchema
);
module.exports = PersonDetails;
