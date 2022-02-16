const mongoose = require('mongoose');

const { development } = require('../config/config');

const connection = development.PORT;

module.exports = (app) => {

    async function main(){
        await mongoose.connect(connection, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Data base connected!");
    }

    main();
}