const appRoutes = require('express').Router();
const aboutDetailsSchema = require('../models/aboutSchema');

//CRUD operation to get about Details
//Operation to get about details of all users
appRoutes.get('/getaboutdetails', async (req, res) => {
  try {
    const aboutUsersDetails = await aboutDetailsSchema.find();
    res.status(200).send(aboutUsersDetails);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Operation to post about details of a user
appRoutes.post("/postaboutdetails", (req,res)=>{
    
})

