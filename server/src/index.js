const express = require('express');
const app = express();
const router = express.Router();

const port = 5000;
app.use(express.json());

router.get('/', (req, res) => {
    res.json({text: 'It is working!'})
});

app.listen(port, () => console.log('Server listenen on port ' + `${port}`))