const express = require('express');
const app = express();
app.use(express.json());

let flashData = { score: 0, status: "idle", lastPlayer: "none" };

// Roblox calls this to SEE what the Flash game is doing
app.get('/flash-bridge', (req, res) => {
    res.json(flashData);
});

// Roblox calls this to CHANGE what the Flash game should do
app.post('/flash-bridge', (req, res) => {
    flashData = {
        score: req.body.score || flashData.score,
        status: req.body.status || flashData.status,
        lastPlayer: req.body.user || "Unknown"
    };
    console.log("Updated Flash State:", flashData);
    res.json({ success: true, newState: flashData });
});

app.listen(process.env.PORT || 10000);
