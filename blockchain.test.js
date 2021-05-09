const Blockchain = require('./blockchain')
const Block = require('./block')

describe('testing blockchain', ()=>{
    let blockchain, blockchain2;
    beforeEach(()=>{
        blockchain = new Blockchain()
        blockchain2 = new Blockchain()
    })

    it('start with the genesis block', ()=>{
        expect(blockchain.chain[0]).toEqual(Block.genesis())
    });

    it('add new block', ()=>{
        const data = 'foo';
        blockchain.addBlock(data)
        
        expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(data) 
    })

    it('validates chain', ()=>{
      blockchain2.addBlock('marvel');

      expect(blockchain.validChain(blockchain2.chain)).toBe(true)
    })
})