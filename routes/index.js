
const router = require('express').Router();
const path = require ("path") 
const apiRouter = require("./api") 

router.use("/api", apiRouter) 

router.get("/", function (req, res) { 
    console.log("inside / route", req.session)
    if(req.session.loggedIn) { 
        console.log("logged in")
        res.sendFile(path.join(__dirname + "/../views/index.html"))
    } else {
        res.redirect("/login")
    }
}); 

router.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname + "/../views/login.html"))
}); 

module.exports = router;