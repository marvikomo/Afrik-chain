const blockService = require("../services/block");
const express = require('express');

const app = express();

app.get("/work" , blockService.blocks)
app.post("/mine" , blockService.mine)

module.exports = app;