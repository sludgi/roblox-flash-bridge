const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// This tells the server where your games are
const GAMES_DIR = path.join(__dirname, 'games');

app.get('/', (req, res) => {
    res.send('Flash Bridge is LIVE and ready for games!');
});

// Roblox will call this to see what games you have
app.get('/list-games', (req, res) => {
    // For now, let's just hardcode it to see if it works
    const myGames = {
        categories: ["Test", "Action"],
        games: [
            { name: "Test Game", path: "test/game.swf", category: "Test" }
        ]
    };
    res.json(myGames);
});

app.listen(PORT, () => {
    console.log(`Bridge Engine running on port ${PORT}`);
});
