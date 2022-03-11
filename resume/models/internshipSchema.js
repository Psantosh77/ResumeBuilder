const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema({
  internship: String,
});

const Internship = new mongoose.model("Internship", internshipSchema);

module.exports = Internship;
