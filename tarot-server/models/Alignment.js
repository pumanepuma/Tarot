const {Schema,model} = require('mongoose')
const User = require('./User')
const Card = require('./Card')

const AlignmentSchema = new Schema({
    name:{type:String,required:true},
    userId:{type:Schema.Types.ObjectId,ref:User,required:true},
    cards:[{type:Schema.Types.ObjectId,ref:Card,required:true}]
})

const Alignment = model('Alignment',AlignmentSchema)

module.exports = Alignment