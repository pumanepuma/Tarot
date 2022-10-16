const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      return next(ApiError.unauthorized())
    }
    const decoded = jwt.verify(token, process.env.SECRET)
    if(!decoded){
      return next(ApiError.unauthorized())
    }
    req.user = decoded
    next()
  }
  catch (e) {
    return next(ApiError.unauthorized("Unauthorized"))
  }
}