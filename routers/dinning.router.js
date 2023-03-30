const router = require("express").Router();
const diningController = require("../controller/dining.controller");

router.get("/", diningController.getRestaurants);

router.get("/show", diningController.RestaurantsAPI);

router.post("/add/:restName/:restId/:image", diningController.addRestaurants);

module.exports = router;

