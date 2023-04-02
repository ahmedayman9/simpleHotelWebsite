const checkoutModel = require("../models/checkout.model")
const roomModel = require("../models/rooms.model")

exports.checkout=async (req,res)=>{
    // await checkoutModel.checkout(req.query)

    console.log(req.query)
    res.redirect("../Success")
}