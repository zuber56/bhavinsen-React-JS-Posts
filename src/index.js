const express = require('express')
const mongoose = require("mongoose");
const { MONGOURI } = require('./db/mongoose');
require('./router/user')
// require('./db/mongoose')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

mongoose.connect(MONGOURI,{
    useCreateIndex:true,
    // useFindAndModify
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => console.log("OK")).catch((err) => console.log(err))

// app.use(express.JSON())

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/add', function (req, res) {
    res.render("user")
})

app.get('/order',(req,res)=>{
    res.render("order")
})

app.get('/show',(req,res)=>{
    res.render("show")
})

const userRouter =require('./router/user')

// app.use()
app.use(userRouter)
app.listen(port, () => {
console.log('Server is up on port ' + port)
})
//app.use(express.json())
//app.use(userRouter)
//const userRouter=require('./router/user')
