"use strict";

const Blockchain = require("../../blockchain");
const P2PServer = require("../p2p-server");

const blockchain = new Blockchain();
const p2pServer = new P2PServer(blockchain);

exports.blocks = async (req, res, next) => {
  res.json(blockchain.chain);
};

exports.mine = async (req, res, next) => {
  const block = blockchain.addBlock(req.body.data);
  console.log("new block added");

  p2pServer.syncChains();

  res.redirect("/api/v1/work");
};
