//Stack -->> Last In Last out

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0
    }
    
    //add a node in the start
    add(val){
        var newNode = new Node(val);
        if(this.length===0){
            this.first = newNode;
            this.last = this.first;
        }
        else{
            var prevfirst = this.first;
            this.first = newNode;
            newNode.next=prevfirst;
        }
        this.length++;
        return this;
    }

    //remove the first node from the start
    remove(){
        if(this.length===0) return null;
        if(this.length===1){
            this.first = null;
            this.last = null;
        }
        else{
            var newfirst = this.first.next;
            this.first = newfirst;
            
        }
        this.length--;
        return this;
    }
}

var list = new Stack();