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

var linkedlist = new LinkedList();

linkedlist.append('first');
linkedlist.append('second');
linkedlist.append('string');

console.log(linkedlist.toString());
console.log('is the list emtpy? ' + linkedlist.isEmpty());
console.log(linkedlist.indexOf('first'));

