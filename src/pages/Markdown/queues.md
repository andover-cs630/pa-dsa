---
title: Queues
description: An article on queues, basic methods, and implementations in python and java.
layout: "@main"
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script type="module" src="https://md-block.verou.me/md-block.js"></script>

## **S.1: Queues**

Imagine you’re at a restaurant waiting for seating, purchasing movie tickets, or waiting in the lunch line—all these examples have one thing in common—the first person to enter the queue is the first person to exit the queue.

Queues are a basic data structure that hold items, such as [objects](/Markdown/pointers-and-object-contents "Pointers and Objects Article"), to be processed later. By definition, queues are a linear data structure that are open at both ends — objects can be added at one end, and removed at another.

Queues follow the FIFO method (First In, First Out) such that the first object added to the queue must be the first object removed from the queue. We can create a queue as an ordered list, where all insertions are made at one end, and all removals are made at the other end.

When working with queues, keep in mind that a queue should allow access to both ends of the queue and should be able to handle multiple data types as needed.

> **Additional Information —**

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/141354ecbb2d40269cb24759e91a4767" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## General Implementation

Queues can be implemented in the form of an array with a [pointer](/Markdown/pointers-and-object-contents "Pointers and Objects Article") to both the front and back elements of the array. Multiple languages have queues as a defined data structure; in java for example, the Queue class can be imported from `java.util` and extends the `Collections` interface. Additionally, queues can be implemented using a [`LinkedList`](/Markdown/LinkedList "LinkedList Article") which is generally more efficient than an array implementation. This is because an array can grow, using table doubling—expanding the memory to prevent memory fragmentation—whereas a `LinkedList` has fluid size. In regard to time complexity, either an Array or `LinkedList` implementation will have an $O(1)$ time complexity, if written well (as done below). In fact, it can be seen that in java, the `LinkedList` class implements the queue class. Therefore, a `LinkedList` is essentially an extension of the queue class.

### Important Characteristics

- `LinkedList` and `PriorityQueue` are two of the classes that incorporate queues (another option is `ArrayBlockingQueue`)

- The two kinds of Queues are

  - Unbounded Queues: Queues that are part of the `java.util` package
  - Bounded Queues: Queues that are part of the `java.util.the` package

### Key Terms

1.  **Enqueue**

    > Adds a term to the queue

2.  **Dequeue**

    > Adds a term to the end of the queue — dequeue supports both insertion and deletion from both ends

3.  **Front**

    > Returns the front of the queue.

4.  **Display**

    > Looks through the elements of the queue, and displays the queue.

5.  **Blocking Queues**
    > These kinds of queues are thread-safe (like dequeue). They can be used to implement producer-consumer cases. This cannot include any null elements (will cause a `NullPointerException`).

### Queue Methods

| Method  | Example                     | Description                                                                                                                     |
| ------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| enqueue | sampleQueue.add(“string”)   | Adds element `“string”` into the queue @ the tail of the queue, and doesn’t violate size restrictions.                          |
| dequeue | sampleQueue.remove()        | Removes the head of the queue and returns it. If the queue is empty, you will receive a `NoSuchElementException` error.         |
| peek    | SampleQueue.peek()          | Returns the head of the queue, without removing it; when the queue is empty, you will receive `null`. (unlike `Element` method) |
| element | SampleQueue.element()       | This does the same thing as `peek()`; when the queue is empty, you will receive the `NoSuchElementException` error.             |
| poll    | SampleQueue.poll()          | Removes the head of the queue and returns it. If the queue is empty, you will receive a `null` error.                           |
| offer   | SampleQueue,offer(“string”) | Inserts new element `“string”` into queue, does not violate size (capacity) restrictions. Returns a `boolean`, unlike enqueue.  |
| size    | Queue.size()                | Returns size of queue; measures the number of elements.                                                                         |

## Additional Resources

### Array

> https://www.youtube.com/watch?v=okr-XE8yTO8

> https://www.youtube.com/watch?v=bW2URZB61sg

> https://www.youtube.com/watch?v=T0qUiI_L7S8

## Exercises

### Basic

> 1. What does FIFO stand for?

> 2. Do queues handle multiple data types?

> 3. What is an enqueue?

> 4. What is a dequeue?

### Intermediate

> 1.  Write a class with a working queue in java, using the queue collection method.

### Challenge

> 1.  Write a Queue class in java using the Array Implementation method.

> 2.  Write a Queue class in java using the LinkedList Implementation method.

> 3.  Write a Queue class in python that maintains constant time operations using a list.

## Sources

