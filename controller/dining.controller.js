const diningModel = require("../models/dining.model");

exports.getRestaurants = (req, res, next) => {
  diningModel.getAllRestaurants().then((Rests) => {
    res.render("Dining", {
      Rests: Rests,
    });
  });
};

