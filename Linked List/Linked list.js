// Note :- Node is an object contain value and referce to the next node 
//      eg :- { value: 10, next: null }


class Node {
    constructor (value){
        // List contain "value" and "refernce" to the next node
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        // List "size" and list "Head"(Head always is pointing in first node)
        this.head = null
        this.size = 0
    }
    isEmpty(){
        // Check if List is "empty"
        return this.size === 0
    }
    getSize(){
        // Check "size"
        return this.size
    }

    // Prepend 
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

    // Append 
    append(value){
        const node = new Node(value)
        // return value example =  Node { value: 30, next: Node { value: 30, next: null } }

        if(this.isEmpty()){
            this.head = node
        }else {
            // creat temporary value 'previous'
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

    // insert Node 
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
            
            // creat temporary value 'Previous' 
            let prev = this.head
            
            // find "index" of previous node
            for(let i = 0 ; i < index-1 ; i++){
                prev = prev.next
            }
            // assign next node refernce to new node
            node.next = prev.next
            // set new node refernce to previous
            prev.next = node

            this.size++
        }
    }

    // remove "from index"
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

            // previous node" have delete node refernce" so 
            // set "next node refence" to previous node
            prev.next = removeNode.next
        }

        this.size--
    }

    // remove node 
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
            // set a temporary value 'Previous'
            let prev = this.head

            // find previous node is while loop
            // condition if "prev.next not equal null and not equal to value" (then get previous value)
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

    // Search Node 
    searchValue(value){
        if(this.isEmpty()){
            return -1
        }

        // First Value
        let curr = this.head
        let i = 0 
        while(curr){
            if(curr.value === value){
                return i
            }

            curr = curr.next
            i++
        }

        return -1
    }

    // Reverse List
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

    // Print values
    print(){
        if(this.isEmpty()){
            console.log(`List is Empty`)

        }else{
            // creat a temporary value "current" 
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


// New Instance of "LinkedList"
const list = new LinkedList()



// Find Node "size" and check "Empty"
// console.log(`Is Empty? ${list.isEmpty()}`);
// console.log(`Size ${list.getSize()}`);

// Print empty list 
list.print()
//          Out put :- List is Empty

// Insert 1 value "in first" and print
list.prepand(30)
list.print()
//          Out put :- 30

// Insert more value "in first" and print 
list.prepand(20)
list.prepand(10)
list.print()
//          Out put :- 10 20 30

// Insert Value on "Last and Print"
list.append(40)
list.print()
//          Out put :- 10 20 30 40

list.append(50)
list.append(60)
list.print()
//          Out put :- 10 20 30 40 50 60


list.insert(45,4)
list.print()
//          Out put :- 10 20 30 40 45 50 60


// Remove value from index
list.removeFrom(4)
list.print()
//          Out put :- 10 20 30 40 50 60


// Remove value 
list.removeValue(10)
list.print()
//          Out put :- 20 30 40 50 60

list.removeValue(50)
list.print()
//          Out put :- 20 30 40 60

console.log(list.searchValue(60));
//          Out put :- 3

list.reverse()
list.print()
//          Out Put :- 60 40 30 20