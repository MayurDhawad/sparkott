const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send("hello From UserAPI")
})

router.get('/userdata', (req,res)=>{
    User.find({},(err, data)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).send(data)
        }
    })
})

router.get('/userdata/:id', (req,res)=>{
    User.findById(req.params.id, (err, data)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).send(data)
        }
    })
})

router.post('/register', (req,res)=>{
    let userdata = req.body
    let user = new User(userdata)
    user.save((err, registeredUser)=>{
        if(err){
            console.log(err)
        }else{
            let payload = { subject : registeredUser._id}
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).send({token})
        }
    })
})

router.post('/login', (req,res)=>{
    let userdata = req.body
    User.findOne({email: userdata.email},(err,user)=>{
        if(err){
            console.log(err)
        }else{
            if(!user){
                res.status(401).send("Invalid Email")
            }else{
                if(user.password !== userdata.password){
                    res.status(401).send("Invalid Password")
                }else{
                    let payload = { subject : user._id}
                    let token = jwt.sign(payload, 'secretkey')
                    res.status(200).send({token})
                }
            }
        }
    })
})

module.exports = router