// server/models/Complaint.js
const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  category: { type: String, required: true }, // e.g., "Sanitation"
  description: { type: String, required: true },
  status: { type: String, default: "Pending" }, // Pending/In Progress/Resolved
  citizenEmail: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Complaint", complaintSchema);