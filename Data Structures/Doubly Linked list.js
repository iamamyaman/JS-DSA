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
    
    //add a node in the last
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
    

    //remove a node from the lastt
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
    
    //remove a node from the beginning
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
    

    //add a node in the beginning
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
    
    //Access a NODE from the DLL
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
   
    //Change the node value in a DLL
    set(index,val){
        var foundNode = this.get(index);
        if(foundNode!=null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    
    //Insert a node inside a DLL
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }

}

var list = new DoublyLinkedList();




