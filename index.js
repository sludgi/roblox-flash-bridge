const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 10000;

app.use(express.json());

// This is the "Brain" variable that holds the Roblox data
let robloxData = { score: 0 };

// 1. This tells the server to show your 'index.html' when you visit the link
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 2. This is the "Bridge" where Roblox sends data
app.post('/flash-bridge', (req, res) => {
    robloxData = req.body;
    console.log("Data received from Roblox:", robloxData);
    res.sendStatus(200);
});

// 3. This is where the Flash game asks for the data
app.get('/flash-bridge', (req, res) => {
    res.json(robloxData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
