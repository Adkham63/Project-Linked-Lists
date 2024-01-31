// A linked list node class
class Node {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.next = null; // Pointer to the next node
    }
}

// Linked list class
class LinkedList {
    constructor() {
        this.head = null; // Reference to the first node in the list
        this.length = 0;  // Number of nodes in the list
    }

    // Method to append a new node with given data to the end of the list
    append(data) {
        const node = new Node(data); // Create a new node
        if (this.head === null) {
            this.head = node; // If the list is empty, set the new node as the head
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next; // Traverse to the end of the list
            }
            current.next = node; // Set the new node as the next node of the last node
        }
        this.length++; // Increment the length of the list
    }

    // Method to check if the list contains a node with the given value
    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.data === value) {
                return true; // If the value is found, return true
            }
            current = current.next; // Move to the next node
        }
        return false; // If the value is not found, return false
    }
}

// Create a linked list and perform operations
const list = new LinkedList();
list.append(5);
list.append(10);
list.append(20);
list.append(300);
console.log(list.contains(300)); // Check if the list contains 300
console.log(list); // Display the linked list
