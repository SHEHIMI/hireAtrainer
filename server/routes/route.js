var express = require("express");
var router = express.Router();

var MongoController = require("../controllers/MongoController");

router.post("/insertSignUpdata", MongoController.seedCoachDataSignUp);
router.post("/postLoginData", MongoController.postLoginData);
router.get("/loadCoaches", MongoController.loadCoaches);
router.get("/loadCoachesProfile", MongoController.loadCoachesProfile);
router.get("/loadCoachwithEmail", MongoController.loadCoachwithEmail);
module.exports = router;
