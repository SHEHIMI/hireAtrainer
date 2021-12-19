var express = require("express");
var router = express.Router();

var MongoController = require("../controllers/MongoController");

router.post("/insertSignUpdata", MongoController.seedCoachDataSignUp);
router.post("/postLoginData", MongoController.postLoginData);
router.get("/loadCoaches", MongoController.loadCoaches);
router.get("/loadCoachesProfile", MongoController.loadCoachesProfile);
router.get("/loadCoachwithEmail", MongoController.loadCoachwithEmail);
router.get("/getData", MongoController.retrieveData);
router.post("/deleteTrainer", MongoController.deleteCoach);
router.post("/addCert", MongoController.insertCertification);
module.exports = router;
