function reverse(s) {
	var output = "";
	var max = s.length -1
	while (max >= 0 ){
		output = output + s[max];
		max--
	}
	return output;
}

console.log(reverseTwo('word'));


function reverseTwo(s){
	string = s.split('');
	output = "";

	for (var i=0; i<s.length; i++){
		output += string.pop();
	}
	return output;
}