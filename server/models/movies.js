const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moviesSchema = new Schema({
    title : String,
    language : String,
    type : String,
    description : String,
    cast : String,
    producers : String,
    directors : String,
    writers : String,
    release_date : String,
})

module.exports = mongoose.model('movies', moviesSchema, 'movies')