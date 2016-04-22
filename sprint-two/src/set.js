var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);

};

setPrototype.contains = function(item) {
  return _.some (this._storage, function(value) {
    return value === item;
  });
};

setPrototype.remove = function(item) {
  this._storage = _.reject (this._storage, function(value) {
    return value === item;
  });
};

var set = Set();
/*
 * Complexity: What is the time complexity of the above functions?
 */
