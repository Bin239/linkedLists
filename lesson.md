# Linked Lists

Linked Lists are an alternative data structure to a typical array. Instead of storing data at an index, Linked Lists store data inside of objects called *Nodes*.

The first type of Linked List we'll discuss is a Singly Linked List. In a SLL, each Node contains a `next` property that points to the next Node in the list. The List itself contains a `head` property that references the first Node in the list. 

#### Traversing a Singly Linked List

Searching through an array typically involves using a for loop that increments an index, starting at 0 and going until the length of the array. Since Linked Lists don't have indices, we'll have to use a different strategy.  

The only specific node that a Singly Linked List has reference to is the `head` Node, so traversing a Linked List must start there. Then, we'll need to iterate through the List by using the `next` pointers. A typical method of iterating over a Linked List would contain logic like this:

```javascript
let walker = this.head;
while(walker.next){
    walker = walker.next;
}
```

First, we create a variable that references the first node in the list, the head. Then, we can use each node's `next` property to have the `walker` variable point to the next Node in the list, until we finally reach a node that doesn't have a `next` property. The only node without a `next` is the last in the list, so in this loop, `walker` will end up pointing to the final node in the list.

If we're checking for a specific property in a node, or want to traverse a specific number of nodes, we could easily include a conditional inside the loop to read each node as we go.

#### Pros and Cons of a Linked List