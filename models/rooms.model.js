const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017/Booking";

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
  await mongoose.connect(DB_URL)
  let x = await Room.find({})
  await mongoose.disconnect();
  console.log('Disconnected')
  return x

};
exports.saveRoom = async (roomName, extras, image, roomCap, view) => {
  let id = Object.keys(await Room.find({})).length ++
  let data = {
    roomName: roomName,
    roomId: +id,
    extras: extras,
    image: image,
    roomCap: roomCap,
    view: view,
  };
  await mongoose.connect(DB_URL);
  await Room.create(data);
  await mongoose.disconnect();
  console.log('Disconnected')
};

exports.getRoomWithId = async (roomId) => {
  await mongoose.connect(DB_URL);
  let x = await Room.findOne({roomId:+roomId});
  await mongoose.disconnect();
  console.log('Disconnected')
  return x
};
