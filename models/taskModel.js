const { text } = require('express');
const mongoose = require('mongoose');
const tasksSchema = mongoose.Schema(
  {
    text: { type: String, required: [true, 'Please add text value'] },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Task', tasksSchema);
