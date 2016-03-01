function isValid(code) {

	var openersToClosersDictionary = {'(':')', '{':'}', '[':']'}

	var openers = Object.keys(openersToClosersDictionary);
	var closers = Object.keys(openersToClosersDictionary).map(function(key){
		return openersToClosersDictionary[key];
	});

	var openersStack = [];

	for (var i = 0; i < code.length; i++) {

		var char = code[i];

		if (openers.indexOf(char) >= 0) {

			openersStack.push(char);
 
		} else if (closers.indexOf(char) >= 0){
			
			if (openersStack.length === 0) {

				return false;

			} else {
				
				var lastUnclosedOpener = openersStack.pop();
				
				if (openersToClosersDictionary[lastUnclosedOpener] != char) {

					return false;

				}
			}
		}
	}
	return openersStack.length === 0;
}

console.log(isValid('[]{}[[]]'));
console.log(isValid('function(array){if (array.length === 0) {(}}'));