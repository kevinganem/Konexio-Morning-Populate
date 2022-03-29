const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  address: String,
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
