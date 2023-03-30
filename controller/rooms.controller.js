const roomsModel = require("../models/rooms.model");

exports.getRooms = async (req, res, next) => {
  let rooms = await roomsModel.getAllRooms();
  await res.render("Rooms", { rooms: rooms });
};

