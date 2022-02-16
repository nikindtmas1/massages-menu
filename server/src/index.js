const express = require("express");
const app = express();
//const router = express.Router();
const routes = require('./routes/routes');

const port = 5000;
//app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('hello world')
//   })

app.use(routes);

app.listen(port, () => console.log("Server listenen on port " + `${port}`));
