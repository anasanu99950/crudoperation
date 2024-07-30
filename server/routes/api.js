const User= require('../model/user')
const express=require('express')
const jwt=require('jsonwebtoken')
const router=require=express.Router()
function verofyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('authorization request')
    }
    let token=req.headers.authorization.split(" ")[1]
    if(token==='null' && jwt.JsonWebTokenError){
        return res.status(401).send("unauthorized req null token")
    }
    let payload=jwt.verify(token,'secretKey')
    if(!payload){
        return res.status(401).send("authorization request invalid")
    }
    req.userId=payload.subject;
    next()
}




router.get('/',(req,res)=>{
    res.send('From api')
})

router.post('/register',(req,res)=>{
 let userData=req.body
 let user=new User(userData)
 user.save().then((registerUser)=>{
    let payload={subject:registerUser._id}
    let token=jwt.sign((payload),"secretKey")
    res.status(200).send({token})
    console.log('user added successfully')
    // res.status(200).send(registerUser)
 })
})

router.post('/login',(req,res)=>{
    let userData=req.body
    User.findOne({email:userData.email})
    .then((user)=>{
        if(!user){
            res.status(401).send('invalid email')
        }else if(user.password !==userData.password){
            res.status(402).send('invalid password')
        }
        else{
            let payload={subject:user._id}
            let token=jwt.sign(payload,"secretKey")
            res.status(200).send({token})
            // res.status(200).send(user)
        }

    }).catch(err =>console.log(err))
})

router.get('/employees',(req,res)=>{
    let employees=[
        {"id":1,
        "name":"john smith",
        "role":"Manager"
    },{
        "id":2,
        "name":"Alpha ",
        "role":"Accountant" 
    },{
        "id":3,
        "name":"Eclair",
        "role":"Auditur"
    }
    ]
    res.json(employees)
})


router.get('/managers',verofyToken,(req,res)=>{
    let managers=[
        {"id":1,
        "name":"john smith",
        "role":"Manager"
    },{
        "id":2,
        "name":"Delta ",
        "role":"Branch Manager" 
    },{
        "id":3,
        "name":"Andrew",
        "role":"GM"
    }
    ]
    res.json(managers)
})

module.exports=router