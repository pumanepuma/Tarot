const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    role:{type:String,default:'user'}
})

const User = model('User',UserSchema)

module.exports = User