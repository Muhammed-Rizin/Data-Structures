// Size of queue is fixed and last element is connected with first element
class Queue{
    // In Circular it constructor need the Size of the queue
    constructor(capacity){
        this.iteams = new Array(capacity)
        this.capacity = capacity
        this.currentLength  = 0
        this.rear = -1
        this.front = -1
    }
    enqueue(value){
        // Check queue is not full 
        if(this.currentLength !== this.capacity){
            // The rear value will increase 
            // But in case of delete there is a empty space 
            // So to solve that use current rear +1 and mod by capacity
            //      eg :- 1 % 5 = 1     6 % 5 = 1       12 % 5 = 2
            //            Queue have 3 element and add new element it is 4 % 5, result is 4 and add in 4 th position
            this.rear = (this.rear + 1) % this.capacity
            // Add value on Last 
            this.iteams[this.rear] = value
            // Length is increasing
            this.currentLength ++

            // If adding value on empty queue
            if(this.front === -1){
                this.front = this.rear
            }
        }
        else{
            console.log("Queue is Full");
        }
    }
    dequeue(){
        // If Queue is empty 
        if(this.currentLength === 0){
            return null
        }
        // Remove First value and,
        this.iteams[this.front] = null
        // Move front to next element 
        // it same as enqueue
        this.front = (this.front + 1) % this.capacity
        this.currentLength -- 
        // In the case of delete last element is a Queue set front and rear -1
        if(this.currentLength === 0){
            this.front = -1
            this.rear = -1
        }
    }

    print(){
        if(this.currentLength === 0){
            return -1
        }
        let i
        let str = ""
        for( i = this.front; i !== this.rear; i = (i+1) % this.capacity){
            str += this.iteams[i] + " "
        }
        str += this.iteams[i]
        console.log(str);
    }
}

const queue = new Queue(5)
queue.enqueue(2)
queue.enqueue(7)
queue.enqueue(8)
queue.enqueue(9)
queue.enqueue(5)
queue.dequeue()
queue.enqueue(5)
queue.print()
