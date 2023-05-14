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
    removeValue(value){
        // if entered value is invalid
        if(this.isEmpty()){
            return
        }
        

        // First value
        if(value === this.head.value){
            this.head = this.head.next
            this.size--
        }else {
            // set a temporary value 'Previos'
            let prev = this.head

            // find previos node is while loop
            // condition if "prev.next not equal null and not equal to value" (then get previos value)
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            // if value not in the node "prev.next is null"

            
            if(prev.next){
                let removeNode = prev.next
                prev.next = removeNode.next 
                this.size--
                return
            }

            //if value not found 
            return null
        }
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

list.removeValue(2)
list.print()