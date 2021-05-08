const SHA256 = require('crypto-js')

class Block {
    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp;
        this.data = data;
        this.lastHash = lastHash
        this.hash = hash

    }

    toString()
    {
        return `Block - 
        Timestamp: ${this.timestamp}
        Last Hash: ${this.lastHash.substring(0, 10)}
        Hash.....: ${this.hash.substring(0, 10)}
        Data.....: ${this.data}
        `
    }

    static genesis(){
        return new this('Genesis time','------','f157-h46',[])
    }

    static mineBlock(lastBlock, data){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = 'todo-hash';

        return new this(timestamp, lastHash, hash, data)

    }

    static hash(timestamp, lastHash, data)
    {
        return SHA256(`${timestamp}${lastHash}${data}`).toString()
    }

   
}

module.exports = Block