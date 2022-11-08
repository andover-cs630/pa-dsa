---
title: Linked List
description: linked lists
layout: "@main"
---

## **S.1: Linked List**

Linked lists are a linear data structure. Each element of a linked list stores a piece of data and a pointer which links to the next node.

![Linked list 1](https://i.ibb.co/YcL7hjc/Linked-List-1-3.png)

Unlike arrays, stacks, queues and other linear data structures, there is no overarching structure holding the elements of a linked list. Instead, accessing elements of a linked list involves traversing the structure via pointers to the next node starting from the head node.
Some operations on linked lists are more efficient than arrays. Adding and deleting elements from an array involves moving each affected element to a new location in memory, which takes O(n) runtime. Inserting and deleting elements in a linked list only requires switching the Next pointers around to accommodate an extra node, which can also be done in O(n) runtime. This can be improved to constant time if the linked list is a Doubly Linked List.

![Linked list 2](https://i.ibb.co/HCjFbJ0/Linked-List-2.png)

Linked lists are less efficient than arrays for getting elements by index. They also take up more memory than an array, since each node has to store data and a pointer to the next node.
The linked list that we have been discussing so far has been a **_singly-linked list_**, meaning it can only be traversed in one direction. Below is a python implementation of a singly-linked list.

### python

```python
# Function to initialize the linked list object
class LinkedListNode(object):
    def __init__(self, data):
        self.data = data # Assign data
        self.next = None # Initialize

# To instantiate a simple linked list:
if __name__ == "__main__":
    head = LinkedListNode(1)
    second = LinkedListNode(2)
    third = LinkedListNode(3)
    head.next = second # Link first node with second
    second.next = third
    print(head.data, head.next.data, head.next.next.data)
out: 1, 2, 3
```

### java

```java
// Function to initialize the linked list object
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
    }
}
```

In some instances, it can be helpful to have an overarching linked list class to keep the head well-defined. Though the algorithms in this article will be tailored to a node-based approach, an example of the linked list class is given below:

### python

```python
class Node:

        def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList(object):

    def __init__(self):
        self.head = None

if __name__ == '__main__':

    lst = LinkedList()

    lst.head = Node(1)
    second = Node(2)
    third = Node(3)

    llist.head.next = second  # Link first node with second

    second.next = third
    print(lst.head.data, lst.head.next.data, lst.head.next.next.data)
    out: 1, 2, 3
```

---

## **S.2 Doubly Linked Lists and Algorithms**

Unlike the singly-linked list, the doubly-linked list contains pointers to the previous node as well as the next node. Doubly-linked lists can be traversed in reverse order, which makes node deletion more efficient. However, it takes more memory to store a pointer to the previous node for every node.

![Linked list 3](https://i.ibb.co/S5V9srq/Linked-List-3.png)

### python

```python
class LinkedList(object):
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None


```

### java

```java
class Node {
   int data;
   Node next;
   Node prev;

   Node(int data) {
       this.data = data;
   }
}

```

We will be moving into the essential methods for a linked list class, starting with searching a linked list! For each algorithm in this article, we strongly recommend you try **_programming each implementation on your own_** before we show you the solution.
Given a linked list head node head and a target value target, return the node with data matching that of the target value.

### python

```python
def search(self, target):
        """
        Traverses linked list recursively and returns LinkedList object with the desired target
        if target is not found, None is returned
        """
        #base case
        if self.data == target:
            return self
        #recursive case
        if not self.next:
            return None
        return self.next.search(target)
```

### java

```java
public LinkedListNode search(String target) {
       LinkedListNode current = head;

       while (current != null) {
           if (current.getData() != null && current.getData().equals(target)) {
               return current;
           }
           current = current.getNext();
       }

       return null;
   }
}
```

If uncomfortable with recursion, here is an iterative implementation:
### python
```python
def search(self, target):
        cur = self
        #loops as long as the current node has a data value
        while cur:
            if cur.data == target:
                return cur
            #redefining current node as the next node
            cur = cur.next
        #target was never found
        return None
```

The next method we will be implementing is the linked list insertion method. Given an existing linked list node _a_ and _a_ new node _b_ to be inserted after _a_, implement the method _a_.insert(_b_) such that _a_ -> _b_. (Hint: if the pre-existing linked list looks like a -> z, don’t forget to link a -> b -> z)

### python

```python
def insert(self, head):
        """
        Given a node head, head is inserted directly after the node that insert is called upon
        ex: node1.insert(node2) resulting linked list: node1 -> node2
        """
        # Making sure there is a node after self
        if self.next:
            head.next = self.next
        # Rerouting pointers
        self.next = head
        head.prev = self
        if head.next:
            head.next.prev = head
```

### java

```java
void add_notes (int data) {
       if (head == null){
           head = new Node(data);
       }
       else{
       Node a_node = head;
       while (a_node.next!=null) {
           a_node = a_node.next;
       }
       a_node.next = new Node(data);
       }

   }

```

The next method we will be programming is the node deletion method. Given an existing linked list _head_ node head and a value _target_ to be removed from the linked list, successfully delete the first node with a data value matching _target_ from the linked list.

![Linked list 4](https://i.ibb.co/kHgp1yn/Linked-List-4.png)

### python

```python
def delete(self, LL):
        """
        Deletes a node with the value of LL from the linked list that the method is called upon
        ex: linked_list = 3 -> 5 -> 2 -> 7
        linked_list.delete(2)
        linked_list = 3 -> 5 -> 7
        no return value
        """
        pointer = self.search(LL)
        #if element is not found in list
        if pointer is None:
            return None
        #making sure element is not first
        if pointer.prev:
            #redefining where each node points in order to remove node from the linked list
            pointer.prev.next = pointer.next
            if pointer.next:
                pointer.next.prev = pointer.prev
        else:
            """
            This means that the first element is the one being deleted. In this case, we will instead delete
            the second node and set the first node's data equal to the second's. This allows the user to
            continue to call the linked list by the head node (in case they don't have access to the second node)
            """
            self.data = self.next.data
            if self.next.next:
                self.next.next.prev = self
                self.next = self.next.next
```

### java

```java
void delete (int data) {
       Node random_node=head;
       if (random_node.data==data){
           head=head.next;
       }
       else{
            while(random_node.next.data!=data&&random_node.next!=null){
                random_node=random_node.next;
            }
            if(random_node.next!=null){
                random_node.next=random_node.next.next;
            }
       }
}

```

Finally, it would be nice to have a way to check whether we have made the correct changes to our linked list after each operation. Create a way to print out the contents of a linked list given a head node _head_.

### python

```python
def print_list(self):
cur = self
while cur:
print(cur.data)
cur = cur.next
```

### java

```java
void int print(Node head) {
     if (head==null) {
           return length;
       }
       else{
           Node my_node=head;
           while (my_node.next!=null){
               System.out.println(my_node.data);
               my_node=my_node.next;
           }
       }
   }

```

---

## **Exercises**

Practice problems:
By now, you should be able to create your own Linked List. Code your own linked list, along with the various methods we went over: insert, delete, search.
You may have noticed that the above insert method requires the user to have access to the existing node that the new node is inserted after. When working with linked lists, the user may not always have this node, especially if inserting into the middle of a linked list. Thus, how would you write an **insert_at_index** method that takes an extra parameter index which denotes the location to insert the new node? What about an **insert_at_value** method that inserts the new node after a given value is found in the linked list?
The deletion method we implemented is essentially a **delete_at_value** method. Try implementing a **delete_at_index** method instead.

What does this function do?

### python

```python
def fun1(head):
    if(head == None):
        return
    fun1(head.next)
    print(head.data, end = " ")
```

```java
static void fun1(Node head){
    if (head == null){
        return;
    }

    fun1(head.next);
    System.out.print(head.data + " ");
}

//Answer: Prints out the data from each Node in a given linked list
```

> https://practice.geeksforgeeks.org/explore?page=1&category[]=Linked%20List&sortBy=submissions

---

## **Additional Resources**

### **Linked List**

Video We Made to Help Explain Linked List:

<iframe width="560" height="315" src="https://www.youtube.com/embed/oxblaZtQeyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

More linked list problems:

>https://practice.geeksforgeeks.org/explore?page=1&category[]=Linked%20List&sortBy=submissions

---

## **Sources**

> https://www.geeksforgeeks.org/what-is-linked-list/
