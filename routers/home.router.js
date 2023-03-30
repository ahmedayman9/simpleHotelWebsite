const router = require("express").Router();

router.all("/", (req, res, next) => {
  res.render("home");
});

module.exports = router;
