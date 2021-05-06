const mongoose = require('mongoose')

const db = process.env.DATABASE

mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology:true,useFindAndModify:false}, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Connected to MongoDB")
    }
})