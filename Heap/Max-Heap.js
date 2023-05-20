class MaxHeap{
    constructor(){
        this.heap =[]
    }

    buldHeap(array){
        this.heap = array;
        for(let i=this.parent(this.heap.length-1);i>=0;i--){
            this.shiftDown(i);
        }
    }

    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length -1)
    }

    delete(){
        [this.heap[0],this.heap[this.heap.length -1]] = [this.heap[this.heap.length - 1],this.heap[0]]
        let number = this.heap.pop()
        this.shiftDown(0)
        return number
    }
    
    sort(array){
        this.buldHeap(array)
        let array2 = []
        for(let i = 0; i< array.length; i++){
            array2.push(this.delete())
        }

        console.log(array);
    }

    shiftDown(index){
        let endIndex = this.heap.length -1
        let leftIndex = (2 * index) + 1
        while(leftIndex <= endIndex){
            let rightindex = (2 * index) + 2
            let swap

            if(rightindex <= endIndex && this.heap[rightindex] > this.heap[leftIndex]){
                swap = rightindex
            }else {
                swap = leftIndex
            }

            if(this.heap[index] < this.heap[swap]){
                let temp = this.heap[index]
                this.heap[index] = this.heap[swap]
                this.heap[swap] = temp

                index = swap
                leftIndex =  (2 * index) + 1
            }else {
                break;
            }
        }

    }
    shiftUp(index){
        let parentIndex = Math.floor((index - 1) / 2)
        while(index > 0 && this.heap[parentIndex] < this.heap[index]){
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
            index = parentIndex
            parentIndex = Math.floor((index - 1) / 2)
        } 
    }
    parent(i){
        return  Math.floor((i-1)/2)
    }
    display(){
        for(let i=0;i<this.heap.length;i++){
            console.log(this.heap[i]);
        }
    }
}

const heap = new MaxHeap()
let array = [10,5,15,3,8]
heap.buldHeap(array);
heap.display()
heap.sort(array)