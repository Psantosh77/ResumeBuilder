const appRoutes = require('express').Router();
const PersonalDetailsSchema = require('../models/personalDetailsSchema');

//CRUD operations for Personal Details
////Operation to get personal details of all users
appRoutes.get('/getpersonaldetails', async (req, res) => {
  try {
    const allUsersDetails = await PersonalDetailsSchema.find();
    res.status(200).send(allUsersDetails);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Operation to create personal details of a user
appRoutes.post('/postpersonaldetails', (req, res) => {
  const personalDetails = new PersonalDetailsSchema(req.body);
  personalDetails
    .save()
    .then((personalDetails) => {
      res.status(200).send(personalDetails);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//Operation to delete personal details of users
appRoutes.delete('/deletepersonaldetails/:id', (req, res) => {
  const personalDetails = PersonalDetailsSchema.findByIdAndDelete(
    req.params.id
  );
  personalDetails
    .then((personalDetails) => {
      if (!personalDetails) {
        res.status(500).send('invalid id');
      } else {
        res.status(204).send('Successfully deleted');
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//Operation to update personal details of users
appRoutes.patch('/updatepersonaldetails/:id', (req, res) => {
  const personalDetails = PersonalDetailsSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  personalDetails
    .then((personalDetails) => {
      if (!personalDetails) {
        res.status(500).send('invalid id');
      } else {
        res.status(204).send('successfully updated');
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = appRoutes;
