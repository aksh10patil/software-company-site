// backend/routes/adminDashboard.js
const express = require('express');
const router = express.Router();
const InternshipApplication = require('../models/InternshipApplication');
const auth = require