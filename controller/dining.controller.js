const diningModel = require("../models/dining.model");

exports.getRestaurants = (req, res, next) => {
  diningModel.getAllRestaurants().then((Rests) => {
    res.render("Dining", {
      Rests: Rests,
    });
  });
};
exports.RestaurantsAPI = async (req, res) => {
  const data = await diningModel.getAllRestaurants();
  res.send(data);
}
exports.addRestaurants = (req, res) => {
  diningModel.saveRestaurant(
    req.params.restName,
    req.params.restId,
    req.params.image
  );
  res.send("Added");
};

