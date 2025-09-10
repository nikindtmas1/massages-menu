const mongoose = require('mongoose');

const { development } = require('../config/config');

const connection = development.dbAtlas;

module.exports = (app) => {

    async function main(){
        await mongoose.connect(connection);

        console.log("Data base connected!");
    }

    main();
}