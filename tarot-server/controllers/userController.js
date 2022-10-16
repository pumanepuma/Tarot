const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')


const generateJwt = (id, email) => {
  return jwt.sign(
    { id, email },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}

class UserController {
  async register(req, res, next) {
    try {
      const { email, password, role } = req.body
      const candidates = await User.findOne({ email })
      if (candidates) {
        return next(ApiError.badRequest("User already exists"))
      }
      const hashed = await bcrypt.hash(password, 3)
      const user = await User.create({ email, password: hashed,role })
      const token = generateJwt(user._id, user.email)
      return res.json(token)
    }
    catch (e) {
      next(e)
    }
  }

  async getAllUsers(req, res, next) {
    try {
      const users = await User.find()
      return res.json(users)
    }
    catch (e) {
      next(e)
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ email })
      if (!user) {
        return next(ApiError.badRequest("User doesn't exist"))
      }
      let compare = bcrypt.compareSync(password, user.password)
      if (!compare) {
        return next(ApiError.badRequest("Password doesn't match"))
      }
      const token = generateJwt(user._id, email)
      return res.json(token)
    }
    catch (e) {
      next(e)
    }
  }

  async deleteUser(req, res, next) {
    try {
      const { id } = req.body
      await User.findByIdAndDelete(id)
      return res.json('ok')
    }
    catch (e) {
      next(e)
    }
  }

  async check(req, res, next) {
    try {
      const token = generateToken(req.user._id, req.user.email)
      return res.json(token)
    }
    catch (e) {
      next(e)
    }
  }
}

module.exports = new UserController()