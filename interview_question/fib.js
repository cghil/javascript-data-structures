function fib(n) {
	var firstNum = 0,
		secondNum = 1,
		finalNum = 1;

	for (var i = 2; i <= n; i++) {
		finalNum = firstNum + secondNum;
		firstNum = secondNum;
		secondNum = finalNum;
	}

	return finalNum;
}

console.log(fibRecursive(7));


function fibRecursive(n) {
	if (n < 2) {
		return n
	} else {
		return fib(n-1) + fib(n-2)
	}
}