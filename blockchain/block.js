const SHA256 = require('crypto-js/sha256')

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
        const hash =  Block.hash(timestamp, lastHash, data)

        return new this(timestamp, lastHash, hash, data)

    }

    static hash(timestamp, lastHash, data)
    {
      return SHA256(`${timestamp}${lastHash}${data}`).toString()
    }

    static blockHash(block)
    {
        const {timestamp, lastHash, data} = block

        return this.hash(timestamp, lastHash, data);

    }


}

module.exports = Block