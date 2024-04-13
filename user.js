const mongoose= require ('mongoose')
const bcrypt = require('bcryptjs')
const schema = mongoose.Schema


const userschema = new schema({

name: String,
age: Number,
email:{type:'string' , unique: true},
phone:{type:'string' , unique: true},
password : String,

})
userschema.method.comparepassword = async function (password) {
    return await bcrypt.compare(password, this.password)
    
}
module.exports =mongoose.model('Users' ,userschema)