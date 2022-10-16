const {Router} = require('express')
const cardsController = require('../controllers/cardsController')
const router = new Router()
const errorMiddleware  =require('../middleware/ErrorMiddleware')

router.get('/',errorMiddleware,cardsController.getAll)
router.post('/',errorMiddleware,cardsController.create)
router.delete('/',errorMiddleware,cardsController.delete)
router.get('/random',errorMiddleware,cardsController.generateRandom)
router.get('/:id',errorMiddleware,cardsController.getOne)

module.exports = router