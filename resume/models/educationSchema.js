const mongoose = require("mongoose");

const Education = new mongoose.Schema({
  course: {
    type: String,
    required: true,
  },
  passingYear: {
    type: Number,
  },
  percentage: Number,
});

const User = new mongoose.model("User", Education);

module.exports = User;
