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

    it('invalidates a chain with a corrupt genesis block', ()=>{
        blockchain2.chain[0].data = "good";
        
        expect(blockchain.validChain(blockchain2.chain)).toBe(false);
    })

    it('invalidates a corrupt chain', ()=>{
        blockchain2.addBlock('good');
        blockchain2.chain[1].data ='bad'
        expect(blockchain.validChain(blockchain2.chain)).toBe(false);
    })
})