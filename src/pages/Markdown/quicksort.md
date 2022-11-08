---
title: Quicksort
description: An article explaining quicksort and implementations of it in java and python.
layout: "@main"
---

Quicksort works by partitioning an array based on an arbitrary element in the array, which we will refer to as $p$. The array is divided into two subarrays, one which contains elements larger than $p$, and one which contains elements smaller than $p$. The operation is then repeated with each of the subarrays, with a new $p$ for each subarray, until the array is separated into sub-arrays with a designated length, usually 1.

We can visualize this process with a tree-like structure as shown below in Figure S.1.

![7.1: Chart1](https://i.ibb.co/M6kby9t/table1.png)

> **Figure S.1**

Then, each one-element subarray is placed back together. The single-digit array containing the value is placed at the beginning, followed by the $p$ element, and finally the array with the larger element. Note, on subarrays with a size of 1, this just creates an ordered array. With larger arrays, a recursive method is utilized, sorting subtrees from the bottom up, as seen by the diagram in figure S.2. QuickSort takes $O(n^2)$ in its worst case scenario, and in both its expected and best case QuickSort takes $O(n \log{n})$.

![7.1: Chart1](https://i.ibb.co/d491L8r/table2.png)

> **Figure S.2**

### python

```python
def QuickSort(sub):
    if len(sub) == 1:
        return [sub[0]]
    else:
        p_index = rd.randrange(0, len(sub), 1) // choose a random p
        p = sub[p_index]
        less = []
        more = []
        sort = [p]
        for i in range(len(sub)): // populate arrays with elements
            if i != p_index:
                if sub[i] < p:
                    less.append(sub[i])
                elif sub[i] > p:
                    more.append(sub[i])
                elif (sub[i] == p):
                    sort.append(p)
        if len(more) > 0: // recursion on sub-arrays
            sub1 = QuickSort(more)
            sort += (sub1)
        if len(less) > 0:
            sub2 = QuickSort(less)
            sort = sub2 + sort
        return sort
```

---

## Analysis of Quicksort

### Worst Case

In the worst-case scenario, the array of size $n$ is split in a way that maximizes the uneveness. This would be when each recursive split creates one subarray of size $n-1$ and the other of size $0$. If $T(n)$ represents the worst-case runtime of Quicksort, then $T(n)=T(n-1)+T(0)+O(n)$. Since a recursive call of an array of size $0$ is constant, this becomes $T(n)=T(n-1)+O(n)$. However, in the worst-case scenario, this uneven split would occur at every recursion, resulting in $T(n)=O(n^2)$. In comparison to Insertion Sort, the worst-case running times are the same. However, while Quicksort would still take $O(n^2)$ time to sort an already sorted array, Insertion Sort would only take $O(n)$ time.

### Best Case

The best-case runtime will occur if the subarrays created are of size no greater than $\frac{n}{2}$. This means that one subarray would be of size $\frac{n}{2}$ and the other would be $\frac{n}{2} - 1$. So, the runtime is $T(n)=2T(\frac{n}{2})+O(n)$. Since the recursion tree has a depth of $\log{n}$, the best-case scenario has a runtime of $O(n \log{n})$, the same as the expected case.

### Expected Runtime

The expected run-time for Quicksort is $O(n \log{n})$ with a randomized partition element. Randomized Partition creates a constant fraction of elements in each subarray so that the recursion tree has a depth of $\log{n}$. Each recursion takes $O(n)$ to go through each of the elements. Even if a few of the levels are split in the most uneven way, the runtime will remain $O(n \log{n})$. Furthermore, even if there is a split into a subarray of length $n-2$ and another of length $1$, another very uneven split, the runtime is still $O(n \log{n})$. Uneven splits slow down the algorithm with a slightly larger constant $c$ in the runtime which is hidden in the $O(n)$ notation. Thus, the expected runtime is $O(n \log{n})$.

### Quicksort and Randomized Quicksort

The only difference between Quicksort and Randomized Quicksort is how they determine the partitioned element. The bulk of the runtime of Quicksort is

---

## Exercises

**[We would probably get more question, but at the very least an answer for this one]**

> When would QuickSort take $O(n^2)$ time to sort?

- When the array is completely random
- When the array is already in sorted order
- When the partition is always the highest or lowest value
- When the array is too big

## Sources

> **General:** https://www.youtube.com/watch?v=SLauY6PpjW4&ab_channel=HackerRank

> **Introduction to Algorithms, 3rd edition:** https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture9.pdf
