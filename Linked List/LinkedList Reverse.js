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
        const node = new Node(value)

        if(this.isEmpty()){
            this.head = node
        }else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    reverse(){
        // 1 -> 2 -> 3 -> null  to  3 -> 2 -> 1 -> null  (null <- 1 <- 2 <- 3)
        let prev = null
        let curr = this.head
        while(curr){
            // set next node for next itration 
            let next = curr.next
            // set previous node refernce to current node (in first node set null)
            curr.next = prev
            // set current Node as previous node
            prev = curr
            // set next Node as Current Node
            curr = next 
        }

        // after while loop reversed first Node available on prev Variable
        this.head = prev

        // In this 
        // First we need to set "null" on first Node next
        // Then set a "Current value" from the Current Node
        // when current Node is available set "next Node" from Current Node refernce
        // Previous Node refernce to  "Current Node"
        // Set Current Node as "Previous Node"
        // Next Node as current Node
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

list.reverse()
list.print()