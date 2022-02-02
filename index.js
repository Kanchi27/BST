// time complexity of BST which is linear i.e one sided , like a linked //list wont have O(logn) time complexity instead it will be O(n)
// 5 --> 10 ---> 20 ---> 57 -->. --> 90

class Node {
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
  
}
class BST {
  constructor() {
    this.root = null;
    this.size = 0
  }

  // Best , avg case
  // O(log(n))
  insert(value) {
    let newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
      this.size++;
      return this
    }
    let current = this.root;
    while(true){
      if(value === current.value) return undefined;
      if(value > current.value){
        if(!current.right){
          current.right = newNode;
          this.size++;
          return this;
        }
        current= current.right;
      }else if(value < current.value){
        if(!current.left){
          current.left = newNode;
          this.size++;
          return this;
        }
        current= current.left
      }
    }
  }

// Best , avg case
  // O(log(n))
  find(value){
    if(!this.root) return false;
    let current = this.root;
    while(current){
      if(value > current.value){
        current = current.right
      }else if(value < current.value){
        current = current.left
      }else {
        return true
      }
    }
    return false
   
  }

  // breadth first search, implement using a queue that will hold elements of a level, and pop off elements into the data array while considering their childs
  bfs(){
    let data = [], queue = [];
    queue.push(this.root);
    while(queue.length){
      let node = queue.shift();
      data.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;
  }

// consider dfs algo when tree is too wide

// start from root, iterate over all left nodes, then right
  dfsPreOrder(){
    let data = [];
    function traverse(node){
      data.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

// looping over from root upto the leftmost child, iterate over all children back to parent nodes on left ,then right
  dfsPosteOrder(){
    let data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }


// looping over from root upto the leftmost child, iterate over all children from left, then parent, then right children, over to top
  dfsInOrder(){
    let data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      data.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}





const bst = new BST();
bst.insert(55);
bst.insert(10);
bst.insert(15);
bst.insert(75);
bst.insert(5);
bst.insert(93);
bst.insert(20);
bst.insert(120);
bst.insert(60);
bst.insert(1);
console.log(bst.bfs());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPosteOrder());
console.log(bst.dfsInOrder());
// console.log(bst.find(75));
// console.log(bst);
// console.log(bst.root.left);
// console.log(bst.root.right);




//                           55
//          10                             75
//       5        15                 60          93
  // 1                  20                             120
