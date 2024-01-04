const router = require("express").Router();

const serviceController = require("../controllers/serviceControler");

router
    .route("/services")
    .post((req, res) => { serviceController.create(req, res) });


module.exports = router;