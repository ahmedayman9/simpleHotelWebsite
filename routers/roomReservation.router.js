const router = require("express").Router()
const roomReservationController = require("../controller/roomReservation.controller")


router.use("/check",roomReservationController.addRoomReservation)

module.exports = router