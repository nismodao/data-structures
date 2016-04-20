var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var storageLength = Object.keys(storage).length;
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (storageLength === undefined) {
      storage[0] = value;
    } else {
      storage[storageLength] = value;
    }
    storageLength = Object.keys(storage).length;
  };

  someInstance.dequeue = function() {
    var res = storage[0];
    delete storage[0];
    //update storage object with new key 
    //subtract current key - 1

    //for in loop over object
    //storage[+(key)-1] = object[key]
    for (var key in storage) {
      newKey = +key - 1;
      storage[newKey] = storage[key];
      delete storage[key];
    }
    storageLength = Object.keys(storage).length;
    return res;
  };

  someInstance.size = function() {
    storageLength = Object.keys(storage).length;
    return storageLength;
  };

  return someInstance;
};
