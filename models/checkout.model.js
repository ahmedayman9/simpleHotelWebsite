const mongoose = require("mongoose");

const checkoutSchema = mongoose.Schema({
  transactionId: Number,
  cardholderName: String,
  cardType: String,
  cardNumber: Number,
  date: Date,
});

const checkoutModel = mongoose.model("transaction", checkoutSchema);
var data = {};

exports.checkout = async (req) => {
  let data = {
    cardholderName: req.cardholderName,
    cardType: req.cardType,
    cardNumber: req.cardNumber,
    date: req.month,
  };
  await checkoutModel.create(data);
  x = await checkoutModel.findOne({
    cardholderName: data.cardholderName,
    date: req.date,
  });
  console.log("Checkout Successfully");
  return x._id;
};

exports.data = data;
