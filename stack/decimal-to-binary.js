var stackFile = require('./stack.js');

function divideBy2(decNumber){

	var remStack = new stackFile.Stack(),
		rem,
		binaryString = '';

	while (decNumber > 0) { // {1}
		// while the division result is not zero, we 
		rem = Math.floor(decNumber % 2); // {2}
		remStack.push(rem); // {3}
		decNumber = Math.floor(decNumber / 2) // {4}
	}

	while (!remStack.isEmpty()) { // {5}
		binaryString += remStack.pop().toString();
	}

	return binaryString;

};

console.log(divideBy2(10));
console.log(divideBy2(233));