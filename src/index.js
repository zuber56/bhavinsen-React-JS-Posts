const express = require('express')
const User =require('./models/user')
const mongoose = require("mongoose");
const { MONGOURI } = require('./db/mongoose');

//require('./router/user')
// require('./db/mongoose')



////
const session = require('express-session'); 
//const flash = require('flash');
const flash = require('connect-flash');
 
///
const app = express()
const port = process.env.PORT || 3000
app.use(session({ 
    secret:'secret',
    cookie:{maxAge:6000} , 
    saveUninitialized: true, 
    resave: false
}));
app.use(flash());
app.use(express.json()) 
mongoose.connect(MONGOURI,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => console.log("OK")).catch((err) => console.log(err))

// app.use(express.JSON())

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/add', function (req, res) {
    res.render("user",{message:req.flash('message')});
})  
app.get('/order', function (req, res) {
    res.render("order",{message:req.flash('message')});
})  

// app.get('/showcard/:id', function (req, res) {
//     //res.render("user")
//     console.log('fsdfsfdsf')
//     res.render("showcard")
// })  

app.get('/order',(req,res)=>{
    res.render("order")
})


//List Table Data



// var tagline = "No programming concept is complete without a cute animal mascot.";

// app.get('/user',(req,res)=>{
//     var mascots = [
//         { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
//         { name: 'Tux', organization: "Linux", birth_year: 1996},
//         { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
//     ];
//     res.render('show', {
//         mascots: mascots,
//         tagline: tagline
//     });
// })



// app.get('/display',(req,res)=>{
//     res.render("order")
// })


//user
const userRouter =require('./router/user')
const orderRouter=require('./router/order');
const SendmailTransport = require('nodemailer/lib/sendmail-transport');

// app.use()
app.use(userRouter)
app.use('/',orderRouter)
app.listen(port, () => {
console.log('Server is up on port ' + port)
})
//app.use(express.json())
//app.use(userRouter)
//const userRouter=require('./router/user')
