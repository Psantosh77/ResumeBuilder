const express = require("express");
const internshiprouter = express.Router();
const Internship = require("../models/internshipSchema");

const app = express();

app.use(express.json());

// post data router

internshiprouter.post("/internshippost", async (req, res) => {
  const { internship } = req.body;
  try {
    const internshippost = await Internship({
      internship,
    });

    internshippost.save();
    res.send(internshippost);
  } catch (err) {
    res.send(err);
  }
});

// get data router

internshiprouter.get("/internshipget", async (req, res) => {
  try {
    const getinternship = await Internship.find();
    res.send(getinternship);
  } catch (err) {
    res.send(err);
  }
});

// delete data router

internshiprouter.delete("/internshipdelete/:id", (req, res) => {
  const internshipdelete = Internship.findByIdAndDelete(req.params.id);
  internshipdelete
    .then((internshipdelete) => {
      if (!internshipdelete) {
        res.send("invalid id ");
      } else {
        res.send("delete successfuly");
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

//update data router

internshiprouter.patch("/internshipupdate/:id", async (req, res) => {
  const internshipupdate = await Internship.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  try {
    internshipupdate.then((internshipupdate) => {
      if (!internshipupdate) {
        res.send("invalid data ");
      } else {
        res.send("successfully updated");
      }
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = internshiprouter;
