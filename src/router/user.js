const express=require('express')
const User =require('../models/user')
const router = new  express.Router()
 const validator=require('validator')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')
const app = express()

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
const urlencoded= bodyParser.urlencoded({extended:true})
router.post("/add",urlencoded,async (req,res)=> {
    try {
    
        const mybodydata={
             cust_name:req.body.cust_name,
             cust_email:req.body.cust_email,
             cust_addrese :req.body.cust_addrese,
             cust_mob:req.body.cust_mob,
             cust_city:req.body.cust_city,
             cust_pin:req.body.cust_pin
        
        }
        const data = User(mybodydata)

   // const user = new User(req.body)
        await data.save(data)
        console.log('--------------->'+data)    
         res.render('user')
      
     } catch (error) {
        //console.log("$)$)$", error)
        res.status(400).send(error)
     }
})

// if(!cust_name)
// {
//     check('cust_name','musut be 3+')
//     .exists()
//     .isLength({min:3})
//     return res.send({
//         status:401, 
//         error:"name is required",
//     })
// }
// if(!cust_name){
//     check('cust_name','it must 3 character greather thren')
//    .exists()
//    .isLength({min:3})
//    const errors = validationResult(req)
//    if(!errors.isEmpty()){
//        return res.status(422).jsonp(errors.array())
//    }
//    console.log('dfdfdfd')
// }




  // check('cust_name','This username must be +3 character long')
            // .exists()
            // .isLength({min:3})

//static data insert 
    // const data1 = {cust_name:"ok", cust_email: "Ok2@gmail.com", cust_addrese: "ok", cust_pin: 1}
    // const data = new User(data1)
    // data.save().then((data) => {
    //     console.log("OKKKK")
    // }).catch((err) => {
    //     console.log(err)
    // })



// condition
// if(!cust_name)
    // {
    //     return res.send({
    //         status:401, 
    //         error:"name is required"
    //     })
    //     console.log("name is required")
    //}
    // if(!cust_email)
    // {
    //     return res.send({
    //         status:401, 
    //         error:"email is required"
    //     })
    //     console.log("name is required")
    // }

module.exports =router