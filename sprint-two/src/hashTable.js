var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  
    if (this._storage.get(index) === undefined || this._storage.get(index)[0][0] === k) {
      bucket.push([k,v]);
      this._storage.set(index, bucket);

    } else {
      this._storage.get(index).push([k,v]);
      this._storage.set(index,this._storage.get(index));
    } 
};
  
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(index);
  if (this._storage.get(index)[0] === undefined) {
    return undefined;
  } 
  
  for (var i = 0; i < array.length; i++) {
    if (array[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var deleteKey = this._storage.get(index);
  delete deleteKey[0];
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



/*
 * Complexity: What is the time complexity of the above functions?
 */


