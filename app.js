const express = require ('express')
const mongoose= require ('mongoose')
const bodyParser = require('body-parser')
const userRouter =require('./Router/user')
const bookRouter =require ('./Router/books')



const app = express()
app.use(bodyParser.json())

const url ="mongodb+srv://fristtt18:wlzkIOY4SmbC6eXt@fristtt18.kr0fzam.mongodb.net/"

const connectDB = async() =>{
try{
mongoose.set('strictQuery', false)
mongoose.connect(url)
console.log("connected to mongo DB")
}catch(err){
    console.log("err while connected to mongo " + err)
process.exit()
}

    
}

connectDB()




app.use('/',userRouter)
app.use('/',bookRouter)

app.use (function(req,res){
res.status(404).send ({url: req.originalUrl + 'not found'})

})


app.listen(8877)