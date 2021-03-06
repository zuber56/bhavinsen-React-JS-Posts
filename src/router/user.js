const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const validator = require('validator')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')
const { get } = require('mongoose')
const app = express()
///

const nodemailer = require('nodemailer');
//const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();

app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const urlencoded = bodyParser.urlencoded({ extended: true })
router.post("/add", urlencoded, [

  check('cust_mob', 'This mobile no is invalid ')
    .exists()
    .isLength({ min: 10 }),
  check('cust_email', 'Email is not valid')
    .isEmail()
    .normalizeEmail(),
  check('cust_pin', 'this pin no is invalid proper you 6 digit')
    .exists()
    .isLength({ min: 6 })
], async (req, res) => {

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    // return res.status(422).jsonp(errors.array())
    const alert = errors.array()
    res.render('user', {
      alert
    })
  }
  try {
    const cust_email = req.body.cust_email;
    const cust_addrese = req.body.cust_addrese;
    const cust_mob = req.body.cust_mob;
    const cust_city = req.body.cust_city;
    const cust_pin = req.body.cust_pin;
    let errors = [];


    if (!cust_email) {
      res.render('user', { message: 'email is required' });
    }
    if (!cust_addrese) {
      res.render('user', { message: 'Address is required' });

    }
    if (!cust_mob) {
      res.render('user', { message: 'mobile is required ' });

    }
    if (!cust_city) {
      res.render('user', { message: 'city is required' });
    }
    if (!cust_pin) {
      res.render('user', { message: 'pin is required' });

    }
    const mybodydata = {
      cust_email,
      cust_addrese,
      cust_mob,
      cust_city,
      cust_pin

    }
    const data = User(mybodydata)
    User.findOne({ cust_email: cust_email }).then(user => {
      if (user) {
        //errors.push({ message: 'Email already exists' });
        res.render('user', {
          cust_email,
          cust_addrese,
          cust_mob,
          cust_city,
          cust_pin,
          msg: 'Email already exists'
        });
      }
    })
    User.findOne({ cust_mob: cust_mob }).then(user => {
      if (user) {
        //errors.push({ message: 'Email already exists' });
        res.render('user', {
          cust_email,
          cust_addrese,
          cust_mob,
          cust_city,
          cust_pin,
          msg: 'Mobile no already exists'
        });
      }
    })
    User.findOne({ cust_pin: cust_pin }).then(user => {
      if (user) {
        //errors.push({ message: 'Email already exists' });
        res.render('user', {
          cust_email,
          cust_addrese,
          cust_mob,
          cust_city,
          cust_pin,
          message: 'your pin is not a match plz 6 digit required'
        });
      }
    })

    ////



    ///
    data.save().then((data) => {
      //res.render('user',{msg: 'Successefully Register'});
     
      //--------------
      console.log(data)
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'zuberkhan5688@gmail.com',
          pass: 'Zuber@007'
        }
      });
      
      var mailOptions = {
        from: 'zuberkhan5688@gmail.com',
        to: req.body.cust_email,
        subject: req.body.cust_email,
        text: 'Order no'+req.body._id,
        html: "<h1>pizza dilvery : "+req.body.cust_addrese+"</h1>"+"\n<h2> Mobile No : "+req.body.cust_mob+"</h2>\n<h3>Pin No : "+ req.body.cust_pin +"</h3>\n<h4>City :"+req.body.cust_city

      };
      console.log(mailOptions)
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
       res.render('user')
      //----------------------
      //res.redirect('mail')
      // res.send('/send')
    }).catch((error) => {
      res.send({
        status: 400,
        error: "something went wrong"
      })
    })
  }
  catch (error) {
    res.send({
      status: 400,
      error: 'something went wrong'
    })
  }

  //   try {

  //       const mybodydata={
  //            cust_email:req.body.cust_email,
  //            cust_addrese :req.body.cust_addrese,
  //            cust_mob:req.body.cust_mob,
  //            cust_city:req.body.cust_city,
  //            cust_pin:req.body.cust_pin

  //       }
  //       const data = User(mybodydata)

  //  // const user = new User(req.body)
  //       await data.save(data)
  //       console.log('--------------->'+data)    
  //       //req.flash('message', 'saved successfully');
  //       //res.render('user/create')
  //       res.render('user',{message: 'Registered successfully!'});
  //       res.redirect("/user");

  //    } catch (error) {

  //       res.status(400).send(error)
  //    }
})


/*show data only testing maate che*/
router.get('/show', function (req, res) {
  User.find()
  .then((users) => {
    res.render('show', { users: users });
  }).catch((error) => {
    res.send({
      status: 400,
      error: "page card mething want wrong"
    })
  })
});
// ************* All Post With Pagignation ***************
router.get("/allpost", async (req, res) => {
  let qpage = req.query.page;
  const pages = qpage * 9 - 9;
  try {
      await User
          .find()
          .populate('user').
           populate('order').
           exec()
          .skip(pages)
          .limit(9)
          .then((data) => {
              data.map((post) => {
                  return post.Postedby.lastlogin = '', post.Postedby.Password = '', post.Postedby.tokens = []
              })
              User
                  .find()
                  .countDocuments()
                  .then((num) => {
                      res.status(200).send({ doc: num, oreder: order });
                  });
          });
  } catch (error) {
      res.status(400).json({ error: "Error in fetch data" });
  }
});


/* DELETE User BY ID */

/* DELETE User BY ID */
router.get('/deleteshow/:id', function (req, res) {
  User.findByIdAndRemove(req.params.id).then((users) => {
    //  res.render('card')
    res.redirect('../show');
  }).catch((error) => {
    res.send({
      status: 400,
      error: "page card mething want wrong"
    })
  })
});

// app.all('/express-flash', (req, res ) {
//     req.flash('success', 'This is a flash message using the express-flash module.');
//     res.redirect(301, '/');
//   })
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

module.exports = router