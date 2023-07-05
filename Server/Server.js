import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import dbConnect from './Config/dbConnect.js';
import cookieParser from 'cookie-parser';
import path from 'path'
import userRouter from './Routers/UserRouter.js'


const app=express();
app.use(
    cors({
      origin: [
        "trimbit.netlify.app", 
      ],
      credentials: true,
    })
  );
dbConnect();
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.resolve()+"/public"))

app.use('/user',userRouter)
app.listen(5000, ()=>{
    console.log("server running on port 5000")
})

