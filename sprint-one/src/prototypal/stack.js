

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  //base object contains storage object, and length variable
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.length = 0;
   //might fix later

  return newStack;
};

//make object to store methods

   
var stackMethods = {};

//make method for push, pop, size

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  if (this.length === 0) {
    return undefined;
  } else {
    this.length--;
    var popped = this.storage[this.length];
    //delete this.storage[length];
    return popped;
  }
};

stackMethods.size = function() {
  return this.length > 0 ? this.length : 0;
};







