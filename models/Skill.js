const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ['Frontend', 'Backend', 'DevOps', 'Databases', 'Tools'], required: true },
  proficiency: { type: Number, min: 1, max: 100, required: true },
  icon: { type: String, default: '' },
  isPrimary: { type: Boolean, default: false },
});

module.exports = mongoose.model('Skill', skillSchema);
