const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

router.get('/', async (req, res, next) => {
  try {
    const skills = await Skill.find().sort({ isPrimary: -1, proficiency: -1 });
    res.json({ success: true, data: skills });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
