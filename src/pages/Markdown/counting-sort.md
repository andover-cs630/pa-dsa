---
title: Counting Sort
description: counting sort
layout: "@main"
---

## **S.1: Sorting in Linear Time**

There are many existing algorithms which sort collections of things, usually in the forms of arrays, trees, heaps, etc into a prefixed order (usually increasing or decreasing).

The most time efficient sorting algorithms known to mankind operate in $O(nlog(n))$ time.

However, if there are size/range restrictions on the elements to be sorted, then there exist sorting algorithms that operate in linear $O(n)$ time.

## **S.2: Counting Sort**

Counting sort assumes all elements are integers in a range, $[0, k-1]$ for a finite $k$. In short, the main characteristic of counting sort is that it uses an array with size $k$ to store the repetition counts of every element in the range.

### Algorithm

1. Create an array $A$ with size $k$, where $A[i]$ stores the number of times $i$ appears in the original array. We can do this by initializing $A$ to all $0$, and then as we read through the original array $O[i]$, we increment $A[O[i]]$ by 1.
2. At this point, $A$ is a frequency count array across all $k$ elements in range. Next, we update $A$ as follows - we want $A[i]$ to be the sum of all $A[j]$ where $j < i$ in the previous iteration of $A$. This way, the new updated $A$ is organized so that $A[i]$ contains one more than the number of elements to come before it $i$ is to be in the array at all.
3. Here comes the step where we actually create the sorted array. Initialize an empty array $S$ with the same size as original $O$.
4. We iterate the following step as we loop through $O$: If $O[i]$ is currently the element in question, then we set $S[A[O[i]]]$ to be $O[i]$ (this is equivalent to inserting $O[i]$ into the $A[O[i]]$th position in the new array $S$). Then, we update $A$ by decrementing $A[O[i]]$ by 1 so in case a future $O[\ell] = O[i].$)
5. By the end of this process, $S$ is a sorted version of $O$.

### Example

Original Array $O$:

![Array 0, original](https://i.ibb.co/KwZKyPS/CSort1.png)

Determine in $O(n)$ that the maximal element of the array is 8, so we restrict the range from 0 to 8. Then create array $A$ and fill in frequencies:

![Array A, original](https://i.ibb.co/k88kmY3/CSort2.png)

Create Array $S$:

![New Array S](https://i.ibb.co/NFtwZNz/CSort10.png)

Fill in the first element, 4, into the right position, 2. Then, update 4 count.

![Array S and A, update 1](https://i.ibb.co/qJCD09J/CSort3.png)

Fill in the second element, 2, into the right position, 3. Then, update 2 count.

![Array S and A, update 2](https://i.ibb.co/Fs2HGSy/CSort4.png)

Fill in the third element, 1, into the right position, 1. Then, update 1 count.

![Array S and A, update 3](https://i.ibb.co/5WWm4Tr/CSort5.png)

Fill in the fourth element, 8, into the right position, 8. Then, update 8 count.

![Array S and A, update 4](https://i.ibb.co/C9gyRCW/CSort6.png)

Fill in the fifth element, 2, into the right position, 2. Then, update 2 count.

![Array S and A, update 5](https://i.ibb.co/3yYfZnG/CSort7.png)

Fill in the sixth element, 5, into the right position, 6. Then, update 5 count.

![Array S and A, update 6](https://i.ibb.co/84SD5yt/CSort8.png)

Fill in the seventh element, 7, into the right position, 7. Then, update 7 count.

![Array S and A, update 7](https://i.ibb.co/FVwwn39/CSort9.png)

Fill in the seventh element, 4, into the right position, 4. Then, update 4 count.

![Array S and A, update 8](https://i.ibb.co/D49T2qD/CSort10.png)

And now $S$ is sorted!

Step 1 takes $O(n)$, Step 2 takes $O(k)$, Step 3 takes $O(n)$, Step 4 takes $O(n)$, so the overall runtime is $O(n)$ since $O(k)$ is constant.

No matter what the initial array $O$ is, the same steps are performed, so the runtime is always $O(n)$, best, worst, and average.

### Exercise

**Question**: In a stable sorting algorithm, when there are multiple instances of the same element, they will appear in the output array in the same order as they appeared in the input array. Is Counting Sort stable? Why or Why not?
**Answer**: Yes, as the algorithm moves left to right, so it places instances of the same element that occur later in the array after previous instances.

### Code Example: java

```java
class CountingSort {
  void countSort(int array[], int size) {
    int[] output = new int[size + 1];

    // Determine range from maximal element in array
    int max = array[0];
    for (int i = 1; i < size; i++) {
      if (array[i] > max)
        max = array[i];
    }
    int[] count = new int[max + 1];

    // Initialize frequency count array with all zeros.
    for (int i = 0; i < max; ++i) {
      count[i] = 0;
    }

    // Store the the frequency of each element
    for (int i = 0; i < size; i++) {
      count[array[i]]++;
    }

    // Store the cummulative frequency count of every element
    for (int i = 1; i <= max; i++) {
      count[i] += count[i - 1];
    }

    // Find the index of each element of the original array in count array, and
    // place the elements in output array
    for (int i = size - 1; i >= 0; i--) {
      output[count[array[i]] - 1] = array[i];
      count[array[i]]--;
    }

    // Copy the sorted elements into original array
    for (int i = 0; i < size; i++) {
      array[i] = output[i];
    }
  }

  // Driver code
  public static void main(String args[]) {
    int[] data = { 4, 2, 1, 8, 2, 5, 4 };
    int size = data.length;
    CountingSort cs = new CountingSort();
    cs.countSort(data, size);
    System.out.println("Sorted Array in Ascending Order: ");
    System.out.println(Arrays.toString(data));
  }
}
```
