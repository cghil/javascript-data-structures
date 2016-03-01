// insert(key): This inserts a new key in the tree

function BinarySearchTree(){
	var Node = function(key){
		this.key = key;
		this.left = null;
		this.right = null;
	};

	var root = null;

	var insertNode = function(node, newNode){
		if(newNode.key < node.key){ // 1
			if (node.left === null) { //2
				node.left = newNode; //3
			} else {
				insertNode(node.left, newNode) //4
			}
		} else {
			if (node.right === null) { //5
				node.right = newNode; //6
			} else {
				insertNode(node.right, newNode); //7
			}
		}
	};
	// the insertNode function will help us to find out where the correct place to insert a new node is.
	// 1. If the tree is not empty, we need to find a place to add a new

	this.insert = function(key){
		var newNode = new Node(key);

		if (root === null) {
			root = newNode;
		} else {
			insertNode(root, newNode);
		}
	};

	var inOrderTraverseNode = function(node, callback) {
		if (node !== null) {
			inOrderTraverseNode(node.left, callback);
			callback(node.key);
			inOrderTraverseNode(node.right, callback);
		}
	};
	// to tranverse a tree using the in-order method, first we need to check whether the node that was passed as a parameter is null
	this.inOrderTraverse = function(callback) {
		inOrderTraverseNode(root, callback);
	};

};


var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

function printNode(value) {
	
}