---
title: Heapsort
description: heapsort
layout: "@main"
---

## **S.1 Binary Trees**

The foundations of heapsort lie in a rooted binary tree. As a refresher, a rooted binary tree has a singular, topmost node and two “children” nodes stemming from each “parent” node. Each node represents one element of the array. Even though we visualize this data structure differently than we do an array, they are easily translated into the other. The indices correspond to locations in the heap as shown below, with the first element in the array being the topmost node and indices increasing left-to-right in each level from top-to-bottom.

![Binary Tree](https://i.ibb.co/xCp7dFc/Chart-1-Heapsort.png)

> **Figure S.1** Any node without “children”, or nodes directly below it, is known as a `leaf`. The height of the node in the tree is the number of edges between that node and a `leaf`. For example, in the visualization above, the height of the node holding $17$ is zero, while the height of the node holding $3$ is two. The height of a tree is defined as the distance between the root and any `leaf`.

## **6.2 Maintaining the Heap Property**

Heaps, essentially, are like a “sorted” binary tree. There are two types of heaps: min-heaps and max-heaps. For the heapsort algorithm, a max-heap is used. In a max-heap, the maximum value resides at the root, and each child node’s value is less than its parent node’s.

An essential element of heapsort is maintaining the condition that the heap stays ordered—in other words, that it remains a max-heap. To do this, we invoke a function called “heapify”. For each node $A[i]$, heapify identifies its children, $A[left(i)]$ and $A[right(i)]$. The largest of these 3 is determined. If $A[i]$ is largest, the subtree is already a max heap and the algorithm moves on, but if one of the children is the largest, it is swapped with the parent node. Then, the sub-tree rooted at that position is also re-heapified. After calling this function recursively for all subtrees, our heap becomes a max-heap.

###java

```java
public static void heapify(int arr[], int n, int i){
        int left = 2*i;
        int right = 2*i + 1;
        int max = i;
        //Determining the largest element in the branch
        if (left <= n && arr[left] > arr[i]) {
            max = left;}
	  if (right <= n && arr[right] > arr[max]) {
            max = right;}
		//Moving the largest element to the parent node
        if (max != i){
            swap(arr, i, max);
            heapify(arr, n, max);
        }
    }
```

---

## **S.3 Building a Heap**

This algorithm can be used to transform an array into a heap. To do this, we start at the non-leaf node with the greatest index. We can mathematically show that this node has index floor(A.length / 2) - 1. We ensure that the sub-tree with this node as a root is a max-heap using the heapify algorithm. After this, the index is decreased and the process repeats for each node.
###java

```java
int n=arr.length-1;
    	//Building the heap by constructing each branch
    	for (int i = n/2; i >= 0; i--) {
            heapify(arr, n, i);   }
```

![Heapify](https://i.ibb.co/g7YcxyG/Heapify-Chart-2-Heap-Sort.png)

> Figure 6.2

---

## **S.4 The Heapsort Algorithm**

Once the heap is constructed, the heapsort algorithm begins. The root of the heap is exchanged with the last element in the heap, and the size of the heap is reduced by one. This essentially removes sorted elements from the heap, splitting the array into sorted and unsorted sections. The heapifying procedure is repeated with all the elements that remain in the heap, the root is swapped with the last element in the heap, and this process continues until the heap has size 0. Heapsort has a number of advantages over other algorithms. First, it sorts in place, meaning it doesn’t require more memory to be allocated. Second, although it is, on average, slower than other algorithms like quicksort, its worst-case runtime is faster because it has a time complexity of O(n log(n)).
###java

```java
int n=arr.length-1;
        for (int i = n; i > 0; i--){
            swap(arr,0, i);
            n--;
            heapify(arr, n, 0);
        }
```

---

## **Exercises**

> S.1.1 - What is the maximum height of a node in a heap with n elements, in terms of ?

**Answer:** floor(log2(n))

> S.1.2 - What are the minimum and maximum numbers of elements in a heap with height _n_?

**Answer:** min 2n max 2n+1 - 1

> S.1.3 - What are the indices of the children of a node with index $n$?
> Answer: 2n, 2n+1

> S.3.1 - Draw the process of heapifying the array [15, 31, 2, 29, 12, 10, 14, 3]

> S.3. 2 - For an array with 5 elements, what is the maximum number of nodes visited while building a max-heap? How must the array be sorted to cause the worst case scenario?
> Answer: 5 nodes = 3, the array should be increasing

> S.4.1 - Show that the time complexity of heapsort is O(n log(n))

**Answer:** We can divide the heapify to two tasks: “visiting” indexes floor(1/2n) - 1, floor(1/2n) - 2, …, 0 and all the recursion that goes on during each visit. The first part has time complexity O(n) (we ignore constants and coefficients) and the second has time complexity O(log n). Putting the two together, we find that the time complexity for heapsort is O(n log n).

---

## **Additional Resources**

Visualization of Heapsort:

> https://www.cs.usfca.edu/~galles/visualization/HeapSort.html

Runnable Heapsort Example:
###java

```java
public class heapsort {
    public static void sort(int arr[]){
    	int n=arr.length-1;
    	//Building the heap by constructing each branch
    	for (int i = n/2; i >= 0; i--) {
            heapify(arr, n, i);   }
    	//Iterating through each element, removing the root and rebuilding the heap
        for (int i = n; i > 0; i--){
            swap(arr,0, i);
            n--;
            heapify(arr, n, 0);
        }
    }
    public static void heapify(int arr[], int n, int i){
        int left = 2*i;
        int right = 2*i + 1;
        int max = i;
        //Determining the largest element in the branch
        if (left <= n && arr[left] > arr[i]) {
            max = left;}
	  if (right <= n && arr[right] > arr[max]) {
            max = right;}
		//Moving the largest element to the parent node
        if (max != i){
            swap(arr, i, max);
            heapify(arr, n, max);
        }
    }
    public static void swap(int arr[], int a, int b){
        int temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    public static void main(String[] args) {
        int arr[] = {1, 8, 9, 5, 4, 3, 6};
        sort(arr);
        boolean sorted=true;
        for (int i = 0; i < 6; i++)
            if (arr[i]>arr[i+1]) {
            	sorted=false;
            }
        if(sorted) {
        	System.out.println("Successful Sort!");
           System.out.println("Array after sort:");
        	 for (int i = 0; i < arr.length; i++)
                 System.out.print(arr[i]+" ");
        }
        else {
        	System.out.println("Error");
        	System.out.println("Array after attempted sort:");
        	 for (int i = 0; i < arr.length; i++)
                 System.out.print(arr[i]+" ");
        }

    }

}
```

###python

```python
def sort(arr):
    n = len(arr)
    for i in reversed(range(int(n/2))):
        heapify(arr, n, i)

    for i in reversed(range(n)):
        swap(arr, 0, i)
        n -= 1
        heapify(arr, n, 0)


def heapify(arr, n, i):
    left = i * 2 + 1
    right = i * 2 + 2
    max = i
    if (left < n) and (arr[left] > arr[i]):
        max = left
    if (right < n) and (arr[right] > arr[max]):
        max = right
    if max != i:
        swap(arr, i, max)
        heapify(arr, n, max)


def swap(arr, a, b):
    temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp

array = [1, 8, 9, 5, 4, 3, 6]
sort(array)
sorted = True

for i in range(6):
    if array[i] > array[i + 1]:
        sorted = False;

if sorted:
    print("Successful Sort!")
    for i in range(len(array)):
        print(str(array[i]) + " ")
else:
    print("Error")
    print("Array after attempted sort: ")
    for i in range(len(array)):
        print(str(array[i]) + " ")

```

##Sources

> https://www.cs.usfca.edu/~galles/visualization/HeapSort.html

> https://www.geeksforgeeks.org/heap-sort/

> https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxhbGdvcml0aG1zaWNzMzUzfGd4OjI3ZjYxZjM3MmI1NGNhNmU
