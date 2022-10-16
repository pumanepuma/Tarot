const {Schema,model} = require('mongoose')

const CardSchema = new Schema({
    name:{type:String,required:true},
    short_name:{type:String, required: true},
    img:{type:String, required: true},
    type:{type:String,required:true},
    suit:{type:String,required:false},
    meaning:{type:String, required:true}
})

const Card = model('Card',CardSchema)

module.exports = Card