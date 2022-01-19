const express = require('express');
const router = express.Router();


// @route   GET api/wallet
// @descr   GET users wallet
// @access  PRIVATE
router.get('/', (req, res) => {
  res.send('Get users wallet')
})

// @route   POST api/wallet
// @descr   Buy and add currency to users  wallet
// @access  PRIVATE
router.post('/', (req, res) => {
  res.send('Buy  currency to wallet')
})

// @route   PUT api/wallet/:id
// @descr   Update single currency of users wallet by id!!!
// @access  PRIVATE
router.put('/:id', (req, res) => {
  res.send('Update single currency in users wallet')
})

// @route   DELETE api/wallet/:id
// @descr   Delete (aka sell) single currency of users wallet by id!!!
// @access  PRIVATE
router.delete('/:id', (req, res) => {
  res.send('Delete single currency in users wallet')
})



module.exports = router;