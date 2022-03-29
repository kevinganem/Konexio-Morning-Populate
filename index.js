// EXPRESS - MONGOOSE
const express = require("express");
const mongoose = require("mongoose");
const app = express();
// MODELS
const Student = require("./models/studentModel.js");

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
