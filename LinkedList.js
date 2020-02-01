function LinkedList() {

    // used to add to LL    
    let Node = function(value){

        this.value = value; // value is item stored in LL node
        this.next = null; // reference( pointer or link) to next Node obj
    };                    // if there is not anther node, we set pointer to null

    let length = 0;
    let head = null;
    console.log("head is: ", head);
    console.log("length is: length", length);

    // appends to end of linked list
    this.append = function(value){

        // create new Node obj to append to a new head OR existing head    
        let node = new Node(value);
        let current = null;

        // head is first node(if exists)

        // test if there is a head already defined
        if (head === null){ 
            head = node;    // make first node on new LL
            // head  node now defined for appending, etc.
        } else {
            // head must already exist
            console.log("head is now : ", head);
            // start current at head node
            current = head;
            console.log('add to existing, current is :', current);

            //loop the list until find last item  e.g. loop while current.next is not null
            while(current.next){
                current = current.next;
            }

            //get last item and assign next to added item to make the link
            current.next = node;
        }

        length++; //update size of list
    };

    this.insert = function(position, value){

        //check for out-of-bounds values
        if (position >= 0 && position <= length){

            let node = new Node(value),
                current = head,
                previous,
                index = 0;

            if (position === 0){ //add on first position

                node.next = current;
                head = node;

            } else {
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }

            length++; //update size of list

            return true;

        } else {
            return false;
        }
    };

    this.removeAt = function(position){

        //check for out-of-bounds values
        if (position > -1 && position < length){

            let current = head,
                previous,
                index = 0;

            //removing first item
            if (position === 0){
                head = current.next;
            } else {

                while (index++ < position){

                    previous = current;
                    current = current.next;
                }

                //join/link previous with current's next 
                previous.next = current.next;
            }

            length--;

            return current.value;

        } else {
            return null;
        }
    };

    this.remove = function(value){

        let index = this.indexOf(value);
        return this.removeAt(index);
    };

    this.indexOf = function(value){

        let current = head,
            index = 0;

        while (current) {
            if (value === current.value) {
                return index;
            }
            index++;
            current = current.next;
        }

        return -1;
    };

    this.isEmpty = function() {
        return length === 0;
    };

    this.size = function() {
        return length;
    };

    this.getHead = function(){
        return head;
    };

    this.toString = function(){

        let current = head,
            string = '';

        while (current) {
            string += current.value + (current.next ? '  , ' : '');
            // string += "value: " + current.value +
            //           " next: " + JSON.stringify( current.next ) +
            // (current.next ? '   , ' : '');
            current = current.next;
        }
        return string;

    };

    // we end up looping through all values from head until current.next = null
    this.print = function(){
        console.log(this.toString());
    };
}

// added this
let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print();
list.remove(20);
list.print();
list.insert(1,1000);
list.print();
list.insert(0, -99);
list.print();
console.log(list.getHead());