const express = require('express');
const bodyparser = require('body-parser')
const Blockchain = require('../blockchain');
const P2PServer = require('./p2p-server')

const HTTP_PORT = process.env.HTTP_PORT || 8900;

// Route
const blocksRoute = require('./routes/block')

const app = express();

const blockchain = new Blockchain();

const p2pServer = new P2PServer(blockchain)

app.use(bodyparser.json())

app.use('/api/v1/',blocksRoute)

app.listen(HTTP_PORT, ()=> console.log(`Listening on port ${HTTP_PORT}`))

p2pServer.listen()