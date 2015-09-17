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

    this.union = function(otherSet) {
    	var unionSet = new Set();

    	var values = this.values();
    	for (var i = 0; i<values.length; i++) {
    		unionSet.add(values[i]);
    	}

    	values = otherSet.values();
    	for (var i=0; i<values.length; i++) {
    		unionSet.add(values[i]);
    	}

    	return unionSet;
    };

    this.intersection = function(otherSet) {
    	var intersectionSet = new Set();

    	var values = this.values();
    	for (var i = 0; i < values.length; i++) {
    		if (otherSet.has(values[i])) {
    			intersectionSet.add(values[i]);
    		}
    	}

    	return intersectionSet;
    };

    this.difference = function(otherSet) {
    	var differenceSet = new Set();

    	var values = this.values();
    	for (var i = 0; i < values.length; i++) {
    		if (!otherSet.has(values[i])) {
    			differenceSet.add(values[i]);
    		}
    	}
    };

    this.subset = function(otherSet) {

    	if (this.size() > otherSet.size()) {
    		return false;
    	} else {
    		var values = this.values();
    		for (var i = 0; i < values.length; i++) {
    			if (!otherSet.has(values[i])) {
    				return false;
    			}
    		}
    		return true;
    	}
    };
};

var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);

var setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

var unionAB = setA.union(setB);

console.log(unionAB.values());


