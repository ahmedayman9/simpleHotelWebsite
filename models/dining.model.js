const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017/Booking";

const restaurantSchema = mongoose.Schema({
  restId: Number,
  image: String,
  restName: String,
});

const Restaurant = mongoose.model("restaurant", restaurantSchema);

exports.getAllRestaurants =async () => {
  await mongoose.connect(DB_URL)
  let x = await Restaurant.find({})
  await mongoose.disconnect();
  console.log('Disconnected')
  return x
};

exports.saveRestaurant = async (restName, restId, image) => {
  let id = Object.keys(await Restaurant.find({})).length ++
  let data = {
    restName: restName,
    restId: +id,
    image: image,
  };
  await mongoose.connect(DB_URL);
  await Restaurant.create(data);
  await mongoose.disconnect();
  console.log('Disconnected')
};
