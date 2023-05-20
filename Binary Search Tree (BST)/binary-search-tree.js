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

    min(root){
        if(root.left){
            return this.min(root.left)
        }else {
            return root.value
        }
    }
    
    max(root){
        if(root.right){
            return this.max(root.right)
        }else {
            return root.value
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value){
        if(root === null){
            return root
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left, value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
        }else {
            if(!root.left && !root.right){
                return null
            }

            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }

            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    isBst(root){
        if(!root){
            return true
        }
        if(root.left && this.max(root.left) > root.value){
            return false
        }
        if(root.right && this.min(root.right) < root.value){
            return false
        }

        if(!this.isBst(root.left) || !this.isBst(root.right)){
            return false
        }

        return true
    }
}

const bst = new BinarySearchtree()
bst.insert(10)
bst.insert(5)
bst.insert(6)
bst.insert(3)
bst.insert(11)

console.log(bst.search(bst.root, 6)); // true
bst.preOrder(bst.root)  // 10 5 3 6 11 
bst.inOrder(bst.root)   // 3 5 6 10 11
bst.postOrder(bst.root) // 3 6 5 11 10
bst.levelOrder()        // 10 5 11 3 6
console.log(bst.min(bst.root)); // 3
console.log(bst.max(bst.root)); // 11
bst.delete(11)
console.log(bst.isBst(bst.root)); // true