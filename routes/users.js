const bcrypt = require('bcryptjs/dist/bcrypt');
const { response } = require('express');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator/check')
const config = require('config')

const User = require('../models/User')


// @route   POST api/users
// @descr   Register a user and send register data
// @access  PUBLIC
router.post('/', [
  check('name', 'Please name is required')
    .not()
    .isEmpty(),
  check('email', "please include a valid email")
    .isEmail(),
  check('password', 'Please enter a password with 6 or more chars')
    .isLength({ min: 6 })
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { name, email, password } = req.body

    try {
      let user = await User.findOne({ email: email })

      if (user) {
        res.status(400).json({ msg: 'User alredy exist' })
      }

      user = new User({
        name: name,
        password: password,
        email: email
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save()

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 360000
      }, (err, token) => {
        if (err) throw err;
        res.json({ token })
      })

    } catch (err) {
      console.error(err.message);

      res.status(500).send('Server error')
    }
  }
)


module.exports = router;