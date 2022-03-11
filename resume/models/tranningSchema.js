const mongoose = require("mongoose");

const TranningSchema = new mongoose.Schema({
  tranning: String,
});

const Tranning = new mongoose.model("Tranning", TranningSchema);

module.exports = Tranning;
