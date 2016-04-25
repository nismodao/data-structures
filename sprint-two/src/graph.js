// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.Node = {};
};

//Node contains nodes's value {value:value}
//edeges contains connected nodes value;

var graph = new Graph();
// ------------------------
// Add a node to the graph, passing in the node's value.
//array is the edge;
Graph.prototype.addNode = function(node) {
  this.Node[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.contains(Object.keys(this.Node),node +"");
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //has edges to other nodes
  var refEdge = this.Node[node];

  //loop through array and apply removeEdge
  for (var i = 0; i < refEdge.length; i++) {
    this.removeEdge(node,refEdge[i]);
  }

  delete this.Node[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.some(this.Node[fromNode], function(element) {
    return element === toNode;
  });
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.Node[fromNode].push(toNode);
  this.Node[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var point1 = this.Node[fromNode].indexOf(toNode);
  this.Node[fromNode].splice(point1,1);
  var point2 = this.Node[toNode].indexOf(fromNode);
  this.Node[toNode].splice(point2,1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.Node) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


