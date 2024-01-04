const router = require("express").Router();

//Serviços router
const servicesRouter = require("./services");

router.use("/", servicesRouter);

module.exports = router;
