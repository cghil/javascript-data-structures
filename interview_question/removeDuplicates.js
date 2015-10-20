// How would you remove duplicate members from an array?

// Puesode code
// 1. Go through each element of the array
// 2. Collect unique elements
// 3. Once an unique element is collections, tag that element as no longer unique
// 4. If element is not unique do not add element into collection

function removeDuplicate(arr){
	var exists = {},
		result = [],
		element;

	for (var i = 0; i < arr.length; i++) {
		element = arr[i];
		if (!exists[element]) {
			result.push(element);
			exists[element] = true;
		}
	}
	return result;
}

var practiceArray = [1,2,2,3,3,99,99,7];

console.log(removeDuplicate(practiceArray));