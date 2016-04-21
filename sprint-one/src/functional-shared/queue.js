var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

//create  base object with basic properties
  var newQueue = {};
  newQueue.storage = {};
  var storageLength = Object.keys(newQueue.storage).length;
  

  extend(newQueue, queueMethods);
  return newQueue;
};



//extend
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

//creat empty method object
var queueMethods = {};

//add methods to method object
queueMethods.enqueue = function(value) {
  if (this.storageLength === undefined) {
    this.storage[0] = value;
  } else {
    this.storage[this.storageLength] = value;
  }
  this.storageLength = Object.keys(this.storage).length;
};

queueMethods.dequeue = function() {
  var res = this.storage[0];
  delete this.storage[0];
  //update storage object with new key 
  //subtract current key - 1

  //for in loop over object
  //storage[+(key)-1] = object[key]
  for (var key in this.storage) {
    this.newKey = +key - 1;
    this.storage[this.newKey] = this.storage[key];
    delete this.storage[key];
  }
  this.storageLength = Object.keys(this.storage).length;
  return res;
};

queueMethods.size = function() {
  this.storageLength = Object.keys(this.storage).length;
  return this.storageLength;
};







