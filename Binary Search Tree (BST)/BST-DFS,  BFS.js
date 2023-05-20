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
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
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

bst.preOrder(bst.root)  // 10 5 3 6 11 
bst.inOrder(bst.root)   // 3 5 6 10 11
bst.postOrder(bst.root) // 3 6 5 11 10
bst.levelOrder()        // 10 5 11 3 6