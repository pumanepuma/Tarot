const {Router} = require('express')
const alignmentsController = require('../controllers/alignmentsController')
const router = new Router()
const authMiddleware = require('../middleware/AuthMiddleware')

router.post('/',authMiddleware,alignmentsController.create)
router.get('/',authMiddleware,alignmentsController.getAll)
router.delete('/:id',authMiddleware,alignmentsController.delete)
router.get('/:id',authMiddleware,alignmentsController.getOne)

module.exports = router