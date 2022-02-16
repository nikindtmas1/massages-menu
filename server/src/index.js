const express = require("express");
const cors = require('cors');
const app = express();

const routes = require('./routes/routes');
const mongooseConfige = require('./config/configMongoose');

const port = 5000;
app.use(express.json());


app.use(cors());
app.use(routes);
mongooseConfige(app);

app.listen(port, () => console.log("Server listenen on port " + `${port}`));
