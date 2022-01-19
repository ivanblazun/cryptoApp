const express = require('express');
const router = express.Router();


// @route   POST api/users
// @descr   Register a user and send register data
// @access  PUBLIC
router.post('/', (req, res) => {
  res.send('Register a user')
})


module.exports = router;