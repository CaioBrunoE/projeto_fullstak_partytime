const mongoose = require("mongoose")

async function main() {

    try {
        await mongoose.connect("mongodb+srv://CaioBruno:kyhEeQG4HEHIkWIE@cluster0.lqjywgv.mongodb.net/?retryWrites=true&w=majority")
        console.log("Connectado ao banco!")
    } catch (error) {
        console.log(`ERROR: ${error}`)
    }

}

module.exports = main