> **Introduction to Algorithms, 3rd edition:** https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture9.pdf
        String s = "";
        if ((front == rear || rear == -1) && queue[front] == null){
            return "Queue Empty!";
        }
        // traverse front to rear and print the elements
        for (int i = front; i < (front + maxsize); i++) {
            s += (queue[i % maxsize] + " ");
        }
        return s;
    }
}

public class Main {

    public static void main(String[] args) {
   // Testing Suite
        Queue q = new Queue(4);
        System.out.println(q);
        q.enqueue(10);
        q.enqueue(4352343.454325);
        System.out.println(q.size());
        System.out.println(q);
        q.enqueue('q');
        q.enqueue("🥳");
        System.out.println(q.size());
        System.out.println(q);
        q.dequeue();
        System.out.println(q);
        System.out.println(q.front());
        q.dequeue();
        System.out.println(q.size());
        System.out.println(q);
        System.out.println(q.front());
    }
}
```

### S.7.2 - LinkedList Implementation 
Key Ideas:
> This implementation uses the same as the above, with arrays, but uses a LinkedList instead.

```Java

public class LinkedListQueue {
    private Node front, rear;
    private int queueLength;

    // creating a LinkedList Node
    private class Node {
        int data;
        Node next;
    }

    public LinkedListQueue() {
        front = null;
        rear = null;
        queueLength = 0;
    }

    // must check if the queue is empty first, otherwise could run into NoSuchElementException error

    public boolean isEmpty() {
        if (queueLength == 0) {
            // to indicate the method doesn't work
            return false;
        }
        return true;
    }
    
    // inserting an item to the end of the current queue
    public void enqueue(int data)
    {
        // Create a LinkedList node
        Node temporaryNode = new Node();
        temporaryNode.data = data;

        // If queue is empty, then the new node is the front & rear
        if (this.rear == null) {
            this.front = this.rear = temporaryNode;
            return;
        }
        // Add the new node at the end of queue and change rear
        this.rear.next = temporaryNode;
        this.rear = temporaryNode;
    }

    // removing an item from the queue
    public void dequeue() {
        Node temporaryNode = new Node();

        // If queue is empty, return null
        if (this.front == null) {
            return;
        }

        // Store the previous front and move front to the next node ahead
        temporaryNode = this.front;
        this.front = this.front.next;

        // If front becomes null, then change rear also as null
        if (this.front == null) {
            this.rear = null;
        }
}
    public void printFrontAndRear() {
        if (front.data != rear.data) {
            System.out.println(front.data + ", " + rear.data);
        }
        else {
            System.out.println(front.data);
        }
    }
}

public class Run {
    public static void main (String[] args) {
        // create a new LinkedList
        LinkedListQueue queue = new LinkedListQueue();

        queue.enqueue(6);
        queue.enqueue(8);
        // this print statement below can be used as a way to check your enqueue method/calls from above
        queue.printFrontAndRear();
        queue.dequeue();
        // although repetitive, this should show you only '8' left in the queue
        queue.printFrontAndRear();
        // add 27 to the queue
        queue.enqueue(27);
        // this test should print 8, and 27
        queue.printFrontAndRear();
        queue.dequeue();
        // this test should prove that 8 has been removed, and only 27 is remaining in the queue
        queue.printFrontAndRear();
    }
}
```
## S.8 - Python
### S.8.1 - Array Implementation in Constant Time
Key Ideas:
> 1) Define the front and the end of the queue as integers
> 2) Use an array to hold the elements of the queue
> 3) Use the modulo operator(%) to allow the of the queue to be moved from the end of the array if required. This helps maintain O(1) time complexity for enqueue, dequeue, and other operations
```Python
# implementing queue in constant time with arrays
class Queue:

  # intitialization function
  def __init__(self, maxSize):
    self.front = self.size = 0
    self.end = maxSize -1
    self.q = [None]*maxSize
    self.maxSize = maxSize

  #check to see if queue is full  
  def isFull(self):
    return self.q.size == self.maxSize

  def getQ(self):
    return self.q
    
  # check to see if queue is empty
  def isEmpty(self):
    return self.q.size == 0

  # add object to the queue
  def enqueue(self, object):
    if self.isFull():
      print("Queue Full")
      return
    self.end = (self.end + 1) % self.maxSize
    self.q[self.end] = object
    self.size += 1

  # remove an object from the queue
  def dequeue(self):
    if(self.isEmpty()):
      print("Queue Empty")
      return
    self.front = (self.front + 1) % self.maxSize
    self.size = self.size -1

  # return the front object in the queue
  def getFront(self):
    if(self.isEmpty()):
      print("Queue Empty")
      return

    return self.q[self.front]

  # return the end object in the queue
  def getEnd(self):
    if(self.isEmpty()):
      print("Queue Empty")
      return

    return self.q[self.end]

