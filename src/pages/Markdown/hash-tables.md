---
title: Hash Tables
description: A comprehensive overview for the hash table data structure
layout: "@main"
---

## Direct-Address Tables

By now, we have learned a number of different elementary data structures, including [pointers & objects](/Markdown/pointers-and-object-contents "pointers and objects article"), [graphs](/introduction-to-graphs/ "introduction to graphs article"), [linked lists](/Markdown/LinkedList "linked lists article"), and [queues](/Markdown/queues "queues article"). Each of these structures follows the format of a dictionary, a type of structure where data is called through a value called a key. Direct-address tables are a simplified type of this structure. In direct-address tables, the list of keys are non-negative integers that are not “too large”, and the data is stored in an array where the keys are the indices of the array. You can see this in the diagram below:

![Chart 1](https://i.ibb.co/k5Sm8s5/table1.png)

> **Figure 11.1** — How to implement a dynamic set by a direct-address table $T$. Each key in the universe $U = \{0, 1,\dots,9\}$ corresponds to an index in the table. The set $K = \{2, 3, 5, 8\}$ of actual keys determines the slots in the table that contain pointers to elements. The other slots, heavily shaded, contain `NIL`.

Taken from: https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture9.pdf

In direct-address tables, we must make sure keys are not “too large” to prevent allocating unutilized data. It is very easy to insert, search, and delete in direct-address tables, as you can see from the code below. Furthermore, each of these algorithms runs in $O(1)$ time. Here is an example of these functions in a direct address table of Strings:

### java

```java
public class directAccessTable {
	private String[] T;
	public directAccessTable(int U){
		T=new String [U];
	}
	public void directAccessTableInsert(int key, String x) {
		T[key]=x;
	}
	public void directAccessTableDelete(int key) {
		T[key]=null;
	}
	public String directAccessTableSearch(int key) {
		return T[key];
	}
}
```

### python

```python
#X is the length of your list
X=20
array= X *[None]
def insert(key, value):
   array.insert(key, value)

def delete(value):
   array.remove(value)

def search(key):
   if array[key]:
       return(array[key])
```

Though they are simple, direct-address tables are not the most efficient data structure — there is a lot of unutilized space. Also, if $U$, the universe of keys, is too large it may be impossible to create a table of size $U$ with a typical computer’s memory capacity.

---

## Hash Tables

This turns us to hash tables, a more efficient version of direct-address tables. In hash tables, instead of a piece of data being stored in index $k$ of an array, where $k$ is the key, it is stored in $h(k)$, where $h()$ is the **hash function.** The hash function computes the index of the data we are looking for, given the key. We call $h(k)$ the **hash value** of the key $k$. In a hash table, the size of the table is the size of $K$, the number of keys rather than $U$, the size of the universe of keys. This allows us to minimize the amount of data allocated.

![Hash Table Chart1](https://i.ibb.co/NWXBscJ/table2.png)

> **Figure 11.2** — Using a hash function $h$ to map keys hash-table slots. Because keys $k_2$ and $k_5$ map to the same slot, they collide.

However, as you can see from the figure above, this creates a new issue: sometimes two keys hash to the same slot. This is called a **collision**. In order to deal with this, we use a process called **chaining**, which involves placing all elements that hash to the same slot in a [linked list](/Markdown/LinkedList "Linked List Article"), and putting a pointer to the head of that list in the slot. You can see this shown in the figure below:

![Hash Table Chart2](https://i.ibb.co/nQ2fNGb/table3.png)

> **Figure 11.3:** — Collision resolution by chaining. Each hash-table slot `T[j]` contains a linked list of all the keys whose hash value is $j$. For example, $h(k_1) = h(k_4)$, and $h(k_5) = h(k_7) = h(k_2)$. The linked list can be either [singly](/Markdown/LinkedList#s1-linked-list "Singly Linked List Article") or [doubly linked](/Markdown/LinkedList#s2-doubly-linked-lists-and-algorithms "Doubly Linked List Section of Linked List Article"); we show it as doubly linked because deletion is faster that way.

Of course, this introduces new issues. Primarily, it complicates the insert, delete, and sort functions.

Here is an example of a hash table, utilizing an array to organize the overall data and using chaining in order to deal with collisions. As you can, we have a hash function that takes in a string and spits back a hash value, and then we utilize that hash value to insert into the array. Once in the array, we have a linked list to traverse down in case of any collisions.

**_Exercise S. 2. 1:_** Implement a class for a hash table that uses chaining to avoid collisions with the algorithms insert(put), delete (remove), and search (get).
Solution: (there are many ways to do this, here is one example)

```python
import random

rand = int(random.random() * 10000000000000000)

# For security purposes – each time the python env is opened, a new
# random number is used to encode the hashcode so no one can guess the hash of a key.

class Node:
   def __init__(self, key, value):
       self.key = key
       self.value = value
       self.next = None


class HashTable:
   def __init__(self, capacity=None):
       self.capacity = capacity
       self.size = 0
       self.buckets = [None] * self.capacity
       self.keys = []

   def hash(self, key):  # Hashes the given key
       hashcode = rand  # This way no one can guess hashcode!
       key = str(key)  # To equalize data types and avoid errors while hashing

       for i, char in enumerate(key):  # Iterates over each character of the key
           hashcode += (i + len(key)) ** ord(char)
           hashcode = hashcode % self.capacity  # Modulus to keep hashcode in range [0, self.capacity - 1]
       return hashcode

   def put(self, key, value):  # Create a value in the hashtable
       self.size += 1  # Increase counter to determine size of hash table
       self.keys.append(key)
       index = self.hash(key)  # Calculate hash of key to be stored as index
       node = self.buckets[index]  # Assign node associated with the hash
       if node is None:  # When bucket is empty:
           self.buckets[index] = Node(key, value)  # Creates & adds node
           return
       prev = node  # There was  a collision, so iterate to end of the linked list at given index

       while node is not None:
           prev = node
           node = node.next

       prev.next = Node(key, value)  # Adds new node at the end of list with provided key/value

   def remove(self, key):
       index = self.hash(key)  # Calculate hash of key
       node = self.buckets[index]
       prev = None

       while node is not None and node.key != key:  # Iterates to desired node
           prev = node
           node = node.next

       if node is None:  # The node is either the desired node or none
           return None  # Key not found

       else:  # Key found!
           self.size -= 1
           result = node.value  # To return value of deleted item
           node.key = None  # Deletes node key
           node.value = None  # Deletes node value

           if prev is None:
               node = None
           else:
               prev.next = prev.next.next

           return result

   def get(self, key):
       index = self.hash(key)  # Calculates hash
       node = self.buckets[index]  # Goes to the first node of the list in the bucket

       while node is not None and node.key != key:  # Iterates over the linked list at this node
           node = node.next  # Node is either the requested key/value pair or None

       if node is None:
           return None  # Node not found
       else:
           return node.value  # Node found!

   def contains(self, key):  # Returns boolean to check if value exists
       index = self.hash(key)  # Calculates hash
       node = self.buckets[index]  # Goes to the first node of the list in the bucket

       while node is not None and node.key != key:  # Iterates over the linked list at this node
           node = node.next  # Node is either the requested key/value pair or None

       if node is None:
           return False  # Node not found
       else:
           return True  # Node found!

   def __str__(self):
       hts = []
       for key in sel/f.keys:
           hts.append(str(key) + " : " + str(self.get(key)))

       return str(hts)
```

**_Exercise S. 2.1:_** Why do we use a doubly linked list for chaining? Keep in mind the three algorithms we are optimizing for.
Answer: A doubly linked list makes deletion simpler, as we know from the linked lists lesson.
**_Exercise S.2.2:_** Write in pseudocode the search algorithm for a chained hash table.  
Answer: Locate $T[h(k0]$, which is a linked list. Search the linked list for a value with the key $k$

Though insert and delete each still have time complexity $O(1)$, the search algorithm now has a more complicated time complexity. Here is an example of the search algorithm `chainSearch`, which would be called on the `LinkedList` stored in `T[h(k)]`:

### java

```java
public String chainSearch(int k) {
        chainedHashTableNode current = head;

        while (current != null) {
            if (current.getData() != null && current.getKey().equals(k)) {
                return current.getData();
            }
            current = current.getNext();
        }

        return null;
    }
```

### python

```python
#Searches a Table with given inputs
def search(name, weight):
   hash_num=hash(name)
   iterator=array[hash_num]
   #if input not in array, automatic return false
   if iterator==None:
       print("False")
       return False
   else:
       #If the weight or name isn't a match, then traverse down linked list
       while iterator.weight!=weight or iterator.name!=name:
```

We can develop a better sense of how well the search algorithm works using a metric called **load factor** $(\propto)$, which measures the average length of a chain. Load factor is defined as $\propto = \frac{n}{m}$, where $n$ is the number of elements stored in the hash table, and $m$ is the number of slots in the table `T`. The search algorithm worst case time complexity of $O(n)$, if all elements are stored in the same slot. However, this is a very unlikely outcome. We can simulate a more reasonable distribution by assuming any element is equally likely to hash into any of the $m$ slots, an assumption which is called **simple uniform hashing.**
With this assumption, we can compute the average-case run time of a search as being proportional to the number of elements the algorithm looks at before finding the element or abandoning the search because the element is not in the slot.

---

## Hash Functions

Consequently, in order to minimize the running time of the search algorithm, we want to design hash functions that come as close to simple uniform hashing as possible. This means our hash functions must try to avoid sort elements into slots independently of patterns that may exist in our data. There are two main strategies to this.

First, the division method. In this method, we hash $k$ to the remainder of $\frac{k}{m}$ where $m$ is the number of slots in the table. In simpler terms, $h(k) \equiv k \pmod{m}$. There are some advantages to this strategy: it is simple to code and easy to compute. However, there are also some limitations, as there are some values of $m$ that we want to avoid to minimize the number of keys we hash to one slot, like most powers of two, which will map keys to just their first few bits.

We can also use the multiplication method for assigning keys to slot. This method is more complex, and we define the function as such: $h(k) = m\lfloor kA \pmod{1} \rfloor$ where $A$ is a number such that $0 < A < 1$, and $m$ is the number of slots. In this method, the value of $m$ is less significant, but some values of $A$ maximise the probability of simple uniform hashing.

**_Exercise:_** Consider a hash table of size m= 100 and a corresponding hash function h(k)=kmod(m). Where would the keys 5928, 1001, and 154 be mapped?
Answer: 28, 1, and 54.

The shared downside of each of these strategies of making hash functions is that in each, a set of keys will always hash the same way. This means that for some data sets, the algorithms will always perform at the worst case scenario. We can solve this using universal hashing, a strategy in which we randomly choose a hash function from a pre-designed class of functions independently of the actual keys we are storing. Because we are selecting the hash function randomly, this strategy guarantees that we will have good average performance for any single input, and no input will always produce worst-case runtime.

---

## Open Addressing

We talked earlier about chaining to resolve collisions when two keys are mapped to the same slot. However, what if we want to prevent collisions in the first place? We do this using a strategy called **open addressing**, where collisions get resolved by placing the key in the next available slot. Let’s say that we had a collection of names (Mia, Tim, Bea, Zoe, Sue) and we use a hash function to determine their slot in the array. We make our way through the names, and each maps to a distinct slot, until Sue, which hashes to slot 4, the same slot that Mia did. What can we do? One option is to move Sue to the next available slot. In this case, slot 4 is full, but if we look one to the right, it’s open. Thus, we move Sue to slot number 5. If the same thing happened again, this time “Joe” getting mapped to slot 4, we’d need to first look to slot 5, then once we know it’s full, move Joe to slot 6 which is empty at this point. This strategy is called **Linear Probing**, and it utilizes linear search to find an open spot. If we probe through our entire list without finding an open spot, linear probing will cycle through to the beginning of the list, looking for any open spots.

![11.4 Chart1](https://i.ibb.co/ct6QH7n/table4.png)

One of the drawbacks of linear probing is that you can have a big part of your array become filled while the rest is open. Your hash function might put a lot of keys in the same area of the array, and that array becomes overfilled with values as suddenly every key has its slot already filled. A strategy to help counteract this effect is with **Plus 3 rehash** and **Quadratic Probing** which both aim to help disperse your keys across the array. Plus 3 rehash will check a slot 3 spaces away from the original upon finding that a slot is filled. This works to spread out your data entries across the array. Quadratic Probing is another strategy, which entails taking the number of failed attempts to find an open slot, squaring that value, then adding it to whatever value you are at. Thus, if this is your 2nd failed attempt at finding a slot, you’d do $2^2=4$, meaning you’d then look 4 slots ahead of the one you failed on. This quadratic probing does a great job of dispersing keys, since its exponential nature means that very soon your entries could end up much farther from where they were originally placed.

> **Helpful Video:** https://youtu.be/NHZL5439lK0

---

## Exercises

> 1. Why do we use a doubly linked list for chaining? Keep in mind the three algorithms we are optimizing for.

<details>
    - A doubly linked list makes deletion simpler, as we know from the linked lists lesson.   
</details>

> 2. Write in pseudocode the search algorithm for a chained hash table.

<details>
    - Locate `T[h(k0]`, which is a linked list
    - Search the linked list for a value with the key $k$   
</details>

> 3. Under the assumption of simple uniform hashing, what is the average run time of the search algorithm if it doesn’t find the element? Don't forget about the time to run the hash function!

<details>
<summary>Answer</summary>
    - $O(1+\propto)$. A key $k$ will have an equal chance of being in any of the $m$ slots, so the runtime is proportional to the time to traverse the list `T[h(k)]`, which will have expected length $\propto$. Thus, the time complexity is $O(\propto)$. Combined with the $O(1)$ time to compute the hash function, we get $O(1+\propto)$. 
</details>

> 2. What about the average run time if it does?

<details>
    - $O(1+\propto)$ (see book for further explanation as to why and a proof on page 259) 
    - We conclude that the average run time in each of these cases is $O(1+\propto)$. This means that if the number of hash table slots $m$ is at least proportional to the number of elements $n$, meaning $n=O(m)$, then the time complexity of the search is constant, $O(1)$.
</details>

> 3. Consider a hash table of size $m= 100$ and a corresponding hash function $h(k) \equiv k \pmod{m}$. Where would the keys 5928, 1001, and 154 be mapped?

<details>
    - 28, 1, and 54
</details>

---

## Sources

> **Introduction to Algorithms, 3rd edition** https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture9.pdf

> **Figure 11.1:** https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture9.pdf

> **Figure 11.2:** Introduction to Algorithms, 3rd edition: https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture9.pdf

> **Figure 11.3:** Introduction to Algorithms, 3rd edition: https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture9.pdf
