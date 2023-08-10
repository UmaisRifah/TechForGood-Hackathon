const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  salary: {
    type: String,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  category: {
    type: String,
    // enum: ["product to sell", "service to sell"],
    required: true,
  },
  mobile_no: {
    type: String,
    // No 'required' property here, making it optional
  },
  email: {
    type: String,
    // No 'required' property here, making it optional
  },
  posted_by: {
    type: String,
    // No 'required' property here, making it optional
  },
});

const Job = mongoose.model("job", jobSchema);

module.exports = Job;
