const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/list-games', (req, res) => {
res.json({
message: "Ecosystem is Live!",
categories: ["Action", "Test"],
games: [{ name: "Test Game", path: "test/game.swf" }]
});
});

app.get('/', (req, res) => {
res.send("Bridge is Online.");
});

app.listen(PORT, () => {
console.log("Server running");
});
