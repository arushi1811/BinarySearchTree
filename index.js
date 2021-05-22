document.querySelector("#insert-btn").addEventListener("click", insert);
document.querySelector("#delete-btn").addEventListener("click", del);
document.querySelector("#inorder").addEventListener("click", inorder);
document.querySelector("#preorder").addEventListener("click", preorder);
document.querySelector("#postorder").addEventListener("click", postorder);
//add event listener for enter key

class Node {
    constructor(value) {
        this.value= value;
        this.left=null;
        this.right=null;
    }
}

class Tree {
    constructor() {
        this.root=null;
    }
}

let tree = new Tree();


function insert() {
  //error check for value!= int and value==null

  let toAdd = document.querySelector('#insert').value;
  document.querySelector('#insert').value=null;
  console.log(toAdd);
}

function del() {
  //error check for value!= int and value==null
  //error check for value not exist
}

function inorder() {
  //check for empty tree
}

function preorder() {
  //check for empty tree
}

function postorder() {
  //check for empty tree
}
