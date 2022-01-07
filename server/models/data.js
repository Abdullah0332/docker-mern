const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    content: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", dataSchema);
