const express = require("express");
const prorouter =  express.Router()
const Project= require("../models/projectSchema")


const app = express();

app.use(express.json());

// post data router

prorouter.post("/propost", async(req,res)=>{

    const {project}= req.body
try{
    const projectpost = await Project({
     project

    })

    projectpost.save();
res.send(projectpost)
}catch(err){
    res.send(err)
   
}

})


// get data router

prorouter.get("/proget", async(req,res)=>{
    try{
        const getproject = await Project.find()
        res.send(getproject)
    }catch(err){
        res.send(err) 
    }
  
})


// delete data router


prorouter.delete("prodelete/:id",async(req,res)=>{
    try{
        const prodelete =await Project.findByIdAndDelete(req.params.id);

        prodelete.then((prodelete)=>{
            if(!prodelete){
                res.send("not data found ")
            }else{
                res.send("successfuly deleted")
            }

        })


    }catch(err){
        res.send(err)
    }
   

})


//update data router


prorouter.patch("/proupdate/:id",async(res,req)=>{
    const proupdate = await Project.findByIdAndUpdate(req.params.id,req.body,{new:true});
try{
    proupdate.then((proupdate)=>{
        if(!proupdate){
            res.send("invalid data ")
        }else{
            res.send("successfully updated")
        }
            }
            )   
}

catch(err){
    res.send(err)
}


})


module.exports = prorouter