const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  firstName: String,
  surname: String,
  age: Number,
  address: [{ type: mongoose.Types.ObjectId, ref: "Address" }],
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
