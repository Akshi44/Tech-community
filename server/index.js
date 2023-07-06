// the method of importing the mudule is depends upon the type in package.json
// 1.
// "type": "commonjs"
// const express = require('express')

// 2.
// "type": "module"
// import  express  from 'express'


import  express  from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerroutes from './routes/Answers.js'
const app=express();
app.use(express.json({limit:'30mb',extended:true}));
app.use(express.urlencoded({limit:'30mb',extended:true}));
app.use(cors());
app.get('/',(req,res)=>{
	res.send("This is a stackoverflow clone APl")
})
app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer', answerRoutes)
// app.post('auth.signup',()=>{

// })
const PORT = process.env.PORT || 5000
const CONNECTION_URL = "mongodb+srv://akshita44:Akshitaagrawal%402cluster@stackoverflowclone2clus.qqletzf.mongodb.net/?retryWrites=true&w=majority"
// @ is replaced by %40
 
mongoose.connect(CONNECTION_URL,{useNewUrlParser :true,useUnifiedTopology : true })
   .then(()=>app.listen(PORT,()=>{console.log(`Server is running on port : ${PORT}`)}))
   .catch((err)=>console.log(err.message))
   
// app.listen(5000, function() {
//     console.log("Server is running on port " + 5000);
// });