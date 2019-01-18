class Node{
    constructor(){
        // a Node starts with a given value
        // a Node also has a .next property initialized as null
    }
}

class LinkedList{
    constructor(){
        // a Linked List starts with a "head" property intialized as null
    }
    appendNode(val){
        // creates a new node with the given value and adds it to back of the list
    }
    prependNode(val){
        // creates a new node with the given value and adds it to the front of the list
    }
    pop(){
        // removes the last node from the list and returns it
    }
    removeFromFront(){
        // remove the head node from the list and return it
        // the next node in the list is the new head node
    }
    search(val){
        // searches the list for a node with the given value
        // if it is found, return the node
        // if not, return false
    }
}

module.exports = {
    Node,
    LinkedList
}