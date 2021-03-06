const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check')
const config = require('config')
const auth = require('../middleware/auth')

const User = require('../models/User')
const currency = require('../models/Currency');
const Currency = require('../models/Currency');

// @route   GET api/wallet
// @descr   GET users wallet
// @access  PRIVATE
router.get('/', auth, async (req, res) => {
  try {
    const wallet = await Currency.find({ user: req.user.id }).sort({ date: -1 })
    res.json(wallet)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error')
  }
})

// @route   POST api/wallet
// @descr   Buy and add currency to users  wallet
// @access  PRIVATE
router.post('/', [auth,
  [
    check('name', 'Name is required')
      .not()
      .isEmpty()
  ]
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, value, type } = req.body;

  try {
    const newCurrency = new Currency({
      name: name,
      value: value,
      type: type,
      user: req.user.id,
    })

    const currency = await newCurrency.save()

    res.json(currency)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
})

// @route   PUT api/wallet/:id
// @descr   Update single currency of users wallet by id!!!
// @access  PRIVATE
router.put('/:id', auth, async (req, res) => {
  const { name, value, type } = req.body;

  // build contact object
  const currencyFields = {};

  if (name) currencyFields.name = name;
  if (value) currencyFields.value = value;
  if (type) currencyFields.type = type;

  try {
    let currency = await Currency.findById(req.params.id);

    if (!Currency) return res.status(404).json({ msg: 'currency not founded' })

    // Make sure user owns currs
    if (currency.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'not authorised' })
    }

    currency = await Currency.findByIdAndUpdate(req.params.id,
      { $set: currencyFields },
      { new: true }
    )

    res.json(currency)
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server error')
  }
})

// @route   DELETE api/wallet/:id
// @descr   Delete (aka sell) single currency of users wallet by id!!!
// @access  PRIVATE
router.delete('/:id', auth, async (req, res) => {


  try {
    let currency = await Currency.findById(req.params.id);

    if (!Currency) return res.status(404).json({ msg: 'currency not founded' })

    // Make sure user owns currs
    if (currency.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'not authorised' })
    }

    await Currency.findByIdAndRemove(req.params.id)

    res.json({ msg: 'currency removed' })
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server error')
  }
})



module.exports = router;