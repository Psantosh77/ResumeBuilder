const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    project:String
})


const Project = new mongoose.model("Project",ProjectSchema);

module.exports = Project