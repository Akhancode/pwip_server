const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});



// IMPORT ROUTES
const home = require('./routes/home');
// ROUTER MIDDLEWARE
app.use('/home',home)






app.listen(process.env.PORT,()=>{
    console.log(`server  running at port ${process.env.PORT}`)
    
})