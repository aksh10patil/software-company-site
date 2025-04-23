// backend/models/InternshipApplication.js
const mongoose = require('mongoose');

const internshipApplicationSchema = new mongoose.Schema({
  // Basic Info
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  mobile: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  dob: {
    type: Date,
    required: true
  },
  
  // Education Details
  college: {
    type: String,
    required: true,
    trim: true
  },
  degree: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: String,
    required: true,
    trim: true
  },
  availableFullTime: {
    type: String,
    required: true,
    enum: ['Yes', 'No']
  },
  
  // Internship Details
  preferredRole: {
    type: String,
    required: true,
    enum: [
      'Frontend Developer',
      'Backend Developer',
      'Full Stack Developer',
      'UI/UX Designer',
      'QA Tester'
    ]
  },
  duration: {
    type: String,
    required: true,
    enum: ['3 Months', '4 Months']
  },
  reason: {
    type: String,
    required: true
  },
  liveProjects: {
    type: String,
    required: true,
    enum: ['Yes', 'No']
  },
  projectDescription: {
    type: String
  },
  resumeLink: {
    type: String,
    required: true,
    trim: true
  },
  
  // Agreement Fields
  feeAgreement: {
    type: Boolean,
    required: true
  },
  declaration: {
    type: Boolean,
    required: true
  },
  
  // Application Management Fields
  status: {
    type: String,
    required: true,
    enum: ['new', 'review', 'shortlisted', 'interview', 'selected', 'rejected'],
    default: 'new'
  },
  adminNotes: {
    type: String
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
});

module.exports = mongoose.model('InternshipApplication', internshipApplicationSchema);