// models/Internship.js
const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  // Basic Info
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  location: { type: String, required: true },
  dob: { type: Date, required: true },
  
  // Education Details
  college: { type: String, required: true },
  degree: { type: String, required: true },
  year: { type: String, required: true },
  availableFullTime: { type: String, required: true },
  
  // Internship Details
  preferredRole: { type: String, required: true },
  duration: { type: String, required: true },
  reason: { type: String, required: true },
  liveProjects: { type: String, required: true },
  projectDescription: { type: String },
  resumeLink: { type: String, required: true },
  
  // Agreements
  feeAgreement: { type: Boolean, required: true },
  declaration: { type: Boolean, required: true },
  
  // Meta data
  appliedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Internship', internshipSchema);