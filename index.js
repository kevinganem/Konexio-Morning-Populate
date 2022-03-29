// EXPRESS - MONGOOSE
const express = require("express");
const mongoose = require("mongoose");
const app = express();
// MODELS
const Student = require("./models/studentModel.js");
const Address = require("./models/addressModel");
const req = require("express/lib/request");

// MIDDLEWARES
app.use(express.json());

// MOMNGODB
mongoose
  .connect(
    "mongodb+srv://Konexio-root-kevinganem:root@cluster0.18asb.mongodb.net/Konexio?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  });

// ROUTES
app.get("/students/:studentId", async (req, res) => {
  const student = await Student.findById(req.params.studentId).populate(
    "address"
  );

  res.json(student);
});

app.post("/students", async (req, res) => {
  await Student.create(req.body);

  res.status(201).send("Student created");
});

app.post("/students/:studentId/address", async (req, res) => {
  const address = await Address.create(req.body);
  await Student.findByIdAndUpdate(req.params.studentId, {
    $push: { address: address._id },
  });

  res.status(201).send("Address created");
});

// START SERVER
app.listen(8000, () => {
  console.log("Listening");
});
