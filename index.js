const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 10000;

app.use(express.json());

// Variables to store Roblox data
let robloxData = { score: 0 };

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/flash-bridge', (req, res) => {
    robloxData = req.body;
    console.log("Data from Roblox:", robloxData);
    res.sendStatus(200);
});

app.get('/flash-bridge', (req, res) => {
    res.json(robloxData);
});

// THIS PART WAKES UP THE LOGS
app.listen(port, () => {
    console.log("============================");
    console.log("SERVER IS NOW FULLY RUNNING!");
    console.log("============================");
});
