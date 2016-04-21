var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    // create newNode(value)

    var newNode = new Node (value);

    // if (tail === null) head and tail === newNode
    if (list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    //else tail.next = newNode

    //tail === newNode

        
  };

  list.removeHead = function() {

    var currentHead = list.head.value;

    list.head = list.head.next;

    return currentHead;



  };

  list.contains = function(target, node) {
    node = node || list.head;
    // check if node.value is equal to target
      // if so, return true
    if (node.value === target) {
      return true;
    }
    // check if the next property is an object
      // if so, recurse with (target, node.next)
    return node.next ? list.contains(target, node.next) : false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
