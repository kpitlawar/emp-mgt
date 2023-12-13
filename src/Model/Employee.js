const mong = require("mongoose");

const employeeSchema = new mong.Schema({
  name: String,
  lastName: String,
  email: String,
  contact: Number,
});

const Employee = mong.model("Employee", employeeSchema);

module.exports = Employee;
