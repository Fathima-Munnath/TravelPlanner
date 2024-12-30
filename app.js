const express = require('express')
const mongoose = require('mongoose')
const app =express()
app.use(express.json())


const planRouter=require('./routers/planRouter')

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use('/plans',planRouter)

async function main() {
    await mongoose.connect('mongodb+srv://fathimamunnath:fathima123@cluster0.k2qc7.mongodb.net/TravelPlanDB');
}  

main()
.then(()=>console.log("Database connected"))
.catch(err => console.log(err));



//const PlanData = require('./models/plan')

app.listen(3000,()=>{
    console.log("Server started")

})