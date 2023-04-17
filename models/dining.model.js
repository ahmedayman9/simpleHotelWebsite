const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  restId: Number,
  image: String,
  restName: String,
});

const Restaurant = mongoose.model("restaurant", restaurantSchema);

exports.getAllRestaurants = async () => {
  let x = await Restaurant.find({});
  return x;
};

exports.saveRestaurant = async (restName, restId, image) => {
  let id = Object.keys(await Restaurant.find({})).length++;
  let data = {
    restName: restName,
    restId: +id,
    image: image,
  };
  await Restaurant.create(data);
};
