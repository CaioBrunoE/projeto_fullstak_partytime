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
    },

    getAll: async (req, res) => {

        try {
            const services = await ServiceModel.find()

            res.json(services)

        } catch (error) {
            console.log(error)
        }

    },
    get: async (req, res) => {
        try {

            const id = req.params.id;
            const service = await ServiceModel.findById(id)

            if (!service) {
                res.status(404).json({ msg: "Serviço não encontrado." })
                return;
            }

            res.json(service);

        } catch (error) {
            console.log(error)

        }
    }
};

module.exports = serviceController;



