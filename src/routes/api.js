const express = require("express");
const router = express.Router();
const Emp = require("../Model/Employee");

// Create a new employee
router.post("/employees", async (req, res) => {
  try {
    console.log("APPPPP--", req.body);
    const employee = new Emp(req.body);
    await employee.save();
    res.status(200).send("Data Saved Successfully !!!");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
