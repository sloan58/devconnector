const express = require('express');
const passport = require('passport');

const router = express.Router();

// Load model
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   GET api/profile
// @desc    get all Profiles
// @access  Public
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user._id }).then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        return res.status(404).json(errors);
      }
    });
  }
);

module.exports = router;
