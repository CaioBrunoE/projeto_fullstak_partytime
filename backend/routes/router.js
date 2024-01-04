const router = require("express").Router();

//Serviços router
const servicesRouter = require("./services");

router.use("/", servicesRouter);

//Parties routes

const partyRoutes= require("./parties")

router.use("/",partyRoutes);

module.exports = router;