# create the queue
queue = Queue(10)

# demonstration of enqueue function
queue.enqueue(13)
queue.enqueue("Cat")
queue.enqueue('e')
queue.enqueue(12.73)

# show function of q() function
print(queue.getQ())

# demonstrate use of dequeue
queue.dequeue()
queue.dequeue()

# again, check queue 
print(queue.getQ())

# show function of end() and front()
print(queue.getEnd())
print(queue.getFront())
```
### S.8.2 - Simpler List Implementation O(n) Time
#### Key Ideas
> 1) A list is simply a queue with more functionality. So, the idea, though a questionable one, is to restrict the functionality of a list to that of a queue (its really just a list that we add and remove from one end)
```Python
# Again, because we are working in python, we have no reason to create a queue using a list because the queue module exists, but here is a simple implementation of a queue

q = []

# the list object can hold multiple datatypes
q.append(13)
q.append(-18.22)
q.append("Giraffe")
q.append('i')

# notice the order in which the elements have been added to the list
# append adds to the end of the list so the front of our queue is at the 0th index of the list
# this is a choice we made. We could, however, append to the front of the list, and it should be noted that this choice was made purposefully. Appending to the front of the list requires O(n) time due to the shifting of all elements after it. It would, however, make deleting items from the front of the queue, the end of this list, constant time
# either way, this should highlight the limitations of implementing a queue through a list in python. Atleast one of the basic operations will require O(n) time whereas the queue module will only require constant time for all basic operations
print(q)

# because we are treating the list like a queue, we are removing from the front of the list, i.e., the front of the queue. It should be clear that this takes O(n) time because we must shift all the elements to the left by 1
q.remove(0)
q.remove(0)

print(q)

# again, this implementation of a queue in python with a list is something we advise against. Take advantage of the languages premade modules and do not feel like you have to reinvent the wheel
```
### S.8.3 - Queue.queue module 
#### Key Ideas
> 1) Using Python's premade modules to create a queue
```Python
# It is foolish to reinvent the wheel - Queues can be implemented in python using arrays, while still maintaining constant time operations, though the disadvantages of an array still remain. The array has static size and cannot be adjusted after it is initialized. So, take advantage of Python's status as a "high-level" language, and use the libraries available to you, namely, queue and dequeue

from queue import Queue

# call queue constructor with maxsize parameter
q = Queue(maxsize = 100)

# Queue size is 0 when no objects have been added
print(q.qsize())

# A queue object in python can hold multiple different datatypes
# enqueue method is called put()
q.put("Dog")
q.put(1378)
q.put(17.38)
q.put('a')

# the queue's size should now be 3
print("The size is now 3: ", q.qsize() == 3)

# check if the queue is full
print("The queue is full:", q.full())

# dequeue method is get() which removes and returns the first element in the queue
print("Item removed from the queue: ", q.get())
print("Item removed from the queue: ", q.get())
print("Item removed from the queue: ", q.get())
print("Item removed from the queue: ", q.get())


# check that queue is empty, it should be
print("The queue is empty:", q.empty())

# According to GeeksForGeeks.com, the queue class has these additional functions 
# maxsize – Number of items allowed in the queue.
# empty() – Return True if the queue is empty, False otherwise.
# full() – Return True if there are maxsize items in the queue. If the queue was initialized with maxsize=0 (the default), then full() never returns True.
# get() – Remove and return an item from the queue. If queue is empty, wait until an item is available.
# get_nowait() – Return an item if one is immediately available, else raise QueueEmpty.
# put(item) – Put an item into the queue. If the queue is full, wait until a free slot is available before adding the item.
# put_nowait(item) – Put an item into the queue without blocking. If no free slot is immediately available, raise QueueFull.
# qsize() – Return the number of items in the queue.
```

## S.9 - Intermediate Questions/Problems Practice Problems Questions (based on difficulty)
> 1) Write a class with a working queue in Java, using the queue collection method.
> 2) Create an infinitely sized queue in python using the queue.Queue module.

## S.10 - Intermediate Questions/Problems Practice Problems Questions (based on difficulty)
> 1) Write a Queue class in Java using the Array Implementation method. 
> 2) Write a Queue class in Java using the LinkedList Implementation method. 
> 3) Write a Queue class in Python that maintains constant time operations using a list.

