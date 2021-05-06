const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    cnfpassword: String
})

module.exports = mongoose.model('user', UserSchema, 'users')
