class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0
    }

    enqueue(val){
    var newNode = new Node(val);
        if(this.length===0){
            this.first= newNode;
            this.last = this.first;
        }
    else{
        this.last.next = newNode;
        this.last = newNode;
    }
        this.length++;
        this.length;
    }

    dequeue(){
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