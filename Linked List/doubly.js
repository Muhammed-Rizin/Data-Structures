class Node {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }

    prepand(value){
        const node = new Node(value)
        if(this.size <= 0){
            this.head = node
            this.tail = node
        }else {
            node.next = this.head
            this.head = node

        }
        this.size++
    }
    reverse(){
        if(this.size <= 0){
            return -1
        }

        let curr = this.tail
        let list = ""
        while(curr.prev){
            list += `${curr.value} `
            curr = curr.prev
        }
    }

    print(){
        let curr = this.head
        let listValue =""
        while (curr) {
            console.log(curr);
            listValue += `${curr.value} `
            curr = curr.next
        }

        console.log(listValue);
    }
}

const list2 = new LinkedList()
list2.prepand(3)
list2.prepand(4)
list2.prepand(5)
list2.print()
