const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const listEnpoints = require('express-list-endpoints');

const routerPath = '/.netlify/functions/api';
let characters = [];

router.post('/data', (req, res) => {
    res.send('New Record added!');
})

router.get('/data', (req, res) => {
    res.json([
        {
            "name": "Tryce",
            "ride": "BMX"
        },
        {
            "name": "Red",
            "ride": "Skateboard"
        },
        {
            "name": "Bel",
            "ride": "Inline Skates"
        }
    ]);
})

router.get('/', (req, res) => {
    res.json(listEnpoints(app));
})

app.use(routerPath, router);
module.exports.handler = serverless(app);
