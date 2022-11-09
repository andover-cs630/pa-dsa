---
title: Red-Black Trees
description: An article on properties, rotations,
layout: "@main"
---

## **S.1: Properties of Red-Black Trees**

![Red-Black Trees 1](https://i.ibb.co/tHLjBfh/Red-Black-Trees.png) <br />
Figure S.1.1

1. Every node is either red or black
2. Every leaf points to null. This null value is considered black when calculating the tree black height
3. If a node is red then both of its children have to be black
4. Every simple path from any node to their leaves, that is the shortest path from the node to their leaves, contains the same amount of black nodes

Due to these rules, red-black trees tend to balance themselves, meaning that they have a similar depth across each simple path from root to leaf. This allows searching a red-black tree to be faster than that of a [standard binary search tree](/Markdown/binary-search-trees).

## **S.2 Red-Black Tree Rotations**

![Red-Black Trees Rotation Gif](https://media.giphy.com/media/xlUrph1jk88MGODTSq/giphy.gif)

Figure S.2.1

One important method for Red-Black trees are rotations, which changes the structure of the tree so that smaller subtrees get moved down and larger subtrees get moved up, improving performance of tree methods including insertion and deletion (all in constant time).

During left rotation, the root (aka the node that left rotate is called on) is replaced by the pivot (right child) at the root of the subtree. The pivot’s right child remains the same while the original root node becomes its left child. If the pivot had a left child before rotation, that left child becomes the right child of the now-rotated original root. Left rotation also assumes that the pivot (right child) of the root is not null, as the right child becomes the new root after rotation is complete. This process is exactly the same but symmetrical for right rotation.

**_Java Implementation_**

```java
//rotation method which is helpful for maintaining red-black properties after insertion
//After left rotation, node y becomes the new root of the subtree with x as its left child. Y's left child becomes x's right child.
//PARAMS: x.right != this.NIL
public void left_rotate(RedBlackNode x){
        RedBlackNode y = x.right;
        //As a definition of rotation, y's left child becomes x's right child
        x.right = y.left;
        //Make y's left child's parent x, continuing process of making y's left child x's right child
        if (y.left != this.NIL){
        y.left.parent = x;
        }
        //Swap x and y, beginning with making their parents the same
        y.parent = x.parent;
        //If x is the root, y becomes the new root
        if(x.parent == this.NIL) {
        this.root = y;
        }
        //if x is the left substree of its parent, make its parent point to y
        else if (y.parent.left.equals(x)){
        y.parent.left = y;
        }
        //if x is the right substree of its parent, make its parent point to y
        else {
        y.parent.right = y;
        }
        y.left = x;
        x.parent = y;
        }

//rotation method which is helpful for maintaining red-black properties after insertion
//After right rotation, node y becomes the new root of the subtree with x as its right child. Y's right child becomes x's left child.
//PARAMS: x.right != this.NIL
public void right_rotate(RedBlackNode x){
        RedBlackNode y = x.left;
        //As a definition of rotation, y's right child becomes x's left child
        x.left = y.right;
        //Make y's right child's parent x, continuing process of making y's right child x's left child
        if (y.right != this.NIL){
        y.right.parent = x;
        }
        //Swap x and y, beginning with making their parents the same
        y.parent = x.parent;
        //If x is the root, y becomes the new root
        if(x.parent == this.NIL) {
        this.root = y;
        }
        //if x is the right substree of its parent, make its parent point to y
        else if (y.parent.right.equals(x)){
        y.parent.right = y;
        }
        //if x is the left substree of its parent, make its parent point to y
        else {
        y.parent.left = y;
        }
        y.right = x;
        x.parent = y;
        }
```

**_Python Implementation_**

```python
def rightrotate(self, node):
x = node
y = node.left
right = False
root = False

        #y become the parent, x becomes right child of y, and right child of y becomes left child of x
        if (x.parent is not None and x.parent.right == x):
            right = True
        elif(x.parent is None):
            root = True

        temp = x.parent
        x.parent = y
        temp2 = y.right
        y.right = x
        x.left = temp2
        if (root == False):
            y.parent = temp
            if (right):
                temp.right = y
            else:
                temp.left = y
        else:
            y.parent = None
            self.root = y
def leftrotate(self, node):
x = node
y = node.right
right = False
root = False

        #y become the parent, x becomes left child of y, and left child of y becomes right child of x
        if (x.parent is not None and x.parent.right == x):
            right = True
        elif(x.parent is None):
            root = True
        temp = x.parent
        x.parent = y
        temp2 = y.left
        y.left = x
        x.right = temp2
        if (root == False):
            y.parent = temp
            if (right):
                temp.right = y
            else:
                temp.left = y
        else:
            y.parent = None
            self.root = y
```

## **S.3 Red-Black Tree Insertion**

An essential operation of a Red-Black Tree is insertion, or adding a node into the tree. There are many techniques for Red-Black Tree insertion, but the method you will see here is [normal binary search tree insertion](/Markdown/binary-search-trees#insertion) with the caveat that all newly inserted nodes are red, followed by “repainting” or “rebalancing” to restore RB Tree properties.

Once the node has been inserted in the correct place, a call to a rebalancing method is made to maintain RB Tree properties. This rebalancing method checks the newly inserted node, X, against its family nodes (its parent, its grandparent, and its uncle) to decide how to modify the tree.

For simplicity's sake, we will refer to X’s parent as P, X’s grandparent as GP, and X’s uncle as U. First P’s color is checked. If it’s black, we do not have to do any further steps to modify the tree. If it’s red, however, we must check U’s color.

If U is black, there are four potential cases:

1. P is the left child of G and X is the left child of P (Known as the Left-Left case)
2. P is the left child of G and X is the right child of P (Left-Right case)
3. P is the right child of G and X is the right child of P (Right-Right case)
4. P is the right child of G and X is the left child of P (Right-Left case)

In case one, P is made black, G is made red, and right rotation is done on G. In case two, left rotation is done on P, which creates a left-left case (aka case one), and the steps are repeated. For cases three and four, the steps are exactly the same with rotation in opposite directions.

**_Java Implementation_**

```java
public void rebalance(RedBlackNode x){
       //if x is the root, make x black
       if (x.parent == this.NIL || x.parent == null){
           x.color = BLACK;
       }
       //if x's parent is not black and x is not the root
       else if (x.parent.color == RED){
           //define grandparent and uncle nodes
           RedBlackNode gp = x.parent.parent;
           RedBlackNode uncle = this.NIL;
           if (gp.right == x.parent){
               uncle = gp.left;
           }
           else {
               uncle = gp.right;
           }

           //if x's uncle is red, change x's parent and uncle to black and gp to red, repeat rebalance with gp as x
           if (uncle.color == RED){
               x.parent.color = BLACK;
               uncle.color = BLACK;
               gp.color = RED;
               rebalance(gp);
           }
           //when uncle is black
           else {
               //for LX rotation
               if (gp.left == x.parent){
                   //Case 1: LR rotation
                   if (x.parent.right == x){
                       x = x.parent;
                       left_rotate(x);
                   }
                   //Cases 1 and 2: LR and LL rotation
                   x.parent.color = BLACK;
                   x.parent.parent.color = RED;
                   right_rotate(x.parent.parent);
               }
               //for RX rotation
               else {
                   //Case 3: RR rotation
                   if (x.parent.left == x){
                       x = x.parent;
                       right_rotate(x);
                   }
                   //Cases 2 & 4: RL and RR rotation
                   x.parent.color = BLACK;
                   x.parent.parent.color = RED;
                   left_rotate(x.parent.parent);
               }
           }
       }
   }
```

**_Python Implementation_**

```python
def getUncle(self, node):
        gp = node.parent.parent
        if (gp.left == node.parent):
            if (gp.right is None):
                u = Node(None)
                u.parent = gp
                gp.right = u
                u.color = 0
                return u
            else:
                return gp.right
        else:
            if (gp.left is None):
                u = Node(None)
                u.parent = gp
                gp.left = u
                u.color = 0
                return u
            else:
                return gp.left
    def LLCase(self, node):
        gp = node.parent.parent
        p = node.parent
        self.rightrotate(gp)
        temp = p.color
        p.color = gp.color
        gp.color = temp
    def RRCase(self, node):
        gp = node.parent.parent
        p = node.parent
        self.leftrotate(gp)
        temp = p.color
        p.color = gp.color
        gp.color = temp
    def LRCase(self, node):
        p = node.parent
        self.leftrotate(node.parent)
        self.LLCase(p)
    def RLCase(self, node):
        p = node.parent
        self.rightrotate(node.parent)
        self.RRCase(p)
    def checkInsertionCase(self, node, uisnull=None):
        gp = node.parent.parent
        p = node.parent
        if (p.left == node and gp.left == p):
            self.LLCase(node)#LL case
        elif(p.right == node and gp.left == p):
            self.LRCase(node)#LR case
        elif(p.right == node and gp.right == p):
            self.RRCase(node)#RR case
        elif(p.left == node and gp.right == p):
            self.RLCase( node)#RL case
        self.root.color = 0
        #deleted the used null node

        if (uisnull is not None):
            if (uisnull.parent.left == uisnull):
                uisnull.parent.left = None
            else:
                uisnull.parent.right = None

    def repaint(self, node):
        if (node.parent is None):
            node.color = 0
        elif (node.parent.color == 1):
            u = self.getUncle(node)
            if (u.color == 1):
                u.color = 0
                node.parent.color = 0
                node.parent.parent.color = 1
            else:
                if (u.data is None):
                    self.checkInsertionCase(node, u)
                else:
                    self.checkInsertionCase(node)
```

## **S.4 Red-Black Tree Deletion**

Red-Black Tree deletion follows the same procedure as [BST deletion](/Markdown/binary-search-trees#deletion), followed by a set of rules to repaint the tree.

If the deleted node was black, then the child that has succeeded the deleted node is painted black. Otherwise, the child’s color is left untouched.

**_Java Implementation_**

```java
//Function to delete a node from the tree
   public void case1delete(RedBlackNode node){
       RedBlackNode p = node.parent;
       boolean onRight = false;
       if (p.right == node){
           onRight = true;
       }
       if (node.left == this.NIL || node.left == null){
           RedBlackNode c = node.right;
           node.parent = this.NIL;
           if (onRight){
               p.right = c;
           }
           else {
               p.left = c;
           }
           if (c != this.NIL && c != null){
               c.parent = p;
               if (node.color == BLACK){
                   c.color = BLACK;
               }
           }
       }
       else if (node.right == this.NIL || node.right == null){
           RedBlackNode c = node.left;
           node.parent = this.NIL;
           if (onRight){
               p.right = c;
           }
           else {
               p.left = c;
           }
           if (c != this.NIL && c != null){
               c.parent = p;
               if (node.color == BLACK){
                   c.color = BLACK;
               }
           }
       }
   }

   public void delete(int target){
       RedBlackNode node = searchNode(root, target);
       if (node.left == this.NIL || node.left == null || node.right == this.NIL || node.right == null){
           case1delete(node);
       }
       else {
           RedBlackNode s = getinorderSuccessor(node);
           int temp = s.key;
           s.key = node.key;
           node.key = temp;
           case1delete(s);
       }
   }

   private RedBlackNode getinorderSuccessor(RedBlackNode node){
       if (node.right != null && node.right != this.NIL){
           RedBlackNode successor = inOrderTraversal(node.right);
           return successor;
       }
       else {
           RedBlackNode successor = parentTraversal(node);
           return successor;
       }
   }

   private RedBlackNode inOrderTraversal(RedBlackNode node){
       if (node != this.NIL && node != null){
           RedBlackNode left = inOrderTraversal(node.left);
           if (left != this.NIL && left != null){
               return left;
           }
           else {
               return node;
           }
       }
       return this.NIL;
   }

   private RedBlackNode parentTraversal(RedBlackNode node){
       RedBlackNode p = node.parent;
       if (node == p.left){
           return p;
       }
       else {
           return parentTraversal(p);
       }
   }
```

**_Python Implementation_**

```python
def getinorderSuccessor(self, node):
        if (node.right is not None):
            succ = self.inordertrav(node.right)
            return succ
        else:
            succ = self.parenttrav(node)
            return succ
    def case1delete(self, node):

        p = node.parent
        right = False
        if (p.right == node):
            right = True
        if (node.left == None):
            c = node.right
            node.parent = None
            if (right):
                p.right = c
            else:
                p.left = c
            if (c!=None):
                c.parent = p
            if (c != None and node.color == 0):
                c.color = 0
        elif (node.right == None):
            c = node.left
            if (right):
                p.right = c
            else:
                p.left = c
            if (c!=None):
                c.parent = p
            node.parent = None
            if (c != None and node.color == 0):
                c.color = 0
    def delete(self, node):
        if (node.left == None or node.right == None):
            self.case1delete(node)
        else:
            s = self.getinorderSuccessor(node)
            #switch s and node
            temp = s.data
            s.data = node.data
            node.data = temp
            self.case1delete(s)
```

## **Exercises**

Exercises:
S.1.1 - Can you have a tree of all black nodes?<br />
Answer: Yes

S.1.2 - What is the length of the simple path of the above tree? <br />
Answer: 4 (Remember that the null node, not pictured, counts for the path length)

S.2.1 - What is the runtime of left and right rotate? <br />
Answer: Constant time O(1)

S.2.2 - In right rotation, can the pivot be null? <br />
Answer: No, because that would result in the root of the subtree being null with non-null nodes after.

S.3.1 - Does Red-Black insertion incorporate BST insertion? <br />
Answer: Yes. BST insertion is the first step before the tree is repainted.

S.3.2 - Is insertion have a longer run time in RB Trees than in BST? <br />
Answer: Depends on the tree. BST insertion depends on height, and RB insertion depends on the log of total entries, so if the log of total entries of a tree is lower than the height, run time of insertion for a RB Tree will be faster.

## **Sources**

> https://www.codesdope.com/course/data-structures-red-black-trees/ > https://www.codesdope.com/course/data-structures-red-black-trees-insertion > https://www.geeksforgeeks.org/red-black-tree-set-2-insert/ > https://en.wikipedia.org/wiki/Tree_rotation#/media/File:Tree_rotation_animation_250x250.gif > https://en.wikipedia.org/wiki/Tree_rotation
