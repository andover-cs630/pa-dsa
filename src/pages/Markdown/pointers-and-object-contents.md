---
title: Pointers and Objects
description: Implementing and representing pointers and objects through the use of multi and singular arrays
layout: "@main"
---

## **S.1: Pointers and Objects**

Pointers play a significant role in the internal processing of many languages by storing the addresses of objects directly in the computer’s memory. In java, for example, when a variable type stores a reference to an object, the pointer holds the address of the object. Though in many languages like java or python, we need not worry about pointers and objects as the computer automatically follows the pointers stored in reference variables to find the object in memory. However, in lower-level programming languages that do not automate the process, such as C++, we can implement various linked data structures without pointer data types to handle tasks that normally require pointers.

We will be using this linked list for all of our following examples.

![image S.1.1](https://i.ibb.co/7v1HHMZ/temp-14.png)

> **Figure S.1.1** A visual representation of a linked list.

---

## **S.2: Representing Objects with Multiple Arrays**

For a collection of objects with the same attributes (homogeneous objects), we can use an array to represent each of the separate attributes. For example, we can represent a linked list object with three arrays: prev[x], key[x], and next [x], where x is the pointer and index to the arrays. Integers, such as -1 (which cannot represent an actual index) are stored in the head/tail.

![image S.2.1](https://i.ibb.co/Jxtd3Yz/temp-15.png)

> **Figure S.2.1** A visual representation of a linked list.

---

## **S.3: Representing Objects with a Single Array**

We can also store objects with different numbers of attributes (heterogeneous objects) in a single array. To represent an object in an array S, we let it occupy a contiguous subarray S[a…e], where a is the first index of that object and e is the last. The pointer to an object that occupies the space S[a…e] will be the index a. To access the other components of the object, one can simply add the number that represents the wanted attribute. For example, a linked list will occupy three subarrays with the prev, key, next attributes. Therefore, say the prev attribute of a linked list is stored at S[i], the next attribute will be at S[i + 2].

![image S.2.1](https://i.ibb.co/02RRpTX/table-2.png)

---

## **S.4: Allocating and Freeing Objects**

To optimize storage with single or multiple arrays, we need a system for determining which objects are currently unused. This system is called the garbage collector.

For example, when storing [linked list](/Markdown/LinkedList "Linked List Article") objects with multiple arrays, we utilize a singly linked free list. Let m represent the number of storage spaces the list contains and let n represent the space used. Therefore, m - n will represent the free space. By storing these spaces in a free list, we can easily insert new elements into the multiple arrays. List implementations like PUSH and POP in [stacks](/Markdown/stacks "Stacks Article"), may be used in the free list to allocate and free objects.

### python:

```py

def storeThreeValues(index, prev, insertPrev, key, insertKey, next, insertNext):
   if(index < len(prev) and index < len(key) and index < len(next)):
       prev[index] = insertPrev
       key[index] = insertKey
       next[index] = insertNext
   else:
       print("Index Out of Bound")

prev = [0] * 7
key = [0] * 7
next = [0] * 7

storeThreeValues(1, prev, 2, key, 9, next, 4) #the linked list element stored under index 1 of the multiple array model
storeThreeValues(2, prev, 6, key, 3, next, 1) #the linked list element stored under index 2 of the multiple array model
storeThreeValues(4, prev, 1, key, 5, next, -1) #the linked list element stored under index 4 of the multiple array model , using -1 to denote null
storeThreeValues(6, prev, -1, key, 4, next, 2) #the linked list element stored under index 6 of the multiple array model , using -1 to denote null

print(prev)
print(key)
print(next)
```

### java:

```java
public class pointersAndObjects {

   public static void storeThreeValues(int index, int [] prev, int insertPrev, int [] key, int insertKey, int [] next, int insertNext){
       if(index < prev.length && index < key.length && index < next.length){
           prev[index] = insertPrev;
           key[index] = insertKey;
           next[index] = insertNext;
       }
       else{
           System.out.println("Index Out of Bound");
       }
   }

   public static void printArray(int [] array){
       for(int i = 0; i < array.length; i++){
           System.out.print(array[i] + ",");
       }
       System.out.println(" ");
   }

   public static void main(String [] args){
       int [] prev = new int [7];
       int [] key = new int [7];
       int [] next = new int [7];

       storeThreeValues(1, prev, 2, key, 9, next, 4); //under index 1 of the multiple array model
       storeThreeValues(2, prev, 6, key, 3, next, 1); //under index 2 of the multiple array model
       storeThreeValues(4, prev, 1, key, 5, next, -1); //under index 4 of the multiple array model, using -1 to denote null
       storeThreeValues(6, prev, -1, key, 4, next, 2); //under index 6 of the multiple array model, using -1 to denote null

       printArray(prev);
       printArray(key);
       printArray(next);
   }
}
```

To continue exploring this topic, check out this video, **[here](https://drive.google.com/file/d/1w3ns29iHeTDIftXSMiX8JlBLZMJK_puI/view?usp=sharing)**

---

## **Exercises**

> 1. Select a language that automates pointers

> 2. In which language must we implement various linked data structures without pointer data types to handle tasks that normally require pointers?

> 3. Code an implementation of the multiple array model with either java or python.

> 4. What do the prev and next values stored in the array representation of the linked list refer to?

> 5. What are the benefits of a system that stores unused objects?

## **Sources:**

> **Introduction to Algorithms, 3rd edition** https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture9.pdf

> https://math.hws.edu/eck/cs124/javanotes2/c9/s2.html#:~:text=A%20POINTER%20IS%20JUST%20THE,of%20that%20object%20in%20memory

> **S.4 Supplement Video:** https://drive.google.com/file/d/1w3ns29iHeTDIftXSMiX8JlBLZMJK_puI/view?usp=sharing

> **S.4.1 Code example:** https://www.youtube.com/watch?v=rq8cL2XMM5M&ab_channel=CoreySchafer

> **S.4.2 Code example:** https://www.geeksforgeeks.org/python-initialize-empty-array-of-given-length/

> **S.4.3 Code example:** https://www.w3schools.com/python/python_conditions.asp
