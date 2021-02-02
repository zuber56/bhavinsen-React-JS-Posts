const mongoose = require('mongoose')
const validator = require('validator')
//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')
var dateFormat = require("dateformat");
const Schema = mongoose.Schema;
var day=dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
const orderSchema = new mongoose.Schema({
    
    ord_name:{
        type:String,
            require:true
        },
    ord_price:{
            type:String
        },
    ord_date:{
            type:Date,
            default:Date.now()
        },
    ord_info:{
            type: Schema.Types.ObjectId,
            ref:'user',
       },
})
const Order = mongoose.model('order', orderSchema)
module.exports = Order

// userSchema.methods.generateAuthToken = async function () {
//     const user = this
//     const token = jwt.sign({ _id: user._id.toString() }, '79cb64190b9e41759f422322b20df0bd6ea00cb2')

//     user.tokens = user.tokens.concat({ token })
//     await user.save()

//     return token
// }
//,tokens: [{
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }]


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
