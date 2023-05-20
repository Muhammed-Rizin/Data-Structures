class Node {
    // Creating new node, also in BST a node have left and right child
    // Node { value: 10, left: null, right: null }
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchtree {
    constructor(){
        this.root = null
    }

    // Insert value
    insert(value){
        const node = new Node(value)
        if(this.root === null){
            this.root = node
        }else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            }else {
                this.insertNode(root.left, node)
            }
        }else {
            if(root.right === null){
                root.right = node
            }else {
                this.insertNode(root.right, node)
            }
        }
    }

    search(root, value){
        if(!root){
            return false
        }else {
            if(root.value === value){
                return true
            }else if(value < root.value){
                return this.search(root.left, value)
            }else {
                return this.search(root.right, value)
            }
        }
    }
}

const bst = new BinarySearchtree()
bst.insert(10)
bst.insert(5)
bst.insert(6)
bst.insert(3)
bst.insert(11)
console.log(bst.search(bst.root, 6)); // true