const jwt = require("jsonwebtoken");
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, auth denied' })
  }
  try {
    const deCoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = deCoded.user;

    next()
  } catch (err) {
    res.status(401).json({ msg: 'token is not valid' })
  }
}