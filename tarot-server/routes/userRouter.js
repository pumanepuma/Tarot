const {Router} = require('express')
const router = new Router()
const authMiddleware = require('../middleware/AuthMiddleware')

const userController = require('../controllers/UserController')

router.get('/', userController.getAllUsers)
router.delete('/',userController.deleteUser)
router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)

module.exports = router
