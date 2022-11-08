---
title: Queues
description: An article on queues, basic methods, and implementations in python and java.
layout: "@main"
---

## **Queues**

Imagine you’re at a restaurant waiting for seating, purchasing movie tickets, or waiting in the lunch line—all these examples have one thing in common—the first person to enter the queue is the first person to exit the queue.

Queues are a basic data structure that hold items, such as objects, to be processed later. By definition, queues are a linear data structure that are open at both ends — objects can be added at one end, and removed at another.

Queues follow the FIFO method (First In, First Out) such that the first object added to the queue must be the first object removed from the queue. We can create a queue as an ordered list, where all insertions are made at one end, and all removals are made at the other end.

When working with queues, keep in mind that a queue should allow access to both ends of the queue and should be able to handle multiple data types as needed.

> **Additional Information —**

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/141354ecbb2d40269cb24759e91a4767" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## General Implementation

Queues can be implemented in the form of an array with a pointer to both the front and back elements of the array. Multiple languages have queues as a defined data structure; in java for example, the Queue class can be imported from `java.util` and extends the `Collections` interface. Additionally, queues can be implemented using a `LinkedList` which is generally more efficient than an array implementation. This is because an array can grow, using table doubling—expanding the memory to prevent memory framgementation—whereas a `LinkedList` has fluid size. In regard to time complexity, either an Array or `LinkedList` implementation will have an $O(1)$ time complexity, if written well (as done below). In fact, it can be seen that in java, the `LinkedList` class implements the queue class. Therefore, a `LinkedList` is essentially an extension of the queue class.

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

### Linked List

> https://www.youtube.com/watch?v=A5_XdiK4J8A

> https://www.youtube.com/watch?v=Bf-P7TGD6QU

> https://www.youtube.com/watch?v=jPwBQgwyVKo

> https://www.youtube.com/watch?v=Q71ojBd62EY

## Exercises

### Basic

1. What does FIFO stand for?
2. Do queues handle multiple data types?
3. What is an enqueue?
4. What is a dequeue?

### Intermediate

1. Write a class with a working queue in java, using the queue collection method.

### Challenge

1. Write a Queue class in java using the Array Implementation method.
2. Write a Queue class in java using the LinkedList Implementation method.
3. Write a Queue class in python that maintains constant time operations using a list.

## Sources

> **Introduction to Algorithms, 3rd edition:** https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture9.pdf
