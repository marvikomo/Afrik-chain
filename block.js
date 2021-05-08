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

   
}

module.exports = Block