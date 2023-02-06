const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});





//REGULAR MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// IMPORT ROUTES
const loggerHome = require('./routes/loggerHome');


// ROUTER MIDDLEWARE
app.use('/loggerHome',loggerHome)






app.listen(process.env.PORT,()=>{
    console.log(`server  running at port ${process.env.PORT}`)
    
})