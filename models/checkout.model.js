const mongoose = require("mongoose");

const checkoutSchema = mongoose.Schema({
  transactionId: Number,
  cardholderName: String,
  cardType: String,
  cardNumber: Number,
  date: Date,
  ccv: Number,
});

const checkoutModel = mongoose.model("transaction", checkoutSchema);
var data = {};

exports.checkout = async (req) => {
  let id = Object.keys(await checkoutModel.find({})).length++;
  let data = {
    transactionId: id,
    cardholderName: String,
    cardType: String,
    cardNumber: Number,
    date: Date,
    ccv: Number,
  };
  await checkoutModel.save(date);
  console.log("Checkout Successfully");
  return id;
};

exports.data = data;
