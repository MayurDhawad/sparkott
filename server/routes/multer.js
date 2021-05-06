const express = require('express')
const multer = require('multer')
const path = require('path')
const router = express.Router()

const storage = multer.diskStorage({
    destination : (req, file, cb)=> {
        cb(null, 'upload')
    }, 
    filename : (req, file, cb) => {
        cb(null, Date.now+ '.'+ file.originalname)
    }
})

const upload = multer({ storage : storage})

router.post('/upload', upload.single('avtar'), (req,res)=>{
    console.log(res)
})

router.get('/',(req,res)=>{
    console.log("Hello")
})


module.exports = router

