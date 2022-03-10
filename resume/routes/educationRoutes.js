const User = require("../models/educationSchema")
const express = require("express")
const router =  express.Router()
const app = express();
app.use(express.json());



// post data router

router.post("/postdata",async( req,res)=>{

    try{
const {course,passingYear,percentage} = req.body

const user = await User({
    course,passingYear,percentage
})
user.save()
res.status(200).send(user)
console.log(req.body)



    }catch(err){
        console.log(err)
    }


})


// get data router

router.get("/get", async(req,res)=>{
    const getdata =  await User.find();
    res.send(getdata)

}),

// delete  data router 

router.delete("/delete/:id",(req,res)=>{
    const deleteuser = User.findByIdAndDelete(req.params.id)
    deleteuser.then((deleteuser)=>{
        if(!deleteuser){
            res.send( "invalid id ")
        }else {
            res.send("delete successfuly")
        }

    }).catch((err)=>{
     res.send(err)
    })

})



// update data router

router.patch("/update/:id",(req,res)=>{
    const userupdate =  User.findByIdAndUpdate(req.params.id,req.body,{new:true})

   userupdate.then((userupdate)=>{
       if(!userupdate){
           res.send("user not found, invalid user id")
       }else{
           res.send("successfully updated")
       }
   }).catch((err)=>{
       res.send(err)
     
   })
})


router.get("/edit/:id",async(req,res)=>{

    try{
        const edituser = await  User.findById(req.params.id)
       
        res.send(edituser)
    }catch(err){
        res.send(err)
    }
 

})


module.exports = router
