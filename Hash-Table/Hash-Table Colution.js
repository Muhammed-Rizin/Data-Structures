class HashTable {
    // creat new hash table 
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i = 0; i<key.length;i ++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){
        const index = this.hash(key)
        // this.table[index] = value
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(iteam => iteam[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else {
                bucket.push([key, value])
            }
        }else {
            this.table[index] = [[key, value]]
        }
    }
    get(key) {
        const index = this.hash(key)
        // return this.table[index]
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(iteam => iteam[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    remove(key){
        const index = this.hash(key)
        // this.table[index] = undefined
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(iteam => iteam[0] === key)
                if(sameKeyItem){
                    bucket.splice(bucket.indexOf(sameKeyItem),1)
                }
            
        }
    }
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
hash.set("ni", 91)                  
hash.set("suhail", 50)
console.log(hash.get("in"));        // 91
console.log(hash.get("suhail"));    // 50
hash.display()                      // 5 91 6 50