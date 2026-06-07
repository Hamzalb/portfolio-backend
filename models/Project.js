const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [{ type: String }],
  liveUrl: { type: String, default: '' },
  repoUrl: { type: String, default: '' },
  featured: { type: Boolean, default: false },
  category: { type: String, enum: ['Frontend', 'Full-Stack', 'API', 'Other'], default: 'Other' },
  coverGradient: { type: String, default: 'from-indigo-500 to-cyan-500' },
  order: { type: Number, default: 0 },
});

module.exports = mongoose.model('Project', projectSchema);
