class Node {
    constructor(value) {
        this.val = value
        this.leftChild = null
        this.rightChild = null
    }
}
class BinarySearchTree {
    constructor(rootValue) {
        this.root = new Node(rootValue)
    }
    
    insert(currentNode, newValue) {
        if (currentNode === null) {
            currentNode = new Node(newValue)
        } else if (newValue < currentNode.val) {
            currentNode.leftChild = this.insert(currentNode.leftChild, newValue)
        } else {
            currentNode.rightChild = this.insert(currentNode.rightChild, newValue)
        }
        return currentNode
    }
    
    insertBST(newValue) {
        if(this.root==null){
            this.root=new Node(newValue)
            return
        }
        this.insert(this.root, newValue)
    }
    
    preOrderPrint(currentNode) {
        if (currentNode !== null) {
            console.log(currentNode.val)
            this.preOrderPrint(currentNode.leftChild)
            this.preOrderPrint(currentNode.rightChild)
        }
    }
    
    inOrderPrint(currentNode) {
        if (currentNode !== null) {
            this.inOrderPrint(currentNode.leftChild)
            console.log(currentNode.val)
            this.inOrderPrint(currentNode.rightChild)
        }
    }
    
    postOrderPrint(currentNode) {
        if (currentNode !== null) {
            this.postOrderPrint(currentNode.leftChild)
            this.postOrderPrint(currentNode.rightChild)
            console.log(currentNode.val)
        }
    }
    
    search(currentNode, value) {
        if (currentNode !== null) {
            if (value == currentNode.val) {
                return currentNode
            } else if (value < currentNode.val) {
                return this.search(currentNode.leftChild, value)
            } else {
                return this.search(currentNode.rightChild, value)
            }
        } else {
            return null
        }
    }
    
    searchBST(value) {
        return this.search(this.root, value)
         }
         
    delete(currentNode, value) {
        // empty BST, currentNode initialized to root node
        if (currentNode == null) {
            return false
        }
        let parentNode
        // search node to be deleted, iterate until node is found
        while (currentNode && (currentNode.val != value)) {
            parentNode = currentNode
            if (value < currentNode.val) {
                currentNode = currentNode.leftChild
            } else {
                currentNode = currentNode.rightChild
            }
        }
        // if current node points to end, node not found, exit
        if (currentNode === null) {
            return false
        } 
        // else consider possible cases to delete given node (currentNode):
        // case 1 : leaf node, no child
        else if (currentNode.leftChild == null && currentNode.rightChild == null) {
            // current node same as root node, make root to null,=> empty BST
            if(currentNode.val==this.root.val){
                this.root=null
                return true
            }
            // else if the leaf, belongs to left subtree, root.left = null
            else if (currentNode.val < parentNode.val) {
                parentNode.leftChild = null
                return true
            } 
            // else if the leaf, belongs to right subtree, root.right = null
            else {
                parentNode.rightChild = null
                return true
            }
        } 
        // case 2 : one child 
        else if (currentNode.rightChild == null) {
            if(currentNode.val==this.root.val){
                this.root=currentNode.leftChild
                return true
            }
            else if (currentNode.leftChild.val < parentNode.val) {
                parentNode.leftChild = currentNode.leftChild
                return true
            } else {
                parentNode.rightChild = currentNode.leftChild
                return true
            }
        } else if (currentNode.leftChild == null) {
            if(currentNode.val==this.root.val){
                this.root = currentNode.rightChild
                return true
            }
            else if (currentNode.rightChild.val < parentNode.val) {
                parentNode.leftChild = currentNode.rightChild
                return true
            } else {
                parentNode.rightChild = currentNode.rightChild
                return true
            }
        } else { 
            let minRight = currentNode.rightChild
            while (minRight.leftChild !== null) {
                minRight = minRight.leftChild
            }
            let temp=minRight.val
            this.delete(this.root, minRight.val)
            currentNode.val = temp
            return true
        }
    }


// findMin(rootNode) => {
//   if(rootNode == null)
//     return null
//   else if(rootNode.leftChild == null)
//       return rootNode.val
//   else
//     return findMin(rootNode.leftChild)
// }

findMin(node) => {
    if(node){   
      //Return the left most descendant's value
      while(node && node.left !== null){
        node = node.left;
      }
      
      return node.val
    }
    
    return null;
}

    findMax(node){
        if(node){
            // return the rightmost descendant's value
            while(node && node.right!==null){
            node = node.right;
            }
            return node.val
        }
        return null
    }
}

let BST = new BinarySearchTree(6)
BST.insertBST(20)
BST.insertBST(-1)
console.log(findMin(BST.root))
