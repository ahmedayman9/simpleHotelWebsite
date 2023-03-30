const RoomsController = require("../controller/rooms.controller");
const router = require("express").Router();

router.get("/", RoomsController.getRooms);

router.get("/show", RoomsController.roomsAPI);

router.post(
  "/save/:roomName/:roomId/:extras/:image/:roomCap/:view",
  RoomsController.addRoom
);

module.exports = router;
