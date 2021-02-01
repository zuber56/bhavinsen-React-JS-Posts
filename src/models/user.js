const mongoose = require('mongoose')
const validator = require('validator')
//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    
    cust_email: {
        type: String,
         unique:true,
         required:true,
         trim:true,
         isEmail:true,
         normalizeEmail:true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
               }
        }
    },
    cust_addrese: {
        type: String,
         required: true,
    },
    cust_city:{
        type:String,
        required:true
    },cust_mob:{
        type:Number,
        required:true,
        maxlength: 10
    },cust_pin:{
        type:Number,
        required:true,
        minlength:6
    }

})
const User = mongoose.model('user', userSchema)
module.exports = User



    // password: {
    //     type: String,
    //     required: true,
    //     minlength: 7,
    //     trim: true,
    //     validate(value) {
    //         if (value.toLowerCase().includes('password')) {
    //             throw new Error('Password cannot contain "password"')
    //         }
    //     }
    // },
