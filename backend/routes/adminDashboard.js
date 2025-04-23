// backend/routes/adminDashboard.js
const express = require('express');
const router = express.Router();
const InternshipApplication = require('../models/InternshipApplication');
const auth = require('../middleware/auth');

// @route   GET /api/admin/dashboard/stats
// @desc    Get dashboard statistics
// @access  Private (Admin only)
router.get('/api/admin/dashboard/stats', auth, async (req, res) => {
  // Check if user is admin
  if (!req.user.isAdmin) {
    return res.status(403).json({ 
      success: false, 
      message: 'Access denied. Admin only.' 
    });
  }

  try {
    // Get total count
    const total = await InternshipApplication.countDocuments();
    
    // Get counts by status
    const newCount = await InternshipApplication.countDocuments({ status: 'new' });
    const reviewCount = await InternshipApplication.countDocuments({ status: 'review' });
    const shortlistedCount = await InternshipApplication.countDocuments({ status: 'shortlisted' });
    const interviewCount = await InternshipApplication.countDocuments({ status: 'interview' });
    const selectedCount = await InternshipApplication.countDocuments({ status: 'selected' });
    const rejectedCount = await InternshipApplication.countDocuments({ status: 'rejected' });
    
    // Get role distribution
    const roleAggregation = await InternshipApplication.aggregate([
      { $group: { _id: '$preferredRole', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);
    
    // Format role distribution with percentages
    const roleDistribution = roleAggregation.map(role => ({
      name: role._id,
      count: role.count,
      percentage: Math.round((role.count / total) * 100)
    }));
    
    // Compile statistics
    const stats = {
      total,
      new: newCount,
      review: reviewCount,
      shortlisted: shortlistedCount,
      interview: interviewCount,
      selected: selectedCount,
      rejected: rejectedCount
    };
    
    res.json({
      success: true,
      stats,
      roleDistribution
    });
  } catch (error) {
    console.error('Dashboard stats error:', error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Server error fetching dashboard statistics' 
    });
  }
});

// @route   GET /api/admin/dashboard/recent
// @desc    Get recent applications with pagination
// @access  Private (Admin only)
router.get('/api/admin/dashboard/recent', auth, async (req, res) => {
  // Check if user is admin
  if (!req.user.isAdmin) {
    return res.status(403).json({ 
      success: false, 
      message: 'Access denied. Admin only.' 
    });
  }

  try {
    const limit = parseInt(req.query.limit) || 5;
    
    // Get most recent applications
    const recentApplications = await InternshipApplication.find()
      .sort({ submittedAt: -1 })
      .limit(limit)
      .select('fullName email preferredRole submittedAt status');
    
    res.json({
      success: true,
      data: recentApplications
    });
  } catch (error) {
    console.error('Recent applications error:', error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Server error fetching recent applications' 
    });
  }
});

module.exports = router;