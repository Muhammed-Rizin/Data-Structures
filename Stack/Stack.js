// Stack is like array , but we can only add or delete last element
class Stack {
    constructor(){
        this.items = []
    }
    // Add element on "last"
    push(value){
        this.items.push(value)
    }
    // Remove "last" element
    pop(){
        return this.items.pop()
    }
    // Find Last element
    peek(){
        return this.items[this.items.length -1]
    }
    // To print 
    print(){
        console.log(this.items);
    }
    
}

const stack = new Stack()
stack.push(5) // [ 5 ]
stack.push(8) // [ 5, 8 ]
stack.push(4) // [ 5, 8, 4 ]
stack.push(6) // [ 5, 8, 4, 6 ]
stack.pop()   // [ 5, 8, 4 ]
stack.print() // [ 5, 8, 4, 6 ]


