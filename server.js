const express = require('express')
const mongoose = require('mongoose')
const app = express()
//cors: mechanism by which a front-end client can make requests for resources to an external back-end server
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION_URL,{useNewUrlParser:true})
const conn = mongoose.connection

conn.on('open',function(){
    console.log('DB connected...');
})

app.get("/",(req,res)=>{
    res.send("Express server is running here");
})

//middleware to loginRouter
const loginRouter = require('./routes/loginRoute');
app.use('/api',loginRouter);

//middleware to jobsRouter
const jobsRouter = require('./routes/jobsRoute');
app.use('/',jobsRouter);

app.listen(5000,function(){
    console.log('Server running on port 5000');
})
