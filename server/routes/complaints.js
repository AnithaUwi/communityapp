// server/routes/complaints.js
const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');

// Submit a complaint
router.post("/", async (req, res) => {
  const { category, description, citizenEmail } = req.body;
  try {
    const complaint = new Complaint({ category, description, citizenEmail });
    await complaint.save();
    res.status(201).json(complaint);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get all complaints (for admin)
router.get("/", async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

// Get single complaint by ID
router.get("/:id", async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) return res.status(404).json({ error: "Not found" });
    res.json(complaint);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});
