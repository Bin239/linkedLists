const expect = require('chai').expect;
const { Node, LinkedList } = require('../LinkedList');

describe('Node', ()=>{
    it('should start with a given data property', ()=>{
        let node = new Node(5);
        expect(node.data).to.equal(5);
    });
    it('should initialize with a null next', ()=>{
        let node = new Node(5);
        expect(node.next).to.equal(null);
        expect(node.next).to.not.be.undefined;
    });
})

describe('Linked List', ()=>{
    it('should initialize with a null head', ()=>{
        let list = new LinkedList();
        expect(list.head).to.equal(null);
        expect(list.head).to.not.be.undefined;
    });
    it('should append nodes to the back', ()=>{
        let list = new LinkedList();
        list.appendNode(1);
        expect(list.head.data).to.equal(1);
        list.appendNode(2);
        expect(list.head.next.data).to.equal(2);
        expect(list.head.data).to.equal(1);
        expect(list.head.next.next).to.equal(null);
    });
    it('should prepend nodes to the front', ()=>{
        let list = new LinkedList();
        list.appendNode(2);
        expect(list.head.data).to.equal(2);
        list.prependNode(1);
        expect(list.head.data).to.equal(1);
        expect(list.head.next.data).to.equal(2);
    });
    it('should pop nodes from the back', ()=>{
        let list = new LinkedList();
        list.appendNode(1);
        list.appendNode(2);
        let removedNode = list.pop();
        expect(removedNode.data).to.equal(2);
        let secondRemovedNode = list.pop();
        expect(secondRemovedNode.data).to.equal(1);
        expect(list.head).to.equal(null);
    });
})