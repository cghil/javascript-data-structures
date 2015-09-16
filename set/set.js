function Set() {
    var items = {};

    this.has = function(value) {
        return items.hasOwnProperty(value);
    };
    // all javascript obects have the hasOwnProperty method. This method reutrns a Boolean indicated whether the
    // object has the specified property or not

    this.add = function(value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };
    // we check whether the value already exists in the set. If not, we ad the value to the set

    this.remove = function(value) {
        if (!this.has(value)) {
            delete items[value]
            return true;
        }
        return false;
    };
    // verifies that a given value exists in the set. If it does, we remove the value from the set

    this.clear = function() {
        items = {};
    };
    // clears all object back to {}

    this.size = function() {
        return Object.keys(items).length;
    };

    this.values = function() {
        return Object.keys(items);
    };
};

var set = new Set();

set.add(1);
console.log(set.values()); //outputs ["1"]
console.log(set.has(1));   //outputs true
console.log(set.size());   //outputs 1

set.add(2);
console.log(set.values()); //outputs ["1", "2"]
console.log(set.has(2));   //true
console.log(set.size());   //2

set.remove(1);
console.log(set.values()); //outputs ["2"]

set.remove(2);
console.log(set.values()); //outputs []