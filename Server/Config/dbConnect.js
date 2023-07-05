import mongoose from 'mongoose'
function dbConnect(){
    mongoose.connect("mongodb+srv://shijushijas157:wildHunter2.0@cluster0.k5a2dtd.mongodb.net/?retryWrites=true&w=majority").then(result=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log("data base error \n"+err)
    })
}
export default dbConnect