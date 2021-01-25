const mongoose = require('mongoose')
const validator = require('validator')
//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    
    cust_name: {
        type: String,
        // required: true,
        // trim: true,
        // lowerCase:true,
    },cust_email: {
        type: String,
        // unique:true,
        // trim: true,
        // lowercase: true,
        // validate(value) {
        //     if (!validator.isEmail(value)) {
        //         throw new Error('Email is invalid')
        //     }
        // }
    },
    cust_addrese: {
        type: String,
        // required: true,
    },
    cust_city:{
        type:String
    },cust_mob:{
        type:Number
    },cust_pin:{
        type:Number
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
