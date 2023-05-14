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
    append(value){
        const node = new Node(value)
        // return value example =  Node { value: 30, next: null }

        if(this.isEmpty()){
            this.head = node
        }else {
            // creat temporary value 'previos'
            let prev = this.head

            // find last node in list and "assign to prev"
            while(prev.next){
                prev = prev.next
            }
            // set newly added node's "refernce" to last node
            prev.next = node
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

list.append(40)
list.print()

list.append(50)
list.append(60)
list.print()