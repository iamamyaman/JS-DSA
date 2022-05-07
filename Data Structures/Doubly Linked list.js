class Node{
    constructor(val){
        this.value= val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return null;
        var removed = this.tail;
        if(this.length===1){
            this.head=null;
            this.tail = null;
        }
        else{
            var prev = this.tail.prev;
            prev.next = null;
            this.tail = prev;
        }
        this.length--;
        return removed;
       }

    shift(){
        if(!this.head) return undefined;
        var oldHead = this.head;
        if(this.length===1){
            this.head=null;
          this.tail= null;
        }
        else{
           this.head = oldHead.next;
           this.head.prev = null;
        }
        this.length--;
        return this;
    }

    unshift(val){
        var newNode = new Node(val);
        var oldHead = this.head;
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            oldHead.prev = newNode;
            newNode.next = oldHead;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){ 
        if(index<0 || index >= this.length) return null;
        if(index <= this.length/2){
            var current = this.head;
            for(let i=0;i<index;i++){
                current = current.next;
            }
            return current;
        }
        else{
            index = this.length-index-1;
            var current = this.tail;
             for(let i=0;i<index;i++){
                current = current.prev;
            }
            return current;
        }
    }

}

var list = new DoublyLinkedList();




