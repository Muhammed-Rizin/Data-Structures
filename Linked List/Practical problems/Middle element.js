class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

let head = null
let size = 0

const append = value => {
    const node = new Node(value)
    if(size === 0){
        head = node
    }else {
        let curr = head
        while(curr.next){
            curr = curr.next
        }
        curr.next = node
    }
    size++
}
const middleElement = () => {
    if(size < 2){
        console.log("Size less than 2");
    }else {
        let slow = head
        let fast = head
        let last = head.next
        if(size % 2 == 0){
            while(last.next){
                slow = slow.next
                fast = last.next
                last = fast.next
            }
        }else {
            while(fast.next){
                slow = slow.next
                fast = last.next
                last = fast.next
            }
        }
        console.log(slow.value);
    }
}

const print = () => {
    if(size ===0){
        console.log("hi");
    }else {
        let curr = head
        let str = ""
        while(curr){
            str += `${curr.value} `
            curr = curr.next
        }
        console.log(str);
    }
}

print()
append(10)
append(20)
append(30)
append(40)
append(50)
print()
middleElement()