const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ order: 1, _id: -1 });
    res.json({ success: true, data: projects });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
