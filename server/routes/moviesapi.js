const express = require('express')
const movies = require('../models/movies')
const router = express.Router()

router.get('/', (req,res)=>{
    res.status(200).send("Hello from MoviesApi")
})

router.get('/movies', (req,res)=>{
    movies.find({}, (err, movie)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).send(movie)
        }
    })
})

router.get('/movie/:id', (req,res)=>{
    movies.findById(req.params.id, (err, movie)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).send(movie)
        }
    })
})

router.post('/movie', (req,res)=>{
    let moviedata = req.body
    let movie = new movies(moviedata)
    movie.save((err, insertedmovie)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).send(insertedmovie)
        }
    })
})

router.put('/movie/:id', (req,res)=>{
    movies.findByIdAndUpdate(req.params.id,
       {
            $set : {
                        title: req.body.title, 
                        language: req.body.language, 
                        type: req.body.type, 
                        description: req.body.description,
                        cast: req.body.cast, 
                        producers: req.body.producers, 
                        directors: req.body.directors, 
                        writers: req.body.writers, 
                        release_date: req.body.release_date
                    }
       } ,
       {
           new: true
       },
       (err, updatedmovie)=>{
           if(err){
               console.log(err)
           }else{
               res.status(200).send(updatedmovie)
           }
       }
    )
})

router.delete('/movie/:id', (req,res)=>{
    movies.findByIdAndDelete(req.params.id, (err, deletedmovie)=>{
       if(err){
           console.log(err)
       }else{
           res.status(200).json(deletedmovie)
       }
    })
})

module.exports = router