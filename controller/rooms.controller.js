const roomsModel = require("../models/rooms.model");

exports.getRooms = async (req, res, next) => {
  let rooms = await roomsModel.getAllRooms();
  await res.render("Rooms", { rooms: rooms });
};
exports.addRoom = (req, res, next) => {
  roomsModel.saveRoom(
    req.params.roomName,
    req.params.roomId,
    req.params.extras,
    req.params.image,
    req.params.roomCap,
    req.params.view
  );
  res.send("Added");
};
exports.roomsAPI = (req, res, next) => {
  roomsModel.getAllRooms().then((rooms) => {
    res.send(rooms);
  });
}
exports.getRoomWithId=async (req,res)=>{
  res.send(await roomsModel.getRoomWithId(req.params.roomId))
}
