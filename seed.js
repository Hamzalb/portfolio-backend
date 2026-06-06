require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const Skill = require('./models/Skill');

const projects = [
  {
    title: 'DevFlow – Project Management SaaS',
    description: 'A real-time collaborative project management platform with boards, sprints, and analytics. Built with Next.js, Socket.io, and PostgreSQL.',
    techStack: ['Next.js', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Tailwind CSS', 'Prisma'],
    liveUrl: 'https://devflow.demo',
    repoUrl: 'https://github.com/hamza/devflow',
    featured: true,
    category: 'Full-Stack',
    coverGradient: 'from-indigo-600 via-purple-600 to-cyan-500',
    order: 1,
  },
  {
    title: 'Luminary UI – Component Library',
    description: 'An accessible, themeable React component library with 60+ components, dark mode support, and full TypeScript definitions.',
    techStack: ['React', 'TypeScript', 'Storybook', 'Rollup', 'CSS Modules'],
    liveUrl: 'https://luminary-ui.demo',
    repoUrl: 'https://github.com/hamza/luminary-ui',
    featured: true,
    category: 'Frontend',
    coverGradient: 'from-cyan-500 via-blue-500 to-indigo-600',
    order: 2,
  },
  {
    title: 'NexaAPI – REST & GraphQL Gateway',
    description: 'A high-performance API gateway supporting REST and GraphQL with JWT auth, rate limiting, caching, and OpenAPI docs generation.',
    techStack: ['Node.js', 'Express', 'GraphQL', 'Redis', 'MongoDB', 'JWT'],
    liveUrl: '',
    repoUrl: 'https://github.com/hamza/nexa-api',
    featured: true,
    category: 'API',
    coverGradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    order: 3,
  },
  {
    title: 'PulseStore – E-Commerce Platform',
    description: 'Full-featured e-commerce solution with Stripe payments, inventory management, admin dashboard, and SSR for SEO.',
    techStack: ['Next.js', 'Stripe', 'MongoDB', 'Cloudinary', 'Redux Toolkit'],
    liveUrl: 'https://pulsestore.demo',
    repoUrl: 'https://github.com/hamza/pulse-store',
    featured: false,
    category: 'Full-Stack',
    coverGradient: 'from-orange-500 via-pink-500 to-rose-600',
    order: 4,
  },
  {
    title: 'Chartify – Data Visualization Dashboard',
    description: 'Interactive analytics dashboard with 20+ chart types, real-time data streaming, and customizable widget layouts.',
    techStack: ['React', 'D3.js', 'TypeScript', 'WebSockets', 'Tailwind CSS'],
    liveUrl: 'https://chartify.demo',
    repoUrl: 'https://github.com/hamza/chartify',
    featured: false,
    category: 'Frontend',
    coverGradient: 'from-violet-600 via-indigo-500 to-blue-500',
    order: 5,
  },
  {
    title: 'AuthVault – Identity Service',
    description: 'Production-grade authentication microservice with OAuth2, TOTP 2FA, session management, and audit logging.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'OAuth2', 'JWT'],
    liveUrl: '',
    repoUrl: 'https://github.com/hamza/authvault',
    featured: false,
    category: 'API',
    coverGradient: 'from-slate-600 via-gray-700 to-zinc-800',
    order: 6,
  },
];

const skills = [
  { name: 'React', category: 'Frontend', proficiency: 95, icon: 'react', isPrimary: true },
  { name: 'Next.js', category: 'Frontend', proficiency: 92, icon: 'nextjs', isPrimary: true },
  { name: 'TypeScript', category: 'Frontend', proficiency: 90, icon: 'typescript', isPrimary: true },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 93, icon: 'tailwind', isPrimary: true },
  { name: 'Vue.js', category: 'Frontend', proficiency: 78, icon: 'vue', isPrimary: false },
  { name: 'Framer Motion', category: 'Frontend', proficiency: 85, icon: 'framer', isPrimary: false },

  { name: 'Node.js', category: 'Backend', proficiency: 92, icon: 'nodejs', isPrimary: true },
  { name: 'Express', category: 'Backend', proficiency: 90, icon: 'express', isPrimary: true },
  { name: 'GraphQL', category: 'Backend', proficiency: 82, icon: 'graphql', isPrimary: true },
  { name: 'REST APIs', category: 'Backend', proficiency: 95, icon: 'api', isPrimary: false },
  { name: 'Python', category: 'Backend', proficiency: 75, icon: 'python', isPrimary: false },

  { name: 'Docker', category: 'DevOps', proficiency: 80, icon: 'docker', isPrimary: true },
  { name: 'CI/CD', category: 'DevOps', proficiency: 78, icon: 'cicd', isPrimary: false },
  { name: 'AWS', category: 'DevOps', proficiency: 72, icon: 'aws', isPrimary: false },
  { name: 'Linux', category: 'DevOps', proficiency: 85, icon: 'linux', isPrimary: false },

  { name: 'MongoDB', category: 'Databases', proficiency: 90, icon: 'mongodb', isPrimary: true },
  { name: 'PostgreSQL', category: 'Databases', proficiency: 85, icon: 'postgresql', isPrimary: true },
  { name: 'Redis', category: 'Databases', proficiency: 78, icon: 'redis', isPrimary: false },
  { name: 'MySQL', category: 'Databases', proficiency: 80, icon: 'mysql', isPrimary: false },

  { name: 'Git', category: 'Tools', proficiency: 95, icon: 'git', isPrimary: true },
  { name: 'Figma', category: 'Tools', proficiency: 82, icon: 'figma', isPrimary: false },
  { name: 'VS Code', category: 'Tools', proficiency: 95, icon: 'vscode', isPrimary: false },
  { name: 'Postman', category: 'Tools', proficiency: 90, icon: 'postman', isPrimary: false },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log('Connected to MongoDB');

    await Project.deleteMany({});
    await Skill.deleteMany({});

    await Project.insertMany(projects);
    console.log(`Seeded ${projects.length} projects`);

    await Skill.insertMany(skills);
    console.log(`Seeded ${skills.length} skills`);

    console.log('Seed complete!');
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

seed();
