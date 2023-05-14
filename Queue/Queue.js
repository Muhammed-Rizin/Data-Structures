// Queue is like array and stack , but we can only add element on last, also only deleted on first
// its called enqueue and dequeue
class Queue {
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    // Insert Value on "Last"
    enqueue(value){
        // this.items.push(value)
        // we can use Rear for insert it will reduce the complexity O(n) to O(1)
        this.items[this.rear] = value
        this.rear++
        // In this case it only replace the value bacause on push
    }
    // Delete element in "First"
    dequeue(){
        delete this.items[this.front]
        this.front++
        
    }

    // find "first" element
    peek(){
        if(this.items.length === 0){
            return 0
        }
        return this.items[0]
    }

    print(){
        console.log(this.items);
    }
}

const queue = new Queue()
queue.enqueue(1) // [ 1 ]
queue.enqueue(2) // [ 1, 2 ]
queue.enqueue(3) // [ 1, 2, 3 ]
queue.enqueue(4) // [ 1, 2, 3, 4 ]
queue.enqueue(5) // [ 1, 2, 3, 4, 5 ]
queue.dequeue()  // [ 2, 3, 4, 5 ]
queue.print()    // [ 2, 3, 4, 5 ]
