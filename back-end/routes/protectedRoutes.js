const express = require('express');
const authMiddleware = require('../middleWare/authMiddleware');

const router = express.Router();

// 🟢 Dashboard Route (Protected)
router.get('/dashboard', authMiddleware, (req, res) => {
  const dashboardData = [
    { id: 1, title: 'Total Users', value: 500 },
    { id: 2, title: 'Active Sessions', value: 120 },
    { id: 3, title: 'New Signups', value: 30 },
  ];
  res.json({ message: 'Dashboard Data', data: dashboardData });
});

// 🔵 Map Route (Protected)
router.get('/map', authMiddleware, (req, res) => {
  const mapConfig = {
    center: [20.5937, 78.9629], // Coordinates for India
    zoom: 5, // Initial zoom level
  };
  res.json({ message: 'Map Configuration', data: mapConfig });
});

module.exports = router;
