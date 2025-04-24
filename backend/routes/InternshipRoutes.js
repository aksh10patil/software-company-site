// routes/internshipRoutes.js
const express = require('express');
const router = express.Router();
const Internship = require('../models/Internship');

// POST endpoint to save internship application
router.post('/api/internships', async (req, res) => {
  try {
    const internship = new Internship(req.body);
    await internship.save();
    res.status(201).json({ 
      success: true, 
      message: 'Internship application submitted successfully',
      data: internship 
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: 'Failed to submit application', 
      error: error.message 
    });
  }
});

// GET endpoint to retrieve all internships
router.get('/api/internships', async (req, res) => {
  try {
    const internships = await Internship.find().sort({ appliedDate: -1 });
    res.status(200).json({ 
      success: true, 
      count: internships.length,
      data: internships 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to retrieve internships', 
      error: error.message 
    });
  }
});

// GET endpoint to retrieve a single internship by ID
router.get('/api/internships/:id', async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);
    if (!internship) {
      return res.status(404).json({ 
        success: false, 
        message: 'Internship not found' 
      });
    }
    res.status(200).json({ 
      success: true, 
      data: internship 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to retrieve internship', 
      error: error.message 
    });
  }
});

module.exports = router;