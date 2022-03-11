const express = require("express");
const projectrouter = express.Router();
const Project = require("../models/projectSchema");

const app = express();

app.use(express.json());

// post data router

projectrouter.post("/projectpost", async (req, res) => {
  const { project } = req.body;
  try {
    const projectpost = await Project({
      project,
    });

    projectpost.save();
    res.send(projectpost);
  } catch (err) {
    res.send(err);
  }
});

// get data router

projectrouter.get("/projectget", async (req, res) => {
  try {
    const getproject = await Project.find();
    res.send(getproject);
  } catch (err) {
    res.send(err);
  }
});

// delete data router

projectrouter.delete("projectdelete/:id", async (req, res) => {
  try {
    const projectdelete = await Project.findByIdAndDelete(req.params.id);

    projectdelete.then((projectdelete) => {
      if (!projectdelete) {
        res.send("not data found ");
      } else {
        res.send("successfuly deleted");
      }
    });
  } catch (err) {
    res.send(err);
  }
});

//update data router

projectrouter.patch("/projectupdate/:id", async (req, res) => {
  const projectupdate = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  try {
    projectupdate.then((projectupdate) => {
      if (!projectupdate) {
        res.send("invalid data ");
      } else {
        res.send("successfully updated");
      }
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = projectrouter;
