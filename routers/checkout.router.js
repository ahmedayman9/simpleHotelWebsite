const router = require("express").Router()
const checkoutController = require("../controller/checkout.controller")
const bp = require("body-parser").urlencoded({extended:true})


router.get("/now?",bp,checkoutController.checkout)


router.use("/",(req,res)=>{
    // console.log(req)
    res.render("checkout")
})


module.exports=router