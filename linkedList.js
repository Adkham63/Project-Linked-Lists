const LinkedListFactory = () => {
    let head = null; // Initialize head to null
    let length = 0;

    // Node factory function
    const nodeFactory = (value) => {
        return {
            value: value !== undefined ? value : null,
            next: null
        };
    };

    // Method to append a node with the given value to the end of the linked list
    const append = (value) => {
        let node = nodeFactory(value);

        if (head === null) {
            head = node; // If the list is empty, set the new node as the head
        } else {
            let current = head;
            while (current.next !== null) {
                current = current.next; // Traverse to the end of the list
            }
            current.next = node; // Set the new node as the next node of the last node
        }
        length++;
    };

    // Method to prepend a node with the given value to the beginning of the linked list
    const prepend = (value) => {
        let node = nodeFactory(value);

        if (head === null) {
            head = node; // If the list is empty, set the new node as the head
        } else {
            node.next = head;
            head = node; // Set the new node as the head
        }
        length++;
    };

    // Method to get the size (length) of the linked list
    const size = () => {
        return length;
    };

    // Method to get the head node of the linked list
    const headNode = () => {
        return head;
    };

    // Method to get the tail node of the linked list
    const tail = () => {
        if (head === null) {
            console.log("There is no tail");
        } else {
            let current = head;
            while (current.next !== null) {
                current = current.next;
            }
            return current;
        }
    };

    // Method to get the node at a specific index
    const at = (index) => {
        if (head === null) {
            console.log("There is no Linked List");
        } else {
            let current = head;
            for (let i = 0; i < index; i++) {
                if (current.next === null) {
                    return "An item at that index doesn't exist";
                } else {
                    current = current.next;
                }
            }
            return current;
        }
    };

    // Method to remove the last node from the linked list
    const pop = () => {
        if (head === null) {
            console.log("There is no Linked List");
        } else {
            let current = head;
            while (current.next.next !== null) {
                current = current.next;
            }
            current.next = null;
            length--;
        }
    };

    // Method to check if the linked list contains a node with the given value
    const contains = (value) => {
        if (head === null) {
            console.log("There is no Linked List");
        } else {
            let current = head;
            while (current.next !== null) {
                if (current.value === value) {
                    return true;
                }
                current = current.next;
            }
            return current.value === value; // Check the last node
        }
    };

    // Method to find the index of the first occurrence of a node with the given value
    const find = (value) => {
        if (head === null) {
            console.log("There is no Linked List");
        } else {
            let current = head;
            let index = 0;
            while (current.next !== null) {
                if (current.value === value) {
                    return index;
                }
                index++;
                current = current.next;
            }
            return current.value === value ? index : "This value can't be found";
        }
    };

    // Method to convert the linked list to a string representation
    const toString = () => {
        if (head === null) {
            console.log("There is no Linked List");
        } else {
            let current = head;
            let str = '';
            while (current.next !== null) {
                str += `(${current.value}) -> `;
                current = current.next;
            }
            str += `(${current.value}) -> null`;
            return str;
        }
    };

    // Return methods as an object
    return {
        append,
        prepend,
        size,
        headNode,
        tail,
        at,
        pop,
        contains,
        find,
        toString
    };
};

// Create a linked list using the factory function
const linkedList = LinkedListFactory();

// Example operations
linkedList.append(5);
linkedList.append(10);
linkedList.append(20);
linkedList.append(300);

console.log(linkedList.contains(300)); // Check if the list contains 300
console.log(linkedList.toString()); // Display the linked list
