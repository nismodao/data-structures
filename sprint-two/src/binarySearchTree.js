var BinarySearchTree = function (value) {
  
  var node = {
    value: value,
    left: null,
    right:null
  };

  node.insert = function (newValue) {
    
    if (node.right !== null) {
      node.right.insert(newValue);
    } else if (node.left !== null) {
      node.left.insert(newValue);
    }

    if (newValue > value) {
      if (node.right === null) {
        node.right = BinarySearchTree(newValue);
      } 
    } else if (node.left === null) {
        node.left = BinarySearchTree(newValue);
    }

    // if (node.left) 
    console.log(node);

  };

  node.contains = function (targetValue) {

    if (node.value === targetValue) {
      return true;
    }

    if (node.value !== targetValue && node.left === null && node.right === null) {
      return false;
      
    } else if (targetValue > node.value) {
      return node.right.contains(targetValue);

    } else {
      return node.left.contains(targetValue);
    }

  };


  node.depthFirstLog = function (cb) {
 //apply call back to each item in the tree
   
   //node is valid apply comeback
    if (node.value) {
      cb(node.value);
    }
    if (node.left !== null) {
      node.left.depthFirstLog(cb);
    } 
    if (node.right !== null) {
      node.right.depthFirstLog(cb);
    }
    if (node.left === null && node.right === null) {
      return;
    }
  }
  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
