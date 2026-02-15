const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Flash-Roblox Bridge is ONLINE');
});

// This is what Roblox will call to get data
app.get('/flash-data', (req, res) => {
    res.json({
        message: "Data successfully fetched from Render!",
        status: "Active"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
