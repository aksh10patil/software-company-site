// backend/routes/internshipApplications.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const InternshipApplication = require('../models/InternshipApplication');
const auth = require('../middleware/auth'); // Assuming you have authentication middleware

// POST - Submit new internship application
router.post('/api/internship-applications', async (req, res) => {
  try {
    const newApplication = new InternshipApplication(req.body);
    await newApplication.save();
    res.status(201).json({ success: true, message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ success: false, message: 'Error submitting application' });
  }
});

// GET - Admin only - Get all applications with pagination and filtering
router.get('/api/internship-applications', auth, async (req, res) => {
  // Check if user is admin
  if (!req.user.isAdmin) {
    return res.status(403).json({ success: false, message: 'Access denied' });
  }

  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    // Create filter object based on query parameters
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    if (req.query.preferredRole) filter.preferredRole = req.query.preferredRole;
    if (req.query.search) {
      filter.$or = [
        { fullName: { $regex: req.query.search, $options: 'i' } },
        { email: { $regex: req.query.search, $options: 'i' } }
      ];
    }

    // Get applications with pagination
    const applications = await InternshipApplication
      .find(filter)
      .sort({ submittedAt: -1 }) // Newest first
      .skip(skip)
      .limit(limit);
    
    // Get total count for pagination
    const total = await InternshipApplication.countDocuments(filter);
    
    res.status(200).json({
      success: true, 
      data: applications,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ success: false, message: 'Error fetching applications' });
  }
});

// GET - Admin only - Get single application by ID
router.get('/api/internship-applications/:id', auth, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ success: false, message: 'Access denied' });
  }

  try {
    const application = await InternshipApplication.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }
    res.status(200).json({ success: true, data: application });
  } catch (error) {
    console.error('Error fetching application:', error);
    res.status(500).json({ success: false, message: 'Error fetching application' });
  }
});

// PATCH - Admin only - Update application status
router.patch('/api/internship-applications/:id/status', auth, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ success: false, message: 'Access denied' });
  }

  try {
    const { status, adminNotes } = req.body;
    
    if (!status) {
      return res.status(400).json({ success: false, message: 'Status is required' });
    }
    
    const update = { 
      status,
      updatedAt: new Date()
    };
    
    if (adminNotes) {
      update.adminNotes = adminNotes;
    }
    
    const application = await InternshipApplication.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true }
    );
    
    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }
    
    res.status(200).json({ success: true, data: application });
  } catch (error) {
    console.error('Error updating application:', error);
    res.status(500).json({ success: false, message: 'Error updating application' });
  }
});

module.exports = router;