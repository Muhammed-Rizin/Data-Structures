class Node {
    constructor (value){
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    prepand(value){
        // Instance of "Node"
        const node = new Node(value)
        // return value example =  Node { value: 30, next: null }

        if(this.isEmpty()){
            // Insert value in Empty List    
            this.head = node
        }else {
            // Insert value in First
            node.next = this.head
            this.head = node
            // Set First node as "Head"
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log(`List is Empty`)
        }else{
            let curr = this.head
            let listValues = ''
            
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList()

console.log(`Is Empty? ${list.isEmpty()}`);
console.log(`Size ${list.getSize()}`);

list.print()

list.prepand(30)
list.print()

list.prepand(20)
list.prepand(10)
list.print()