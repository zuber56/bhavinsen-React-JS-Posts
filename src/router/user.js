const express=require('express')
const User =require('../models/user')
const router = new  express.Router()
// const validator=require('validator')
const bodyParser = require('body-parser')
const app = express()
// const e = require('express')

// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.post("/add",async (req,res)=> {
    try {
    console.log("LLKKDKD", req.body)
    const cust_name = req.body.cust_name;
    const cust_email = req.body.cust_email;
    const cust_addrese = req.body.cust_addrese;
    const cust_mob=req.body.cust_mob
    const cust_city=req.body.cust_city
    const cust_pin=req.body.cust_pin;

    const user = new User(req.body)
        await user.save()
        console.log('--------------->'+cust_name,cust_email,cust_mob,cust_addrese,cust_city,cust_pin)
        // res.redirect('/add');
        res.send("Success")
     } catch (error) {
         console.log("$)$)$", error)
        res.status(400).send(error)
     }
})





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