const express= require('express')
const bodyParser=require('body-parser')
const Port=3000
const app= express()
const api=require('./routes/api')
const mongoose= require('mongoose')
const cors=require('cors')



mongoose.connect('mongodb+srv://sherin32:sherin32@cluster0.rdwappp.mongodb.net/PersonData?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to Db');
    
    app.listen(Port,()=>{
        console.log('server started on '+Port);
    })
}).catch((err)=>console.log('db conection error'+err))
app.use(cors())

app.use(bodyParser.json())
app.use("/api",api)
app.use('/',(req,res)=>{
    res.send('From server')})
