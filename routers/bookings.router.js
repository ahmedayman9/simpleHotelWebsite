const router = require("express").Router();
const roomReservationController = require("../controller/roomReservation.controller")
const bp = require("body-parser").urlencoded({extended:true})

router.all("/", (req, res, next) => {
  res.render("Bookings");
});

router.all("/Check?",bp,roomReservationController.addRoomReservation)

router.all("/show",roomReservationController.getAllReservations)

module.exports = router;
