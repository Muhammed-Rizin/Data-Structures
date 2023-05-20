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
}

const bst = new BinarySearchtree()
bst.insert(10)
bst.insert(5)
bst.insert(6)
bst.insert(3)
bst.insert(11)
bst.delete(11)