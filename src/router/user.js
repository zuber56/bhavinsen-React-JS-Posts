const express=require('express')
const User =require('../models/user')
const router = new  express.Router()
const validator=require('validator')
const e = require('express')

router.post("/add",(req,res)=> {
    const cust_name = req.body.cust_name;
    const cust_email = req.body.cust_email;
    const cust_addrese = req.body.cust_addrese;
    const cust_pin = req.body.cust_pin;
    
    // if(!cust_name)
    // {
    //     return res.send({
    //         status:401, 
    //         error:"name is required"
    //     })
    //     console.log("name is required")
    //}
    if(!cust_email)
    {
        return res.send({
            status:401, 
            error:"email is required"
        })
        console.log("name is required")
    }
    const user = new User(req.body)
     try {
        const u= user.save()
        console.log(u) 
        res.status(201).send()
     } catch (error) {
        res.status.send(error)
     }

    // const data1 = {cust_name:"ok", cust_email: "Ok2@gmail.com", cust_addrese: "ok", cust_pin: 1}
    // const data = new User(data1)
    // data.save().then((data) => {
    //     console.log("OKKKK")
    // }).catch((err) => {
    //     console.log(err)
    // })
})

module.exports =router