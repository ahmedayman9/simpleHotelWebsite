const checkoutModel = require("../models/checkout.model");
const roomModel = require("../models/rooms.model");
const roomReservationModel = require("../models/roomReservation.model");

exports.ren = (req, res, next) => {
  res.render("checkout");
  console.log(req.data);
  next();
};

exports.checkout = async (req, res) => {
  // await checkoutModel.checkout(req.query)
  //   console.log(req.query);
  x = await checkoutModel.checkout(req);
  console.log(x);
  await roomReservationModel.addRoomReservation(x, req);
  res.redirect("../Success");
};
