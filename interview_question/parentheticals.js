function findTheClosure(string, position) {
	var openerStack = [],
		solveLength;

	for (var i = 0; i < string.length; i++) {
		
		if (string[i] === '(') {
			openerStack.push('(');
		}

		if (string[i] === ')') {
			openerStack.pop();

		}

		if (i === position) {
			solveLength = openerStack.length -1;
		}

		if (solveLength === openerStack.length) {
			return i;
		}
	}
}


console.log(findTheClosure('hi((()))', 2) === 7)
console.log(findTheClosure('()', 0) === 1)
console.log(findTheClosure('((()))', 1) === 4);

// Create a stack to hold open parenthetsises
// loop through the string
// if we see a open parenthetsis place the parenthetsis on the stack
// if we see a closed parenthetsis pop of the stack
// when we see the position of the opener save the length of the stack -1 (solveLength)
// when the stack length is equal to the solveLength return the position

