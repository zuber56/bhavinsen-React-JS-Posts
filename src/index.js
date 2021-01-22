const express = require('express')
const mongoose = require("mongoose");
const { MONGOURI } = require('./db/mongoose');
// require('./db/mongoose')
const app = express()
const port = process.env.PORT || 3000

mongoose.connect(MONGOURI,{
    useCreateIndex:true,
    // useFindAndModify
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => console.log("OK")).catch((err) => console.log(err))



const userRouter =require('./router/user')

// app.use()
app.use(express.json())
app.use(userRouter)
app.listen(port, () => {
console.log('Server is up on port ' + port)
})
//app.use(express.json())
//app.use(userRouter)
//const userRouter=require('./router/user')