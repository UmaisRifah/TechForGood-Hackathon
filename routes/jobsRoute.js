const express = require("express");
const router = express.Router();
const Job = require("../models/job");

//to post and save job to the database
router.post("/jobs", async (req, res) => {
  const job = new Job({
    title: req.body.title,
    description: req.body.description,
    salary: req.body.salary,
    time: req.body.time,
    location: req.body.location,
    category: req.body.category,
    mobile_no: req.body.mobile_no,
    email: req.body.email,
    posted_by: req.body.posted_by,
  });

  try {
    const j1 = await job.save();
    res.json(j1);
    console.log("job saved to DB");
  } catch (err) {
    console.log(err);
    res.send("Error while saving job in DB");
  }
});

//to get all jobs from Database
router.get("/jobs", async (req, res) => {
  // res.send('Get Request from /jobs');
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    console.log(err);
    res.send("Error while getting all jobs from DB");
  }
});

//to get single job from Database
router.get("/jobs/:id", async (req, res) => {
  // res.send('Get Request from /jobs');
  try {
    const job = await Job.findById(req.params.id);
    res.json(job);
  } catch (err) {
    console.log(err);
    res.send("Error while getting single job from DB");
  }
});

//to update single job in a Database
router.put("/jobs/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ msg: "Job to be updated not found in DB" });
    }
    const updateJob = await Job.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updateJob);
  } catch (err) {
    console.log(err);
    res.send("Error while updating a job in DB");
  }
});

//to delete single job from database
router.delete("/jobs/:id", async (req, res) => {
  // console.log(req.params.id);
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(400).json({ msg: "Job to be deleted not found in DB" });
    } else {
      await job.deleteOne();
      res.status(200).json({ _id: req.params.id });
    }
  } catch (err) {
    console.log(err);
    res.send("Error while deleting a job from DB");
  }
});

//to search jobs by category //only 2 options ('service to sell' or 'product to sell')
router.get("/jobs/search/categories/:category", async (req, res) => {
  try {
    console.log(req.params.category);
    const regexTerm = new RegExp(req.params.category, "i");
    const job = await Job.find({ category: { $regex: regexTerm } });
    res.status(200).json(job);
  } catch (err) {
    console.log(err);
    res.send("Error while searching a job by category");
  }
});

//to search jobs by locations
router.get("/jobs/search/locations/:location", async (req, res) => {
  try {
    console.log(req.params.location);
    const regexTerm = new RegExp(req.params.location, "i");
    const job = await Job.find({ location: { $regex: regexTerm } });
    res.status(200).json(job);
  } catch (err) {
    console.log(err);
    res.send("Error while searching a job by location");
  }
});

//to search jobs by title
router.get("/jobs/search/titles/:title", async (req, res) => {
  try {
    console.log(req.params.title);
    const regexTerm = new RegExp(req.params.title, "i"); // 'i' flag for case-insensitive search
    const job = await Job.find({ title: { $regex: regexTerm } });
    res.status(200).json(job);
  } catch (err) {
    console.log(err);
    res.send("Error while searching a job by title");
  }
});

// Mock data for suggest job categories and their respective jobs => suggestion by categories
const jobData = require("../suggest_jobs.json");

//to get all suggested jobs category names
router.get("/jobs/suggest/categories", (req, res) => {
  try {
    const categories = Object.keys(jobData);
    res.json(categories);
  } catch (err) {
    console.log(err);
    res.send("Error while fetching category names");
  }
});

//to get all the suggested jobs from the category that suggested
router.get("/jobs/suggest/categories/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const jobs = await jobData[category];

    if (jobs) {
      res.json(jobs);
    } else {
      res.status(404).json({ error: "Category not found" });
    }
  } catch (err) {
    console.log(err);
    res.send("Error while suggesting jobs");
  }
});

module.exports = router;
