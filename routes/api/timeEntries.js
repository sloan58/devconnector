const express = require('express');

const router = express.Router();

// @route   GET api/time-entries
// @desc    get all time-entries
// @access  Public
router.get('/', (req, res) => res.json({ msg: 'Time Entries API works' }));

module.exports = router;
