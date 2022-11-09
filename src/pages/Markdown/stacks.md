---
title: Stacks
description: An article on stacks, basic methods, and implementations with Arrays and Linked Lists.
layout: "@main"
---

## **S.1 Stacks**

Imagine you work at a busy, short-staffed restaurant. As you clean plates, you stack them up, and as food becomes available you retrieve the plates at the top and serve them at tables. You notice that the plates you just cleaned are the first to go out, since they were at the top of the stack. Meanwhile, the plate you first cleaned and started the stack with, was the last to go out. This, in effect, is a stack. 

![Stack of Dirty Dishes](https://www.alamy.com/stock-photo-stack-of-cleaned-dishes-in-a-restaurant-room-74083086.html)

> A "stack" of dirty dishes, in which you can only put and take plates from the top of the pile, without making everything else fall. 

A stack is a data structure which follows the Last-In-First-Out (LIFO) order of operations: the last plate to go in was the first to go out. Conversely, the first element to go in is the last to go out.

![Last In - First Out](https://i.ibb.co/3MqVq1b/Stacks.png)

> Figure S.1.1

Stacks are very efficient for cases where few elements need to be retrieved, especially if a specific order matters. In fact, stacks are used for many common functions: redo and undo features, forward and backward features in websites, string reversal, etc.

The basic operations to manipulate stacks are:

- push(x): operation that takes an element x as an argument and inserts it onto the top of the stack.
- pop(): operation that returns and removes the top element from the stack.
- peek(): operation that returns the top element of the stack.
- isEmpty(): boolean that returns true if the stack is empty and false otherwise
- size(): returns the size of stack.

Additionally, some programming languages like Java already have a Stack implementation with [API documentation for viewing](https://docs.oracle.com/javase/10/docs/api/java/util/Stack.html).

Stacks are used in computer programs to store memory and execute/manage recursive calls. 

When coding with stacks, keep in mind that trying to access an empty stack will return a Stack Underflow exception. Conversely, attempting to add an element to a full stack will return a Stack Overflow exception. The Stack Overflow exception may be familiar to you because of infinite loops. The computer stores its memory in a stack, and when the stack has too many elements (resulting from an infinite loop), the stack overflows.

---

## **S.2 Implementation**

The two main ways to implement stacks are through Arrays or Linked Lists.

**Array Implementation**
```java
// Stack implementation with Arrays
// We will use a stack of integers for this example

class Stack {
   static final int MAX = 10; // Maximum size of stack
   int top; // index of topmost element of the stack
   int stack[] = new int[MAX]; // creation of stack (as an array)

   boolean isEmpty(){ // returns true if stack is empty (i.e., top, the index, is < 0), false if stack contains elements
       return (top < 0);
   }

   Stack(){ // creation of empty stack. Can be referred to as .this
       top = -1;
   }

   boolean push(int x){ // inserts element x into the top of the stack
       if (top >= (MAX - 1)) {
           System.out.println("Stack Overflow"); // to not surpass stack maximum size
           return false;
       }
       else {
           top++; // index changes
           stack[top] = x;
           System.out.println(x + " pushed into stack");
           return true;
       }
   }

   int pop(){ // returns and removes topmost element of stack
       if (top < 0) {
           System.out.println("Stack Underflow"); // in case stack is empty
           return 0;
       }
       else {
           int x = stack[top];
           top--; // index shrinks
           return x;
       }
   }

   int peek(){ // reveals topmost element of stack
       if (top < 0) {
           System.out.println("Stack Underflow");
           return 0;
       }
       else {
           int x = stack[top];
           return x; // does not remove top because this is just a reveal
       }
   }

   public String toString(){ // returns stack in the form of a legible string
       String s = String.valueOf(this.peek());
       for(int i = top - 1; i>-1; i--){
           s += ", " + stack[i];
       }
       return s;
   }
}

class Main { // code testing
   public static void main(String args[])
   {
       Stack s = new Stack();
       s.push(5);
       s.push(8);
       s.push(27);
       System.out.println("Popped " + s.pop() + " from stack");
       System.out.println("New top element is " + s.peek());
       System.out.print("Stack elements are: ");
       System.out.println(s);
   }
}
```

**Linked List Implementation ([runner file](https://drive.google.com/file/d/1jiCVqwWtx8ySHkioGJdgvFqNT-89FLzj/view?usp=sharing))**

```java
public class StackLinkedList  { //Each part of a Linked List is a node which carries two pieces of information: the data it is supposed to hold and a reference to the next node.
   static class StackNode
   {
       int data; //The Linked List object carries a reference to the next object. All we need is the first object and then we can traverse the entire stack.
       StackNode next = null;

       StackNode(int data)
       {
           this.data = data;
       }
   }

   //In the Stack Linked List class, we will 'carry' the root of the stack which is a Stack Node element. This root will hold references to the next node which will hold references to the next and so on.
   private StackNode root;

   //Constructor creates the first root.
   public StackLinkedList(int d)
   {
       root = new StackNode(d);
   }

   //This allows us to determine if the stack is empty or if there are elements present.
   public boolean isEmpty() {
       if (root == null)
           return true;
       else
           return false;
   }

   //The push method adds data to the stack.
   public void push(int data) {
       StackNode newNode = new StackNode(data);

       if(root == null)
           root = newNode;
       else
       {
           StackNode temp = root;
           root = newNode;
           newNode.next = temp;
       }
       System.out.println(data + " pushed to stack");
   }

   //The pop method removes the stack element from the top and sets the next stack element as the one on the top.
   public int pop() {
       int popped = 0;
       if(root == null)
           System.out.println("Stack is empty.");
       else
       {
           popped = root.data;
           root = root.next;
       }
       return popped;
   }

   //Returns the item at the top of the stack without doing anything to it.
   public int peek() {
       if(root == null)
       {
           System.out.println("Stack is empty");
           return Integer.MIN_VALUE;
       }
       else
       {
           return root.data;
       }
   }

   public String toString() {
       String toRet = "";
       StackNode temp = root;
       while(temp != null)
       {
           System.out.print(temp.data + "\t");
           temp = temp.next;
       }
       return toRet;
   }
}
```

**Video**
<iframe width="560" height="315" src="https://www.youtube.com/embed/pXKwjnyAL2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## **S.3 Exercises**

>S.3.1 - Reverse the string “coding is fun!” using a stack (remember: you’ll have to implement the stack with strings!)
{/* 
**Answer:** floor(log2(n)) */}

>S.3.2 - Sort an unordered stack using a recursive sort method.

---

## **S.4 Sources**
- https://www.geeksforgeeks.org/introduction-to-stack-data-structure-and-algorithm-tutorials/
