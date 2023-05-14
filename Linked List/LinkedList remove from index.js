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
    removeFrom(index){
        
        // if entered input is invalid 
        if(index < 0 || index >=this.size){
            return
        }

        // Remove first node 
        if(index == 0){
            this.head = this.next
        }else {
            // set a temporary value 'Perivios'
            let prev = this.head
            for(let i = 0; i < index-1; i++){
                prev = prev.next
            }

            // finded node "have next node refence "
            let removeNode = prev.next

            // previos node" have delete node refernce" so 
            // set "next node refence" to previos node
            prev.next = removeNode.next

            this.size--
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

list.removeFrom(2)