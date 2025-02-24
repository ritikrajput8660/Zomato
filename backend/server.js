const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000


app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("server is runnning on port "+PORT)
})

