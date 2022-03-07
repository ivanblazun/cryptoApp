const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check')
const config = require('config')
const auth = require('../middleware/auth')

const User = require('../models/User')
const Profile = require('../models/Profile');

// @route   GET api/profile
// @descr   GET users profile
// @access  PRIVATE
router.get('/', auth, async (req, res) => {
  try {
    const profile = await Profile.find({ user: req.user.id }).sort({ date: -1 })
    res.json(profile)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error')
  }
})

// @route   POST api/profile
// @descr   post profile settings
// @access  PRIVATE
router.post('/', [auth,
  [
    check('firstName', 'Firstname is required')
      .not()
      .isEmpty()
  ]
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { firstName, surName, mobilePhone, adress, city, state } = req.body;

  try {
    const newProfile = new Profile({
      firstName: firstName,
      surName: surName,
      mobilePhone: mobilePhone,
      adress: adress,
      city: city,
      state: state,
      user: req.user.id,
    })

    const profile = await newProfile.save()

    res.json(profile)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
})

// @route   PUT api/profile/:id
// @descr   Update profile of user
// @access  PRIVATE
router.put('/:id', auth, async (req, res) => {
  const { firstName, surName, mobilePhone, adress, city, state } = req.body;

  // build contact object
  const profileFields = {};

  if (firstName) profileFields.firstName = firstName;
  if (surName) profileFields.surName = surName;
  if (mobilePhone) profileFields.mobilePhone = mobilePhone;
  if (adress) profileFields.adress = adress;
  if (city) profileFields.city = city;
  if (state) profileFields.state = state;

  try {
    let profile = await Profile.findById(req.params.id);

    if (!Profile) return res.status(404).json({ msg: 'profile not founded' })

    // Make sure user owns currs
    if (profile.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'not authorised' })
    }

    profile = await Profile.findByIdAndUpdate(req.params.id,
      { $set: profileFields },
      { new: true }
    )

    res.json(profile)
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server error')
  }
})

// @route   DELETE api/profile/:id
// @descr   Delete profile to make new for same user by id!!!
// @access  PRIVATE
router.delete('/:id', auth, async (req, res) => {


  try {
    let profile = await Profile.findById(req.params.id);

    if (!Profile) return res.status(404).json({ msg: 'profile not founded' })

    // Make sure user owns profile
    if (profile.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'not authorised' })
    }

    await Profile.findByIdAndRemove(req.params.id)

    res.json({ msg: 'profile removed' })
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server error')
  }
})

module.exports = router;