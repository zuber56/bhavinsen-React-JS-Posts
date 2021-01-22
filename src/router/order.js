const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    
    Order:{
        type:String,
            require:true
        },
        Category:{
            type:String,
            require:true
        },
        Price:{
            type:Number,
            required:true
        },
        Date:{
            type:Date,
            default:Date.now()
        }

})
const User = mongoose.model('User', userSchema)
module.exports = User

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
