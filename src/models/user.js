const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema;

//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    
    cust_email: {
        type: String,
        required:true,
       
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
    },
     cust_info:[{
        type: Schema.Types.ObjectId,
        ref:'order',
    }]

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
