---
title: Binary Tree
description: A comprehensive overview for the Binary Tree data structure
layout: "@main"
---

## **S.1 Introduction - what is a binary search tree**

A Binary Search Tree (BST) is a binary tree with a set of extra properties.

1. The left tree of a node may only contain nodes with values lesser than the parent node’s value
2. The right tree of a node may only contain nodes with values greater than the parent node’s value
3. Each subtree of a node must also be a Binary Search Tree

The Binary Search Tree gets its name from its efficient search algorithm which can be executed in $~O(log(n))$ time complexity.

The binary tree on the left is a valid BST.
The tree on the right is not a valid BST because the node with value 3 has a node with a lesser value in its right subtree.

![Image S.1.1](https://i.ibb.co/2gCQ26F/chart1.png)

> **Figure S.1.1** a comparison between a Binary Tree and a Binary Search Tree

Instantiating a BST class:

### python

```py
class Node:
    def __init__(self, val=0):
        self.left = None
        self.right = None
        self.val = val
```

Notably, none of the features that differentiate a BST from a binary tree are present in this code. These features are instead enforced when inserting and deleting nodes.

---

## **S.2 The Methods of a Binary Search Tree**

One merit of the Binary Search Tree is its ability to search for a value in O(h) time complexity – h being the height of the tree. In the best case, h is roughly equal to log2n, since a Binary Search Tree branches out by a factor of two. A BST with three nodes could have a height of two or a height of three depending on the values of the nodes.

![Image S.2.1](https://i.ibb.co/FJHwvTd/chart3.png)

> **Figure S.2.1** Optimizing the height of a BST>

In order to perform the search algorithm, one needs to properly leverage the properties of the BST.

Given a target value, simply compare the target with the value of the root (top) of the tree. If the target is greater than the root, move down to the right subtree which has larger value nodes. If the target is less than the current node, move down to the left subtree which has lesser value nodes. Repeat this process until the target matches the current node or the target is not found. This can be done recursively or iteratively. Here’s is an example of a recursive solution

```py
def search(self, target):
        if not self.val:
            return None
        if self.val == target:
            return self
        if target > self.val:
            if self.right:
                return self.right.search(target)
            return None
        if self.left:
            return self.left.search(target)
        return None
```

Methods to find the minimum and maximum of a BST are even more straightforward. To find the minimum, continuously traverse the left subtree of a node until there are no more nodes. To find the maximum, traverse the right subtree. This can also be done recursively.

```py
def get_min(self):
        cur = self
        while cur.left:
            cur = cur.left
        return cur

    def get_max(self):
        cur = self
        while cur.right:
            cur = cur.right
        return cur
```

A concept that will be helpful for insertion and deletion of nodes in a BST are the predecessor and successor nodes. Observing the BST on the left side of Figure 1, let’s consider the node with value 8. Its predecessor node is defined as the node with the closest value to 8 while being smaller than 8. In other words, it is the maximum node of the left subtree of the node. Its successor node is the node with the closest value to 8 while being larger than 8. This would be the minimum node of the right subtree. These can be simply implemented with our min and max methods:

```py
def predecessor(self):
        if self.left:
            return self.left.get_max()
        return None

    def successor(self):
        if self.right:
            return self.right.get_min()
        return None
```

---

## **S.3 Insertion and Deletion in a Binary Search Tree**

### Insertion

The insertion method for BSTs is simple and can be implemented recursively. The idea is to compare the key you’re inserting to other nodes, starting with the head. If it’s less than the node you’re comparing it to, go to the node’s left subchild. Otherwise, go to the right subchild. Once you reach a null node, you’re in the right spot!

![Image S.3.1](https://i.ibb.co/6tCMNvN/chart2.png)

> **Figure S.3.1** inserting a node with value 7 into a BST.

#### **Example implementation:**

```java
private void insert(BSTNode root, int key)
{
    // base case, key is in right spot
    if (root == null) {
        new Node(key);
    }

    // if the given key is less than the root node,
    // go to the left subtree recursively
    if (key < root.data) {
        root.left = insert(root.left, key);
    }

    // otherwise, go to the right subtree recursively
    else {
        // key >= root.data
        root.right = insert(root.right, key);
    }
}
```

### Deletion

Deleting from a binary search tree is very different from any other data structure and is more situational than insertion. There are three possibilities to deleting a node, each requiring separate consideration:

> Deleting a leaf, or a node with no children.

- This can be accomplished by removing its parent and replacing it with its child, setting the child to be null.

> Deleting a node with one child.

- This can be accomplished by placing the child on the node to be deleted.

> Deleing a node with two children.

- This can be accomplished by finding the node’s parent and replacing the node to be deleted with its parent. This case is complicated the right-left child orientation matters.

#### **Case 1**

![Image S.3.2](https://i.ibb.co/YPKb7XL/chart4.png)

> **Figure S.3.2**

#### **Case 2**

![Image S.3.3](https://i.ibb.co/6Nw5cD3/chart5.png)

> **Figure S.3.3**

For both case 1 and 2, in order to delete any node that does not have a left child (like node C), we can replace it with its right child. This right child could exist, but in the case of node C, the right child is null. Replacing C with null essentially deletes the node, accomplishing our goal (deletion with no children). If C has a right child (like in Case 2 with E), we can replace the node with its right child since we know that its right child is greater than the node itself (but still less/greater than its parent node) which maintains our definition of a binary search tree. If the tree has a one child (a left child), then it can be replaced with its left child.

#### **Case 3**

![Image S.3.4](https://i.ibb.co/P5bnsc1/chart6.png)

> **Figure S.3.4**

When a node has both a left and a right child, one of the children (or nodes of the children) needs to replace that node in the tree if we are going to delete it. We will look to the nodes on the right, as the right child is greater than the left. We want the right child closest to the node that we want to delete. This right child is also known as the successor, which is the node that will take the old location of the node we wish to delete.

### Movement and Deletion

To move nodes around, we must define a transplant method that can move subtrees (nodes with children) around a tree. This will streamline our deletion method as we know what nodes are being moved.
The transplant method is equipped to replace the subtree rooted at u with the subtree at v. This means that u’s parent becomes v’s parent, so all of v’s children will fall under u.

```java
private void transplant(BSTNode u, BSTNode v)
{
//1        if(u.getParent() == null)
//2            root = v;
//3        else if(u == u.getParent().getLeft())
//4            u.getParent().setLeft(v);
//5        else
//6            u.getParent().setRight(v);
//7        if(v != null)
//8            v.setParent(u.getParent());
}
```

> 1. Lines 1-2 test whether or not u is the root. If so, then v becomes the new root.
> 2. If the node is not the root, then we see if u is a left child. If u is a left child, then we replace the left child of u’s parent with v, essentially replacing u with v.
> 3. If u is not the left child, then it is the right child, so we set the right child of u’s parent with v.
> 4. It might seem like we are done, but we have yet to update v’s parent reference. Remember, we can only set the reference if v is an actual node (and not null), so we must check it, and if it is a node object, we will set the parent.

Now that we have a transplant helper method, we can formally establish the delete method.

_Recall from Object Oriented Programming: In languages like java that are object heavy, helper methods are declared as private compared to public for data security._

We need to form a delete method that can effectively handle each case. We need to first check to see if the node has no left child (Case 1 & 2). If that is not the case, we need to see if the node has a left child, but no right child (Case 2). If none of those are true, then the node must have two children. Then, we need to find the value in the right subtree that has the smallest value, which is the last left child of the right child of the node to be deleted. Once we find the smallest value, we can replace it with the node we are going to delete. The last thing we need to do is the formalities - setting the new children and parents of the nodes affected in the tree. This code example should help you visualize this process. If it helps, take the figure of the Binary Search Tree introduced earlier to trace this method through, or draw one on your own and test out all the cases.

```java
public void delete(BSTNode x)
{
//1        if(x.getLeft() == null)
//2            transplant(x,x.getRight());
//3        else if(x.getRight() == null)
//4            transplant(x,x.getLeft());
//5        else
//6        {
//7            BSTNode y = x.getRight();
//8            while(y.getLeft() != null)
//9                y = y.getLeft();
//10           if(y != x.getRight())
//11           {
//12               transplant(y,y.getRight());
//13               y.setRight(x.getRight());
//14               y.getRight().setParent(y);
//15           }
//16           transplant(x,y);
//17           y.setLeft(x.getLeft());
//18           y.getLeft().setParent(y);
//19       }
}
```

> 1. Lines 1-2 see if the node has no left child. Similarly, lines 3-4 see if the node has no right child. Then, we replace the node with its left or right child, if that is the case, and deletion is complete.
> 2. Lines 5-19 deal with the case where the node has two children.
> 3. Lines 7-9 find the minimum value in the binary search tree with the right child of the node to be deleted, and this minimum value is guaranteed to be the value that we replace the node with. Why might that be? [comment]
> 4. In lines 10-18, we are dealing with the ‘formalities’ - that is, transplanting the new node with the node to be deleted and updating the parent and left/right child references. In line 12, we transplant y with y’s right child since y is replacing node x. This right child may or may not exist. If it does not, then y’s right child will be null. Then, in lines 13-16, we are transplanting or moving x and y, thereby deleting x and replacing it with y. In lines 17-18, we are wrapping up and setting y to take on x’s left subtree (unaffected) and setting y’s left subtree root’s parent reference to y.

Voilà! We are finished with deletion!

---

## **Exercises**

### Comprehension Questions

> 1. Given how the current insertion method is implemented for the Binary Search Tree, do you see any future issues in terms of maintaining a log(n) runtime when searching the BST?

- The insertion method does not make any attempt to “balance” the BST. To help visualize this, imagine this code:

  ```py
  BST = Node(5)
  BST.insert(Node(4))
  BST.insert(Node(3))
  BST.insert(Node(2))
  BST.insert(Node(1))
  ```

  Which would produce this BST:

  ![Solution 1.1](https://i.ibb.co/dgQd3PP/chart7.png)

  Does this remind you of a Linked List? If the user calls BST.search(1), the runtime will be $O(n)$ since the height of the BST = n. In order to balance the tree, one would have to recreate the insert method to balance the tree after each insertion. For more info, check out AVL trees or Red-Black Trees.

> 2. Given a sorted array l, convert l into a Binary Search Tree. For a secondary challenge, convert l into a height-balanced BST. This means that the height difference between each node’s left and right subtrees is never greater than one.

![Question 2](https://i.ibb.co/Q6zMCwV/chart8.png)

- Here is a possible solution in python:

<details>
    ```py
    def sorted_array_to_BST(l):
        if l is None:
            return None
        #find index of middle element
        mid = len(l)//2
        #starting BST in the middle of the sorted list
        return_node = Node(l[mid])
        #recursive calls to set root's left and right tree to the middle of each sublist
        return_node.left = sorted_array_to_BST(l[:mid])
        return_node.right = sorted_array_to_BST(l[mid+1:])
        return return_node
    ```    
</details>


### Challenge Questions

1. Is the operation of deletion “commutative” in the sense that deleting x and then y from a binary search tree leaves the same tree as deleting y and then x? Argue why it is or give a counterexample. Drawing a binary search tree may help in this case.

2. When node z in TREE-DELETE has two children, we could choose node y as its predecessor rather than its successor (Node z is the node to be deleted (x in the example) and Node y is the node we would be replacing it with). What other changes to TREE-DELETE would be necessary if we did so? Some have argued that a fair strategy, giving equal priority to predecessor and successor, yields better empirical performance. How might TREE-DELETE be changed to implement such a fair strategy?

---

## **Sources**

> **Introduction to Algorithms, 3rd edition** https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture9.pdf
