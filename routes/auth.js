const express = require('express');
const router = express.Router();


// @route   GET api/auth
// @descr   Get loggedin user
// @access  PRIVATE
router.get('/', (req, res) => {
  res.send('Get loggedin user')
})

// @route   POST api/auth
// @descr   authent user and get token
// @access  PUBLIC
router.post('/', (req, res) => {
  res.send('Log in user wit after auth')
})



module.exports = router;