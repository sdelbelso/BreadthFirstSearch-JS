// basic node implementation for use in BFS below
class Node {
	constructor(value, children){
		this.value = value;
		this.children = children;
	}
}

// assuming root is a Node
function BreadthFirstSearch(root, searchVal) {
	const queue = [root];
	
	while (queue.length > 0) {
		if (queue[0].value === searchVal) {
			return queue[0];
		}
		// add all child nodes to queue
		queue[0].children.forEach((child) => {
			queue.push(child);
		});
		// remove element that we just searched
		queue.shift();
	}
	
	// didn't find a value in the tree
	return null;
}
