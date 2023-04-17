const roomReservationModel = require("../models/roomReservation.model");
const checkoutModel = require("../models/checkout.model");

exports.addRoomReservation = async (req, res, next) => {
  let x = await roomReservationModel.findRoomReservation(req.query);
  if (x == true) {
    // res.send("booked")
    res.redirect("/Bookings");
  } else {
    // res.send("available")
    let data = {
      roomType: req.roomType,
      noOfAdults: +req.noOfAdults,
      checkIn: req.checkIn,
      checkOut: req.checkOut,
    };
    res.redirect("/checkout");
    // console.log(checkoutModel.data);
  }
};

exports.getAllReservations = async (req, res) => {
  res.send(await roomReservationModel.getAllReservations());
};