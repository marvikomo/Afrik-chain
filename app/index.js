const  express = require('express');
const bodyparser = require('body-parser')
const Blockchain = require('../blockchain');

const HTTP_PORT = process.env.HTTP_PORT || 8900;


const app = express();

const blockchain = new Blockchain();

app.use(bodyparser.json())

app.get('/blocks', (req, res)=>{
  res.json(blockchain.chain)
})

app.post('/mine', (req, res)=>{
    const block = blockchain.addBlock(req.body.data);
    console.log("new block added")

    res.redirect('/blocks')
})



app.listen(HTTP_PORT, ()=> console.log(`Listening on port ${HTTP_PORT}`))