const express = require("express");
const port = process.env.PORT || 5000



const app = express();




app.listen(port , ()=>{

    console.log("server is running on port 5000")
})

