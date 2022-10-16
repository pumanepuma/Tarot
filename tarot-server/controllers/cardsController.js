const Card = require("../models/Card");
const uuid = require('uuid')
const path = require('path')
const multer = require('multer')

class CardsController{
    async getAll(req,res){
        const cards = await Card.find()
        return res.json(cards)
    }

    async create(req,res,next){
        const {name,short_name,meaning,type,suit,img} = req.body
        try{
            const card = await Card.create({name,short_name,meaning,type,suit,img})
            return res.json(card)
        }
        catch(err){
            console.log(err)
            next(err)
        }
        return res.send('ok')
    }

    async delete(req,res){
        const {id} = req.body
        const card = await Card.findByIdAndDelete(id)
        return res.json(card)
    }

    async getOne(req,res){
        const {id} = req.params
        const card = await Card.findById(id)
        return res.json(card)
    }

    async generateRandom(req,res){
        const {num} = req.query
        const cards = await Card.find({})
        const shuffled = cards.sort(() => 0.5 - Math.random())
        const randomCards = shuffled.slice(0, num)
        return res.json(randomCards)
      }
}

module.exports = new CardsController()