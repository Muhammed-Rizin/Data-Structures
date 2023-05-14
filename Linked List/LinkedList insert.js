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
    insert(value,index){
        // if entered input is invalid 
        if(index < 0 || index > this.size){
            return
        }

        if(index === 0){
            this.prepand(value)
        }else {
            const node = new Node(value)
            // return value example =  Node { value: 30, next: null }
            
            // creat temporary value 'Previos' 
            let prev = this.head
            
            // find "index" of previos node
            for(let i = 0 ; i < index-1 ; i++){
                prev = prev.next
            }
            // assign next node refernce to new node
            node.next = prev.next
            // set new node refernce to previos
            prev.next = node

            this.size++
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
