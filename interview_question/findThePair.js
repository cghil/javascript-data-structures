var doSearch = function(array, targetValue) {
        var min = 0;
        var max = array.length - 1;
        var guess;

        while (min <= max) {
            guess = Math.floor((max + min) / 2);

            if (array[guess] === targetValue) {
                return guess;
            } else if (array[guess] < targetValue) {
                min = guess + 1;
            } else {
                max = guess - 1;
            }

        }

        return -1;
    }
    // returns the index of the targetValue

var onlyUnique = function(value, index, self) {
        return self.indexOf(value) === index;
    }
    // will be passed as the callback in the filter method

var findThePairs = function(array, sum) {
    var possibleValues = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < sum) {
            possibleValues.push(array[i]);
        } else {
            break;
        }
    };

    var nonSortedPairs = [];

    possibleValues.forEach(function(value) {

        var onlyPossiblePartner = sum - value;
        var result = doSearch(possibleValues, onlyPossiblePartner);
        if (result > -1) {
            var pair = [value, onlyPossiblePartner];
            nonSortedPairs.push(pair);
        }

    });

    var sortedPairs = [];

    nonSortedPairs.forEach(function(pair) {
        sortedPairs.push(pair.sort());
    });

    sortedPairs.forEach(function(pair, index) {
        var stringArray = JSON.stringify(pair);
        sortedPairs[index] = stringArray;
    });

    var uniquePairs = sortedPairs.filter(onlyUnique);

    uniquePairs.forEach(function(pair, index) {
        uniquePairs[index] = JSON.parse(pair);
    });

    return uniquePairs

}

// assumes that inputs are an array that is sorted and a sum
console.log(findThePairs([1, 2, 4, 5, 8, 10], 6));
// expected value should be [[1, 5] , [2, 4]]
console.log(findThePairs([1, 2, 5, 8], 1));
// expected value should be []