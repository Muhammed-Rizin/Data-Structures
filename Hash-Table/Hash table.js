class HashTable {
    // creat new hash table 
    constructor(size){
        // created new array 
        this.table = new Array(size)
        this.size = size
    }

    // for hashing
    hash(key){
        let total = 0
        // convert every key to numeric value
        for(let i = 0; i<key.length;i ++){
            total += key.charCodeAt(i)
        }
        // return index value less than size
        return total % this.size
    }

    // set new key
    set(key, value){
        // creat index value thorugh hashing key
        const index = this.hash(key)
        // assign value to index position
        this.table[index] = value
    }
    // to get value
    get(key) {
        //  get index value thorugh hashing key
        const index = this.hash(key)
        // return index value
        return this.table[index]
    }

    // remove
    remove(key){
        //  get index value thorugh hashing key
        const index = this.hash(key)
        this.table[index] = undefined
    }

    // display all vlaue
    display() {
        for(let i =0; i < this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
} 

const hash = new HashTable(10)
hash.set("in", 91)                  
hash.set("suhail", 50)
console.log(hash.get("in"));        // 91
console.log(hash.get("suhail"));    // 50
hash.display()                      // 5 91 6 50