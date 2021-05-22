document.querySelector("#insert-btn").addEventListener("click", insert);
document.querySelector("#delete-btn").addEventListener("click", del);
document.querySelector("#inorder").addEventListener("click", inorder);
document.querySelector("#preorder").addEventListener("click", preorder);
document.querySelector("#postorder").addEventListener("click", postorder);
//add event listener for enter key

class Node {
  constructor(value, trav) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.traversal = trav;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.levels = 1;
  }

  addNewLevel(node, level, trav) {
    this.levels += 1;

    //create new row
    let row = document.createElement("tr");
    row.classList.add("layer");
    row.id = "layer" + String(level);

    //create td for each possible element in this level
    let prevLayer = document
      .getElementById("layer" + String(this.levels - 1))
      .querySelectorAll("td"); //all td of previous layer
    for (let i = 0; i < prevLayer.length; i++) {
      let el1 = document.createElement("td");
      let el2 = document.createElement("td");
      el1.id = prevLayer[i].id + "l";
      el2.id = prevLayer[i].id + "r";
      row.appendChild(el1);
      row.appendChild(el2);
    }
    document.querySelector(".tree").appendChild(row);

    //render node on page
    document.getElementById(trav).textContent = node.value;
    document.getElementById(trav).classList.add("node");
  }

  addToExisting(node, trav) {
    document.getElementById(trav).textContent = node.value;
    document.getElementById(trav).classList.add("node");
  }

  treeInsert(r, node, level, trav) {
    if (node.value <= r.value) {
      if (r.left === null) {
        node.traversal = trav + "l";
        r.left = node;
        level+=1;
        trav+="l";
        if (level>this.levels) {
            this.addNewLevel(node, level, trav);
        }
        else {
            this.addToExisting(node, trav);
        }
      } else {
        this.treeInsert(r.left, node, (level += 1), (trav += "l"));
      }
    } else {
      if (r.right === null) {
        node.traversal = trav + "r";
        trav+="r";
        r.right = node;
        level+=1;
        
        if (level>this.levels) {
            this.addNewLevel(node, level, trav);
        }
        else {
            this.addToExisting(node, trav);
        }
        
      } else {
        this.treeInsert(r.right, node, (level += 1), (trav += "r"));
      }
    }
  }



}

let tree = new Tree();

function insert() {
  let treeclass = document.querySelector(".tree");
  let toAdd = Number(document.querySelector("#insert").value);
  document.querySelector("#insert").value = null;

  //checking for empty input
  if (toAdd === "") {
    alert("Please insert and integer.");
  }
  //creating new node if input is valid
  let newNode = new Node((value = toAdd), (traversal = "r"));
  //dealing with corner case of creating root
  if (tree.root === null) {
    tree.root = newNode;
    newNode.traversal = "r";
    let row = document.createElement("tr");
    let el = document.createElement("td");
    el.id = "r";
    el.classList.add("node");
    el.textContent = toAdd;
    row.appendChild(el);
    row.classList.add("layer");
    row.id = "layer1";
    treeclass.append(row);
  } else {
    tree.treeInsert(tree.root, newNode, 1, "r");
  }
}

function remAndAdd(id, class1, class2) {
  document.getElementById(id).classList.remove(class1);
  document.getElementById(id).classList.add(class2);
}

function pause(milliseconds) {
	var dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}

function del() {
  //error check for value!= int and value==null
  //error check for value not exist
}

function inorder() {
  //check for empty tree
  if (tree.root===null) {
    alert('The tree is empty.');
  }

  else {
    inTrav(tree.root);
  }
  
}

function inTrav(r) {
  if (r!=null) {

    inTrav(r.left)

    remAndAdd(r.traversal, "node", "node2")
    pause(1000);
    remAndAdd(r.traversal,"node2","node");    
    console.log(r.value);

    inTrav(r.right);
  }

}

function preorder() {
  //check for empty tree
}

function postorder() {
  //check for empty tree
}

function drawline(from, to) {
    let rect = document.getElementById(from.traversal).getBoundingClientRect();
    let rect2 = document.getElementById(to.traversal).getBoundingClientRect();
    let x1= (rect.left);
    let y1 = (rect.top);
    let x2 = (rect2.left);
    let y2 = (rect2.top);
    let line = document.createElement('line');
    line.setAttribute('x1',x1);
    line.setAttribute('y1',y1);
    line.setAttribute('x2',x2);
    line.setAttribute('y2',y2);
    line.style="stroke-width:2px,stroke:rgb(0,0,0)";

    return line;
    


}
