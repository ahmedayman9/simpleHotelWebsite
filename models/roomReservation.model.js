const { text } = require("body-parser");
const mongoose = require("mongoose");

const roomReservationSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  country: String,
  address: String,
  city: String,
  postalCode: String,
  phone: Number,
  fax: Number,
  specialRequests: String,
  transactionId: String,
});
const roomReservationModel = mongoose.model(
  "roomReservation",
  roomReservationSchema
);

exports.findRoomReservation = async (req) => {
  let data = await roomReservationModel.findOne({
    roomType: req.roomType,
    checkIn: req.checkIn,
    checkOut: req.checkOut,
  });
  if (!data) {
    return false;
  } else {
    return true;
  }
};

exports.addRoomReservation = async (x, req) => {
  let db = {
    firstName: req.query.firstName,
    lastName: req.query.lastName,
    email: req.query.email,
    country: req.query.country,
    address: req.query.address,
    city: req.query.city,
    postalCode: req.query.postalCode,
    phone: +req.query.phone,
    fax: +req.query.fax,
    specialRequests: req.query.specialRequests,
    transactionId: x,
  };
  await roomReservationModel.create(db);
  console.log(db);
  console.log("success");
};

exports.getAllReservations = async () => {
  let data = await roomReservationModel.find({});
  return data;
};
