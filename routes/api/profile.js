const express = require('express');

const router = express.Router();

// @route   GET api/profile
// @desc    get all Profiles
// @access  Public
router.get('/', (req, res) => res.json({ msg: 'Profile API works' }));

module.exports = router;
