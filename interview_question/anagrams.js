function anagram(word1, word2) {
	var orderedWordOne = word1.split("").sort().join("");
	var orderedWordTwo = word2.split("").sort().join("");

	if (orderedWordTwo === orderedWordOne) {
		return 1;
	} else {
		return 0;
	}
};

function manyAnagrams(firstWords, secondWords) {
	var results = [];
	for (var i=0; i < firstWords.length; i++) {
		console.log(anagram(firstWords[i], secondWords[i]));
	}
};

var firstWords = ["cinema", 'host', 'aba', 'train'],
	secondWords = ['iceman', 'shot', 'bab', 'rain'];

manyAnagrams(firstWords, secondWords);