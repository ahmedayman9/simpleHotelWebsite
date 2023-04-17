const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  roomId: Number,
  roomCap: Number,
  view: String,
  image: String,
  extras: Boolean,
  roomName: String,
});

const Room = mongoose.model("room", roomSchema);

exports.getAllRooms = async () => {
  let x = await Room.find({});
  return x;
};
exports.saveRoom = async (roomName, extras, image, roomCap, view) => {
  let id = Object.keys(await Room.find({})).length++;
  let data = {
    roomName: roomName,
    roomId: +id,
    extras: extras,
    image: image,
    roomCap: roomCap,
    view: view,
  };
  await Room.create(data);
};

exports.getRoomWithId = async (roomId) => {
  let x = await Room.findOne({ roomId: +roomId });
  return x;
};
