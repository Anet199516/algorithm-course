class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListTheory {
    constructor(value) {
        this.head = new Node(value)
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;

        this.head = node;
    }

    append(value) {
        const node = new Node(value);

        let lastNode = this.head;

        while (lastNode.next !== null) {
            lastNode = lastNode.next;
        }

        lastNode.next = node;
    }

    insertBefore(position, value) {
        const node = new Node(value);
        let parentNode = this.head;

        for (let i = 0; i < position; i++) {
            if (parentNode.next === null) {
                break;
            }

            parentNode = parentNode.next;
        }

        node.next = parentNode.next;
        parentNode.next = node;
    }

    deleteNode(value) {
        let previousNode = null;
        let currentNode = this.head;

        if (currentNode.value === value) {
            this.head = currentNode.next;

            return;
        }

        while (currentNode !== null && currentNode.value !== value) {
            previousNode = currentNode;
            currentNode = currentNode.next;

            if (currentNode === null) {
                return;
            }

            previousNode.next = currentNode.next;
        }
    }

    deleteInPosition(position) {
        if (position === 0) {
            this.head = this.head.next;

            return;
        }

        let previousNode = this.head;
        for (let i = 0; previousNode !== null && i < position - 1; i += 1) {
            previousNode = previousNode.next;
        }

        if (previousNode === null || previousNode.next === null) {
            return;
        }

        previousNode.next = previousNode.next.next;
    }

    // O(n)
    find(value) {
        let node = this.head;

        while (node !== null) {
            if (node.value === value) {
                return node;
            }

            node = node.next;
        }

        return null;
    }

}

const list = new LinkedListTheory(2);
list.prepend(1);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.deleteNode(1);

console.log(list);