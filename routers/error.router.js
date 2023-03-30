const router = require("express").Router()

router.all("",(req,res)=>{
    res.send("Error 404")
})


module.exports=router