const {Router} = require('express')
const userRouter = require('./userRouter')
const cardsRouter = require('./cardsRouter')
const alignmentsRouter  =require('./alignmentsRouter')
const router = new Router

router.use('/users',userRouter)
router.use('/cards',cardsRouter)
router.use('/alignments',alignmentsRouter)

module.exports = router