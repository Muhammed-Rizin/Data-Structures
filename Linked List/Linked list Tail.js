class Node {
    constructor (value){
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    prepand(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value) {
        const node = new Node(value)

        if(this.isEmpty()){
            this.head = node
            this.tail = node
            // set tail also node (first and last value is same)
        }else {
            // set new Node refernce to last Node
            this.tail.next = node

            // new Node as tail
            this.tail = node

        }
        this.size++
    }
    removeFromFront(){
        if(this.isEmpty()){
            return
        }else {
            
            this.head = this.head.next
        }
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return
        }
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else {
            let prev = this.head
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
    }

    print(){
        if(this.isEmpty()){
            console.log(`List is Empty`)

        }else{
            let curr = this.head
            let listValue = ''
            
            while(curr){
                listValue += `${curr.value} `
                curr = curr.next
            }

            console.log(listValue);
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

list.append(40)
list.removeFromFront()
list.removeFromEnd()
list.print()