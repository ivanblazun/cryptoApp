const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check')
const config = require('config')
const auth = require('../middleware/auth')

const User = require('../models/User')

const Fiat = require('../models/Fiat');

// @route   GET api/fiat
// @descr   GET users fiat
// @access  PRIVATE
router.get('/', auth, async (req, res) => {
  try {
    const fiat = await Fiat.find({ user: req.user.id }).sort({ date: -1 })
    res.json(fiat)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error')
  }
})

// @route   POST api/fiat
// @descr   Buy and add fiat curr
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
    const newFiat = new Fiat({
      name: name,
      value: value,
      type: type,
      user: req.user.id,
    })

    const fiat = await newFiat.save()

    res.json(fiat)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
})

// @route   PUT api/fiat/:id
// @descr   Update fiat of users wallet by id!!!
// @access  PRIVATE
router.put('/:id', auth, async (req, res) => {
  const { name, value, type } = req.body;

  // build fiat object
  const fiatFields = {};

  if (name) fiatFields.name = name;
  if (value) fiatFields.value = value;
  if (type) fiatFields.type = type;

  try {
    let fiat = await Fiat.findById(req.params.id);

    if (!Fiat) return res.status(404).json({ msg: 'fiat not founded' })

    // Make sure user owns fiat 
    if (fiat.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'not authorised' })
    }

    fiat = await Fiat.findByIdAndUpdate(req.params.id,
      { $set: fiatFields },
      { new: true }
    )

    res.json(fiat)
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server error')
  }
})

// @route   DELETE api/fiat/:id
// @descr   Delete (aka sell) fiat of users  by id!!!
// @access  PRIVATE
router.delete('/:id', auth, async (req, res) => {

  try {
    let fiat = await Fiat.findById(req.params.id);

    if (!Fiat) return res.status(404).json({ msg: 'Fiat not founded' })

    // Make sure user owns currs
    if (fiat.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'not authorised' })
    }

    await Fiat.findByIdAndRemove(req.params.id)

    res.json({ msg: 'currency removed' })
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server error')
  }
})

module.exports = router;