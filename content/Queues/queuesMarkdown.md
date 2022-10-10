# **QUEUES**

## **S.1: Queues**

Queues are a basic data structure that hold items, such as objects, to be processed later. By definition, queues are a linear data structure that are open at both ends—objects can be added at one end, and removed at another. 

Queues follow the FIFO-method (First-In and First-out) such that the first object added to the queue must be the first object removed from the queue. We can create a queue as an ordered list, where all insertions are made at one end, and all removals are made at the other end. 

To conceptualize queues, think about instances where FIFO is also followed. At a restaurant waiting for seating, purchasing movie tickets, waiting in the lunch line—all these examples have one thing in common—the first person to enter the queue is the first person to exit the queue. 

When working with queues, keep in mind that a queue should allow access to both ends of the queue and should be able to handle multiple data types as needed.
>**Additional Information: https://www.loom.com/share/141354ecbb2d40269cb24759e91a4767

---

## **S.2: General Implementation**

Queues can be implemented in the form of an array with a pointer to both the front and back elements of the array. Multiple languages have queues as a defined data structure; in Java for example, the Queue class can be imported from Java.util and extends the Collections class. Additionally, queues can be implemented using a LinkedList which is generally more efficient than an array implementation. This is because an array has a fixed size whereas a queue has fluid size, and using something that is not fixed, like an array list, will be much more inefficient for removal of elements. In fact, it can be seen that in Java, the LinkedList class implements the queue class. Therefore, a linked list is essentially an extension of the queue class.  

--- 
## **S.3: Important Information**

### **Significant Characteristics**
- LinkedList & PriorityQueue are two of the classes that incorporate queues (another option is ArrayBlockingQueue)
- The two kinds of Queues are: 

  1. Unbounded Queues: Queues that are part of the java.util package
    
  1. Bounded Queues: Queues that are part of the java.util.the package

### **Key Terms**
1.  **Enqueue**
    >Adding a term to the queue

1.  **Dequeue**
    >Adding a term to the end of the queue—dequeue supports both insertion and deletion from both ends

1.  **Front**
    >This method returns the front of the queue.

1.  **Display**
    >This method looks through the elements of the queue, and displays the queue.

1.  **Blocking Queues**
    >These kinds of queues are thread-safe (like dequeue). They can be used to implement producer-consumer cases—this cannot include any null elements (will cause a NullPointerException).

### **Queue Methods**
| Method      | Example |       Description |
| ----------- | ----------- | ------------- |
| add      | sampleQueue.add(“string”) | Adds element “string” into the queue @ the tail of the queue, and doesn’t violate size restrictions. |
| remove | sampleQueue.remove() | Removes the head of the queue and returns it. If the queue is empty, you will receive a NoSuchElementException error. |
| peek | SampleQueue.peek() | Returns the head of the queue, without removing it. |
| element | SampleQueue.element() | This does the same thing as peek(); when the queue is empty, you will receive the NoSuchElementException error. |
| poll | SampleQueue.poll() | Removes the head of the queue and returns it. If the queue is empty, you will receive a null error. |
| offer | SampleQueue,offer(“string”) | Inserts new element “string” into queue, does not violate size (capacity) restrictions. |
| size | Queue.size() | Returns size of queue—will measure # of elements. |

---
## **Additional Resources**

### **Array**
> https://www.youtube.com/watch?v=okr-XE8yTO8

>https://www.youtube.com/watch?v=bW2URZB61sg

> https://www.youtube.com/watch?v=T0qUiI_L7S8

### **Linked List**
>https://www.youtube.com/watch?v=A5_XdiK4J8A

>https://www.youtube.com/watch?v=Bf-P7TGD6QU

> https://www.youtube.com/watch?v=jPwBQgwyVKo

> https://www.youtube.com/watch?v=Q71ojBd62EY

---

## **Exercises**

### **Basic Questions**
1. What does FIFO stand for?
2. Do queues handle multiple data types?
3. What is an enqueue?
4. What is a dequeue?

### **Intermediate Questions / Problems**
1. Write a class with a working queue in Java, using the queue collection method.

### **Challenge Questions**
1. Write a Queue class in Java using the Array Implementation method. 
2. Write a Queue class in Java using the LinkedList Implementation method. 
3. Write a Queue class in Python that maintains constant time operations using a list.

---

## **Sources**

>**Introduction to to algorithms, 3rd edition:** https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture9.pdf