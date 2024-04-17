const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const { router } = require('json-server');
const { fileURLToPath } = require('url');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', router('db.json'));

io.on('connection', (socket) => {
    console.log("someone connected");
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
