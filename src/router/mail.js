const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const app = express()
require('dotenv').config();


//===========================================



module.exports = router;
//===========================================
//--------------

    // //   let transporter = nodemailer.createTransport(mailGun(){
    // //     service: 'gmail',
    // //     auth: {
    // //         api_key:'pubkey-49f986b2dafc4370778ac41fdd45dee7',
    // //         domain:'sandbox036f57b88175427780435b6d05468ac3.mailgun.org'
    // //     }
    // // });
    // const auth = {
    //     auth: {
    //            //api_key:'pubkey-49f986b2dafc4370778ac41fdd45dee7',  // TODO: Replace with your mailgun API KEY
    //            //domain:'sandbox036f57b88175427780435b6d05468ac3.mailgun.org' // TODO: Replace with your mailgun DOMAIN
    //             user:'zuberkhan5688@gmail.com',
    //             pass:'Zuber@007'
    //      //      api_key: process.env.API_KEY ||  'MAIL_GUN_API_KEY', // TODO: Replace with your mailgun API KEY
    //        //    domain: process.env.DOMAIN || 'MAIL_GUN_DOMAIN' 
    //       }
    // };
    //   const transporter =nodemailer.createTransport(mailGun(auth));
        
    //   var mailOptions = {
    //     from:req.body.cust_email,
    //     to:  'zuberkhan5688@gmail.com',
    //     subject: 'Plbants Feedback',
    //     text: req.body.cust_addrese 
    //   };
    //   console.log(mailOptions)
    //   transporter.sendMail(mailOptions,(err,res)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else {
    //       console.log('send email')
    //     }
    //   });