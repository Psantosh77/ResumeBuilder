const express = require("express");
const app = express();
port = process.env.PORT || 5000 ,

app.use(express.json());

// app.get("/", (req,res)=>{

//     res.send("hii this is from server side")

// })


 

app.listen(port , ()=>{
    console.log(` server is runnnng at ${port}`)
})