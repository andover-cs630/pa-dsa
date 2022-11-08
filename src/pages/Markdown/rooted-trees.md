---
title: Rooted Trees
description: rooted trees
layout: "@main"
---

## **Rooted Trees**

A rooted tree is a tree that contains one node, or object, designated to be at the beginning, often referred to as the head or root of the tree. If you are unfamiliar with trees, they are a data structure in which objects are linked together by edges, which are often implemented as pointers. Each node of a tree thus contains a key, which represents that specific node’s data, as well as links, which point to connected nodes and form the tree’s edges. Links are traditionally either upwards or downwards on the tree.

![Node Diagram](https://i.ibb.co/nCzfZ6V/Image-1-Rooted-Trees-Blog-Post.png)

In addition to the root node, rooted trees consist of parents and sibling nodes. Parent refers to the node directly before a specific node and, conversely, that specific node is referred to as the parent’s child. Children of the same node are known as sibling nodes. In most representations of trees, each node is depicted as a circle with its key in the center along with arrows to show the edges linking the nodes together.

![Rooted Tree Example](https://i.ibb.co/9vCmHyn/Image-2-Rooted-Trees-Blog-Post.jpg)

### Comprehension Questions

![Demo Tree](https://i.ibb.co/Nj9tVc5/Image-3-Rooted-Trees-Blog-Post.png)

1. a. Which node is the root?
   b. Which nodes are the children of the root?
   c. What is the parent of the node with a key of 5?
   d. How many siblings does the node with a key of 11 have?

![Demo Tree 2](https://i.ibb.co/kmRVrjy/Image-4-Rooted-Trees-Blog-Post.png)

2. a. What is the root node?
   b. How many children nodes does 13 have?
   c. What node is the parent of 25?
   d. Does 86 have a parent node?

### Answers

1. a. 12
   b. 23 and 17
   c. 23
   d. 1

1. a. 86
   b. 3
   c. 43
   d. No, the root does not have a parent node

### Code Examples: java

```java
import java.util.ArrayList;
​
public class treeNode {
    private String key;
    private ArrayList<treeNode> children = new ArrayList<treeNode>();
​
    public treeNode(String key) {
        this.key = key;
    }
​
    public String getKey() {
        return this.key;
    }
​
    public void addChild(treeNode c) {
        children.add(c);
    }
​
    public void removeChild(treeNode c) {
        int i = children.indexOf(c);
        if (i < 0) {
            System.out.println("That is not a child of this node");
        }
        else {
            children.remove(i);
        }
    }
​
    public ArrayList<treeNode> getChildren() {
        return children;
    }
}

import java.util.Hashtable;
import java.util.ArrayList;
​
public class rootedTree {
​
    private Hashtable<String,ArrayList<treeNode>> tree = new Hashtable<>();
    private treeNode root;
​
    public rootedTree(treeNode root) {
        this.root = root;
        tree.put(root.getKey(),new ArrayList<treeNode>());
    }
​
    public boolean search(String target) {
        return tree.containsKey(target);
    }
​
    public void insert(treeNode newNode, treeNode parent) {
        // ArrayList<treeNode> c = tree.get(parent.getKey());
        // c.add(newNode);
        tree.get(parent.getKey()).add(newNode);
        tree.put(newNode.getKey(), new ArrayList<treeNode>());
    }
​
    public Hashtable<String,ArrayList<treeNode>> getTable() {
        return tree;
    }
​
    // public String printArrList(ArrayList<treeNode> a) {
    //     for (int i = 0; i < a.size(); i++) {
    //         System.out.print(a.get(i).getKey() + " ");
    //     }
    // }
​
    public treeNode getRoot() {
        return this.root;
    }
​
    public static void printTree(rootedTree t) {
        // System.out.println(t.getTable());
        treeNode current = t.getRoot();
        for (int i = 0; i < t.getTable().size(); i++) {
​
            Hashtable<String,ArrayList<treeNode>> table = t.getTable();
            System.out.print(current.getKey() + ": ");
            ArrayList<treeNode> children = current.getChildren();
            System.out.println(children.get(0).getKey());
​
            for (int j = 0; j < children.size(); j++) {
                //System.out.println("HI");
                System.out.print(children.get(j).getKey() + " ");
            }
        }
    }
​
    public static void main(String [] args) {
        treeNode a = new treeNode("a");
        treeNode b = new treeNode("b");
        treeNode c = new treeNode("c");
        treeNode d = new treeNode("d");
        treeNode e = new treeNode("e");
        treeNode f = new treeNode("f");
​
        rootedTree tree1 = new rootedTree(a);
        //printTree(tree1);
​
        tree1.insert(b,a);
        printTree(tree1);
    }
​
```

### Code Examples: python

```python
switcher = 0

class Node:
   def __init__(self, data):
       self.data = data
       self.left = None
       self.right = None

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

   def printTreeData(self):
       if self.left:
           self.left.printTreeData()
       print(self.data),
       if self.right:
           self.right.printTreeData()

root = Node(19)
root.insert(12)
root.insert(5)
root.insert(11)
root.insert(50)
root.insert(43)
root.insert(21)
root.printTreeData()
```
