const express = require("express");
const trouter =  express.Router()
const Tranning = require("../models/tranningSchema")


const app = express();

app.use(express.json());

// post data router

trouter.post("/tpost", async(req,res)=>{

    const {tranning}= req.body
try{
    const tranningpost = await Tranning({
      tranning 

    })

    tranningpost.save();
res.send(tranningpost)
}catch(err){
    res.send(err)
   
}

})


// get data router

trouter.get("/tget", async(req,res)=>{
    try{
        const gettanning = await Tranning.find()
        res.send(gettanning)
    }catch(err){
        res.send(err) 
    }
  
})


// delete data router


trouter.delete("tdelete/:id",async(req,res)=>{
    try{
        const tdelete =await Tranning.findByIdAndDelete(req.params.id);

        tdelete.then((tdelete)=>{
            if(!tdelete){
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


trouter.patch("/tupdate/:id",async(res,req)=>{
    const tupdate = await Tranning.findByIdAndUpdate(req.params.id,req.body,{new:true});
try{
    tupdate.then((tupdate)=>{
        if(!tupdate){
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


module.exports = trouter