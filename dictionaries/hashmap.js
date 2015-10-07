function LinkedList() {

	var Node = function(element) {
		this.element = element;
		this.next = null;
	};

	var length = 0;
	var head = null;

	this.append = function(element) {
		var node = new Node(element),
			current;

		if (head === null) {
			head = node;

		} else {

			current = head;

			// loop the list until last item is found
			while(current.next) {
				current = current.next;
			}

			// get the last item and assign next to the node to make the link
			current.next = node;
		}

		length++;
	};

	this.insert = function(position, element) {

		if (position >= 0 && position <= length) {
			var node = new Node(element),
				current = head,
				previous,
				index = 0;

			// first handle the placement of the element at the head
			if (position === 0) {
				node.next = current;
				head = node;
			} else {
				// find the before and current position
				while (index++ < position) {
					previous = current;
					current = current.next;
				}

				// assign the inserted node next to current and previous node next to inserted node
				node.next = current;
				previous.next = node;
			}

			length++;

			return true;
		}

	};

	this.removeAt = function(position) {
		if (position > -1 && position < length) {
			var current = head,
				previous,
				index = 0;

			if (position === 0) {
				head = current.next;
			} else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}

				// link previous with current's next: skip
			}
		} else {
			return null;
		}
	};


	this.indexOf = function(element) {
		var current = head,
			index = 0;

		while (current) {
			if (element === current.element) {
				return index;
			}
			index++;
			current = current.next;
		}

		return -1;
	};

	this.remove = function(element) {
		var index = this.indexOf(element);
		return this.removeAt(index);
	};

	this.toString = function(){
		var current = head,
			string = '';
		// we will use the current variable
		while (current){
			if (current.next != null) {
				string += current.element + '->'
			} else {
				string += current.element;
			}
			current = current.next;
		}

		return string;
	};

	this.size = function(){
		return length;
	};

	this.isEmpty = function(){
		return length === 0;
	};

	this.getHead = function(){
		return head;
	};

};

function HashTable() {
	var table = [];

	var loseloseHashCode = function(key) {
		var hash = 0;
		for (var i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % 37
	};

	var ValuePair = function(key, value) {
		this.key = key;
		this.value = value;

		this.toString = function(){
			return '[' + this.key + ' - ' + this.value + ']';
		}
	};

	this.put = function(key, value) {
		var position = loseloseHashCode(key);
		if (table[position] == undefined) {
			tabel[position] = new LinkedList();
		}
		table[position].append(new ValuePair(key, value));
	};

	this.get = function(key) {
		var position = loseloseHashCode(key);
		if (table[position] !== undefined) {
			// iterate linked list to find the key/value
			var current = table[position].getHead();
			while (current.next) {
				if (current.element.key === key) {
					return current.element.value;
				}

				current = current.next;
			}

			if (current.element.key === key) {
				return current.element.value;
			}
		}

		return undefined;

	};

	this.remove = function(key) {
		table[loseloseHashCode(key)] = undefined;
	};
}

var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash.get('Gandalf'));