---
title: Trees
description: trees
layout: "@main"
---
## **S.1 - Trees**

Trees are hierarchical data structures where objects are linked together by edges. This means that objects in trees have parent-child relationships—think of a family tree, where a person has 0,1  or multiple offspring. Each object in a tree is defined by a node, which contains a key that store the node’s data and also pointers that point to connect nodes. These pointers form the tree’s edges. The number and direction of pointers in each node depend on the tree’s code implementation.

Edges, the connections between two nodes, can be directed or undirected. But, in order for a group of nodes to be a tree and not just a graph, the edges cannot create a cycle (a loop that is created by traversing in the direction of the trees). In addition, any two nodes within the tree must be able to be connected by a unique simple path. 

While trees can have many different designs within mathematics and graph theory, they are generally rooted trees in computer science. This means there is a node where all the edges point away from the root and may have directed edges. 

## **S.1.1 - Tree Terminology**

1. Node: An object that stores a value, known as the key, and pointers to the location of other objects.

![Tree Node Example](https://i.ibb.co/M7QCcnC/Screenshot-2022-11-11-at-02-49-45.png)

2. Root: The first node in a tree and the common ancestor of all nodes. Every tree has one root.
3. Edge: The connecting link between objects in a tree. The edge is formed with the pointers stored in every node.
4. Parent: The predecessor of any node.
5. Child: A descendent of any node.
6. Sibling: A descendant from the same parent.
7. Leaf: A node with no child.
8. Internal Node: A node that has at least one child.
9. Degree: The number of children of a node.
10. Level: The node’s step(s) away from the root. 
11. Height: The number of edges required to reach the furthest leaf from the root.
12. Depth: A node’s number of edges away from the root.
13. Path: A way to reach a node from another node.
14. Subtree: A tree formed from a child being the root.

![Demo Tree](https://i.ibb.co/z6JpkM1/Screenshot-2022-11-11-at-02-52-13.png)

Video Explanation: 

<iframe src="https://drive.google.com/file/d/1nCFPaBHX3BacQY-zL-XcREpS77c0lagw/preview" width="640" height="480" allow="autoplay"></iframe> 

## **S.2 - Code Implementation**

### Python
To code a tree in python, we first define a Node class:
```python
class Node:
   def __init__(self, data):
       self.data = data
       self.left = None
       self.right = None
```

Then, we define a switcher to help the insert method:
```python
   #Inserts a node into the tree, alternating between the left and right sides
   def insert(self, newData):
       global switcher
       if self.left is None:
           self.left = Node(newData)
       elif self.right is None:
           self.right = Node(newData)
       else:
           if switcher == 0:
               switcher = 1
               self.left.insert(newData)
           else:
               switcher = 0
               self.right.insert(newData)
```

Here’s how to write the search method:
```python
#Checks if a target int is part of a tree, prints the results
   def search(self, target):
       if self.data == target:
           print("True")
       else:
           if self.left is not None:
              self.left.search(target)
           elif self.right is not None:
              self.right.search(target)
           else:
               print("False")
```

Here’s how to write a printTreeData method:
```python
    def printTreeData(self):
        if self.left:
            self.left.printTreeData()
        print(self.data),
        if self.right:
            self.right.printTreeData()   
```

Here’s how to write a printTreeData method:
```python
   def printTreeData(self):
       if self.left:
           self.left.printTreeData()
       print(self.data),
       if self.right:
           self.right.printTreeData()
```

Here are some tests we can run to make sure the tree works properly:

```python
root = Node(19)
root.insert(12)
root.insert(5)
root.insert(11)
root.insert(50)
root.insert(43)
root.insert(21)
root.printTreeData()
```

### Java
The Java implementation relies on the hash table and arraylist import packages. The basic functions for the tree class includes search, insert, getRoot, and getTable. 

First, we need to implement the treeNode class:

```java
public class treeNode {
   private String key;
   private treeNode left;
   private treeNode right;
 
   public treeNode(String key){
       this.key = key;
       right = null;
       left = null;
   }
 
   public void setRight(treeNode r){
       this.right = r;
   }
 
   public void setLeft(treeNode l){
       this.left = l;
   }
 
   public String getKey(){
       return this.key;
   }
 
   public treeNode getLeft(){
       return this.left;
   }
 
   public treeNode getRight(){
       return this.right;
   }
}
```
In the Tree class, we need to implement the hash table and arraylist import package:
```java
import java.util.Hashtable;
import java.util.ArrayList;
```

Then, we can begin coding the tree class by defining the properties of a tree:

```java
private Hashtable<String,ArrayList<treeNode>> tree = new Hashtable<>();
private treeNode root;
```

Next, we initialize the tree object:
```java
public rootedTree(treeNode root) {
    this.root = root;
    tree.put(root.getKey(),new ArrayList<treeNode>());
}
```

The search method:
```java
   public boolean search(String target) {
       return tree.containsKey(target);
   }
```
The insert method:
```java
   public void insert(treeNode newNode, treeNode parent) {
       // ArrayList<treeNode> c = tree.get(parent.getKey());
       // c.add(newNode);
       tree.get(parent.getKey()).add(newNode);
       tree.put(newNode.getKey(), new ArrayList<treeNode>());
   }
```

The getTable method:
```java
   public Hashtable<String,ArrayList<treeNode>> getTable() {
       return tree;
   }
```

The getRoot method:
```java
   public treeNode getRoot() {
       return this.root;
   }
```

The printTree method:
```java
   public static void printTree(rootedTree t) {
       // System.out.println(t.getTable());
       treeNode current = t.getRoot();
       for (int i = 0; i < t.getTable().size(); i++) {
 
           Hashtable<String,ArrayList<treeNode>> table = t.getTable();
           System.out.print(current.getKey() + ": ");
           ArrayList<treeNode> children = current.getChildren();
           System.out.println(children.get(0).getKey());
 
           for (int j = 0; j < children.size(); j++) {
               //System.out.println("HI");
               System.out.print(children.get(j).getKey() + " ");
           }
       }
   }
```

Now, we test our implementation using a Main method. We test using a fake treeNode and using all our class functions.
```java
   public static void main(String [] args) {
       treeNode a = new treeNode("a");
       treeNode b = new treeNode("b");
       treeNode c = new treeNode("c");
       treeNode d = new treeNode("d");
       treeNode e = new treeNode("e");
       treeNode f = new treeNode("f");
 
       rootedTree tree1 = new rootedTree(a);
       //printTree(tree1);
       tree1.insert(b,a);
       printTree(tree1);
   }
```

## **S.3 - Comprehension Questions**

![Demo Tree 2](https://i.ibb.co/xgmTcSy/Screenshot-2022-11-11-at-03-17-12.png)

1. a. Which node is the root?
   b. Which nodes are the children of the root?
   c. What is the parent of the node with a key of 5?
   d. How many siblings does the node with a key of 11 have?

![Demo Tree 3](https://i.ibb.co/B3SjT8x/Screenshot-2022-11-11-at-03-18-27.png)

2. a. What is the root node?
   b. How many children nodes does 13 have?
   c. What node is the parent of 25?
   d. Does 86 have a parent node?

### Answers

1. a. 12
   b. 23 and 17
   c. 23
   d. 1

2. a. 86
   b. 3
   c. 43
   d. No, the root does not have a parent node

### Sources
> **Introduction to Algorithms, 3rd edition** https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture9.pdf

> https://www.codesdope.com/blog/article/trees-in-computer-science/ 

> https://isaaccomputerscience.org/concepts/dsa_datastruct_tree?examBoard=all&stage=all

> https://www.baeldung.com/java-binary-tree

> http://www.btechsmartclass.com/data_structures/tree-terminology.html 
