const Alignment = require("../models/Alignment")

class AlignmentController{
    async create(req,res){
        const {userId,name,cards} = req.body
        const alignment = await Alignment.create({userId,name,cards})
        return res.json(alignment)
    }
    
    async getOne(req,res){
        const {id} = req.params
        const alignment = await Alignment.findById(id).populate('cards')
        return res.json(alignment)
    }

    async getAll(req,res){
        const {id} = req.query
        const alignments = await Alignment.find({userId:id})
        return res.json(alignments)
    }

    async delete(req,res){
        const {id} = req.params
        const alignment = await Alignment.findByIdAndDelete(id)
        return res.json(alignment) 
    }
}

module.exports = new AlignmentController()