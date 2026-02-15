const express = require('express');
const app = express();
app.use(express.json()); // Allows the server to read data from Roblox

// This handles the "GetAsync" (The Connection Lost error)
app.get('/list-games', (req, res) => {
    res.json({ status: "Success", message: "Bridge is active" });
});

// This handles the "PostAsync" (The 404 error)
app.post('/list-games', (req, res) => {
    console.log("Data received from Roblox:", req.body);
    res.json({ status: "Accepted", received: req.body });
});

app.listen(process.env.PORT || 10000, () => {
    console.log("Server is running");
});
