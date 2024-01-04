const ServiceModel = require("../models/Service").Service;


const serviceController = {

    create: async (req, res) => {

        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            }
            const response = await ServiceModel.create(service);

            res.status(201).json({ response, msg: "Serviço criado comsucesso!" });

        } catch (error) {
            console.log(`ERROR:${error}`)
        }
    }
};

module.exports = serviceController;



