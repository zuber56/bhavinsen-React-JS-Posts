const express=require('express')
//const User=require('../models/user')
const Order=require('../models/order')
const router = new  express.Router()
 const validator=require('validator')
const bodyParser = require('body-parser')

const { check, validationResult } = require('express-validator')
//const User = require('../models/user')
const app = express()

app.use(bodyParser.json());
const urlencoded= bodyParser.urlencoded({extended:true})
router.post("/order",urlencoded,async (req,res)=> {
  
  try{
    const ord_name = req.body.ord_name;
    const ord_price = req.body.ord_price;
  
    if (!ord_name) {
        res.render('order',{message: 'name is required'});
    }
    if (!ord_price) {
        res.render('order',{message: 'Price is required'});
    }
    const mybodydata = {
      ord_name,
      ord_price
  }
    const data = Order(mybodydata)
  
    data.save().then((data) => {
      res.render('order',{message: 'Successefully Register'});
      console.log(data)
    }).catch((error)=>{
      res.send({
        status:400,
        error:"something went wrong"
      })
    })
  }
  catch(error)
  {
    res.send({
      status:400,
      error:'something went wrong'
    })
  }
  
  
  
  
  
  
  
  
  
  
  //   try {
    
  //       const mybodydata={
  //            ord_name:req.body.ord_name,
  //            ord_price:req.body.ord_price,
  //            ord_date:req.body.ord_date
        
  //       }
  //       const data = Order(mybodydata)

  //  // const user = new User(req.body)
  //       await data.save((data))
  //       console.log('--------------->'+data)    
  //      //res.render('order')
  //       res.redirect("/add");
        
  //    } catch (error) {
       
  //       res.status(400).send(error)
  //    }
})


// router.get('/card/:id', function(req, res) {
//     Order.findOne(req.params.id, function (err, users) {
//        if (err) {
//          console.log(err);
//        } else {
//          res.render('user', { order: users });
         
//        }
//    }); 
// });


//

/* GET SINGLE User BY ID */
router.get('/showcard/:id', function(req, res) {
  console.log(req.params.id);
  Order.findById(req.params.id, function(err, user) {
      if (err) {
          console.log(err);
      } else {
          console.log(user);

          res.render('showcard', { order: user });
          //res.redirect('../showcard');
          
      }
  });
});

// 
 router.get('/card', function(req, res) {
  Order.find().then((users)=>{
    res.render('card',{ order: users });
  }).catch((error)=>{
    res.send({
      status:400,
      error:"soddddmething want wrong"
    })
  })
 });


// router.get('/card', function(req, res) {
//     Order.find(function (err, users) {
//        if (err) {
//          console.log(err);
//          console.log('gg')
//        } else {
//          res.render('card', { order: users });
//         // res.send("dddd")
//        }
//    }); 
// });

/* DELETE User BY ID */
router.get('/delete/:id', function(req, res) {
  Order.findByIdAndRemove(req.params.id, function(err, project) {
      if (err) {
        res.render('order')
          //req.flash('error_msg', 'Record Not Deleted');
          //res.redirect('../display');
      } else {

          //req.flash('success_msg', 'Record Deleted');
          res.redirect('../card');
          //res.render('card')
      }
  });
});


module.exports =router
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
