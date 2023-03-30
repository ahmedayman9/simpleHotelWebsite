const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/Booking";

const roomSchema = mongoose.Schema({
  roomId: Number,
  roomCap: Number,
  view: String,
  image: String,
  extras: Boolean,
  roomName: String,
});

const Room = mongoose.model("room", roomSchema);

exports.getAllRooms = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(DB_URL)
      .then(() => {
        return Room.find({});
      })
      .then((rooms) => {
        mongoose.disconnect();
        resolve(rooms);
      });
  });
};
exports.saveRoom = async (roomName, roomId, extras, image, roomCap, view) => {
  let data = {
    roomName: roomName,
    roomId: roomId,
    extras: extras,
    image: image,
    roomCap: roomCap,
    view: view,
  };
  await mongoose.connect(DB_URL);
  await Room.create(data);
  await mongoose.disconnect();
};
