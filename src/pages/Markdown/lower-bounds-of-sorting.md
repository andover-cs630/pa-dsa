---
title: Lower Bounds of Sorting
description: An important detail when engaging with a variety of Search Algorithms
layout: "@main"
---

## **S.1 Search Algorithms**

To define the lower bounds of searching and sorting, we will look at this concept through the comparison model. This model defines every input as a black box data type, restricting the operations on that data type to comparisons (only, =, <, >, <=, >=). In this model, the only way to evaluate inputs is through comparisons (think of merge sort and heap sort). To measure the time cost in this model, we will count the number of comparisons made in the sorting or searching algorithms.

This model allows us to use a decision tree—containing all possible comparisons, outcomes, and answers to a problem of any size—to model searching algorithms.

We’ll use a binary search algorithm of a size 3 array A to model the decision tree—circles represent decisions, and boxes represent answers.

To visualize the question if A[1] < x, we draw a binary tree.

![Image S.1.1](https://i.ibb.co/qgNbPCs/chart-1.png)

> **Figure S.1.1** we draw a binary tree can help visualize A[1] < x

Every internal node, a point of intersection between two branches, in the decision tree corresponds to a binary decision in the algorithm. Every leaf, the point where the tree cannot extend anymore, represents the answer return after its execution. As such, each algorithm’s execution can be represented by a root-to-leaf path, the path that the algorithm takes from the problem to the answer. The algorithm’s running time will be the length of the root-to-leaf tree.

For example, when x < A[0], the execution of the algorithm will look as follows:

![Image S.1.2](https://i.ibb.co/VWKMGf5/chart-4.png)

> **Figure S.1.2**

The algorithm made two comparisons to reach the answer, so the root-to-leaf path’s length is 2. The worst-case running time of the algorithm will be the length of the longest root-to-tree path(the decision tree’s height). Since each root-to-leaf path in our algorithm has the same length, the worst-case running time will simply be two comparisons. This model allows us to transform the difficult question of how to create the best worst-case run time into how to make the shortest tree.

Using this model, we can prove the lower bound for searching algorithms. Because decision trees are binary and must have >= n leaves, the lower bound for searching algorithms, which is the height of the decision tree, has to be $log(n).$

---

## **S.2 Sorting algorithms**

We will be using the same binary tree model to find sorting algorithms. A generic example of a binary tree for a merge sort follows.

![Image S.1.2](https://i.ibb.co/3FdP0j2/chart-2.png)

> **Figure S.2.1**

Given an input array $(a_1,...,a_n)$ of unordered elements, there are $n!$ possible permutations, at least one of which is a correct nondecreasing order. If all elements are distinct, then there is precisely one correct ordering.

Note that a series of comparisons yields a permutation. Indeed, let this series be $C_1, C_2,...,C_T$ where each comparison $C_i$ is a set of two elements $a_i, a_j$ and either ≥ or < indication whether $a_i ≥ a_j$ or $a_i < a_j$

Suppose we fix the $a_i$ and $a_j$ in each of the $C_k$. Then, different sequences of signs generates $2^T$ possible permutations, which must cover all $n!$ permutations. This tells us that $2^T ≥ n!$ hence

$T≥ log_2(n!)$

$≅ nlog_2(\frac{n}{e})$

$= O(nlogn)$

## **S.3 Experiments with Merge Sort**

Code implementation: In the following java and python code, we will be implementing merge sort and testing its average array accesses across different sizes of arrays to see its run time.

**Java:**

```
import java.io.*;

public class BinarySearchTesting {
   public static int countAccesses(long[] x, int target){
       int arrayAccessCount = 0;
       int start = 0;
       int end = x.length;
       while(start != end){
           int middle = (start + ((int) (end - start) / 2) );
           arrayAccessCount += 1;
           if(x[middle] == target){
               return arrayAccessCount;
           }
           else if(x[middle] > target){
               end = middle;
           }
           else{
               start = middle + 1;
           }
           arrayAccessCount += 1;
       }
       return arrayAccessCount;
   }

   public static long[] makeRandomArray(int length){
       long[] ret = new long[length];
       for(int i = 0; i<length; ++i){
           ret[i] = (int) (Math.random() * 1000);
       }
       return ret;
   }

   public static void main(String[] args) throws IOException{
       for(int i = 1; i < 32; ++i){
           long[] randomArray = makeRandomArray((int) Math.pow(2, i));
           int totalCount = 0;
           for(int j = 0; j < 3; ++j){
               totalCount += countAccesses(randomArray, (int) Math.pow(2, i));
           }
           int averageCount = (int) totalCount / 3;
           System.out.println(Math.pow(2, i) + " " + averageCount);
       }
   }
}
```

**Python:**
```
import random
# Algorithm to count to number of array accesses in binary search
def countAccesses(x, target):
  arrayAccessCount = 0
  start = 0
  end = len(x)
  while  start != end:
      middle = (start + ((end - start) // 2))
      arrayAccessCount += 1
      if x[middle] == target:
          return arrayAccessCount
      elif x[middle] > target:
          end = middle
      else:
          start = middle + 1
      arrayAccessCount += 1
  return arrayAccessCount
def makeRandomArray(length):
  ret = []
  for i in range (length):
      ret.append(int(random.randrange(0, 1000)))
  return ret
for i in range (1, 32):
  randomArray = makeRandomArray(int(pow(2, i))) #making a random array that doubles for each iteration.
  totalCount = 0
  for j in range(3):
      totalCount += countAccesses(randomArray, int(random.randrange(0, 1000)))
  averageCount = totalCount//3
  print(pow(2,i), averageCount)

```

The above code returns the following data:

![Data S.2](https://i.ibb.co/FmBZVKD/chart-3.png)

> **Figure S.2**

---

## **Exercises**

> 1. Why do we use decision trees to model binary search?

> 2. Define a root-to-leaf path.

> 3. Define a node.

> 4. Why does a decision tree’s height matter in determining worst case run time?

---

## **Sources**

> **Introduction to Algorithms, 3rd edition** https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture9.pdf

> **Supplemental Video 1** https://www.loom.com/share/1963d2d3ef914a158378dd0046955ee6

> **Supplemental Video 2** http://courses.csail.mit.edu/6.006/fall09/lecture_notes/lecture10.pdf

> **Supplemental Video 3** https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture7.pdf

> **S.2.1 Code Example** https://stackoverflow.com/questions/7604966/maximum-and-minimum-values-for-ints

> **S.2.2 Code Example** https://www.w3schools.com/python/python_classes.asp

> **S.2.3 Code Example** https://www.w3schools.com/python/python_while_loops.asp

> **S.2.4 Code Example** https://www.w3schools.com/python/python_conditions.asp

> **S.2.5 Code Example** https://stackoverflow.com/questions/6142689/initialising-an-array-of-fixed-size-in-python

> **S.2.6 Code Example**https://www.w3schools.com/python/python_for_loops.asp
