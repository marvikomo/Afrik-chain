const Block = require('./block');

const bc = require('./blockchain')

const block = new Block('foo','bar','zoo','baz');

// console.log(block.toString());
// console.log(Block.genesis().toString())

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');

const bc1 = new bc();
const bc2 = new bc();
bc2.addBlock('hey');
console.log(bc1.chain, bc2.chain)
//bc.validChain()