const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({
  address: String,
  city: String,
  country: String,
});

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;
