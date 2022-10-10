# **QUICK SORT**

## **7.1: Quicksort**

Quicksort works by partitioning an array based on an arbitrary element in the array, which we will refer to as p. The array is divided into two subarrays, one which contains elements larger than p, and one which contains elements smaller than p. The operation is then repeated with each of the subarrays, with a new p for each subarray, until the array is separated into sub-arrays with a designated length, usually 1.

We can visualize this process with a tree-like structure as shown in Figure S.1.

![7.1: Chart1](https://i.ibb.co/M6kby9t/table1.png)
>**Figure S.1**

Then, each one-element subarray is placed back together. The single-digit array containing the value is placed at  the beginning, followed by the p element, and finally the array with the larger element. Note, on subarrays with a size of 1, this just creates an ordered array. With larger arrays, a recursive method is utilized, sorting subtrees from the bottom up, as seen by the diagram in figure S.2. QuickSort takes O(n2) in its worst case scenario, and in both its expected and best case QuickSort takes O(n logn). 

![7.1: Chart1](https://i.ibb.co/d491L8r/table2.png)
>**Figure S.2**

***Python***
```Python
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

## **7.3: Analysis of Quicksort**

### **Worst Case:**

In the worst-case scenario, the array of size **n** is split in a way that maximizes the uneveness. This would be when each recursive split creates one subarray of size **n-1** and the other of size 0. If **T(n)** represents the worst-case runtime of Quicksort, then **T(n)=T(n-1)+T(0)+O(n)**. Since a recursive call of an array of size 0 is constant, this becomes **T(n)=T(n-1)+O(n)**. However, in the worst-case scenario, this uneven split would occur at every recursion, resulting in **T(n)=O(n2)**. In comparison to Insertion Sort, the worst-case running times are the same. However, while Quicksort would still take **O(n^2)** time to sort an already sorted array, Insertion Sort would only take **O(n)** time.

### **Best Case:**

The best-case runtime will occur if the subarrays created are of size no greater than **n/2**. This means that one subarray would be of size **n/2** and the other would be **(n/2)-1**. This creates the runtime **T(n)=2T(n/2)+O(n)**. Since the recursion tree has a depth of **log n**, the best-case scenario has a runtime of **O(n log n)**, the same as the expected case.

### **Expected Run-time**

The expected run-time for Quicksort is **O(n log n)** with a randomized partition element. Randomized Partition creates a constant fraction of elements in each subarray so that the recursion tree has a depth of **O(log n)**. Each recursion takes **O(n)** to go through each of the elements. Even if a few of the levels are split in the most uneven way, the runtime will remain **O(n log n)**. Furthermore, even if there is a split into a subarray of length **n-2** and another of length 1, another very uneven split, the runtime is still **O(n log n)**. Uneven splits slow down the algorithm with a slightly larger constant c in the runtime which is hidden in the **O(n)** notation. Thus, the expected runtime is **O(n log n)**.

### **Quicksort vs Randomized Quicksort**

The only difference between Quicksort and Randomized Quicksort is how they determine the partitioned element. The bulk of the runtime of Quicksort is 


---

## **Exercises**

**[We whould probably get more question, but at the very least an answer for this one]**

> When would QuickSort take O(n2) time to sort
- When the array is completely random
- When the array is already in sorted order
- When the partition is always the highest or lowest value 
- When the array is too big

## **Sources**
>**General** https://www.youtube.com/watch?v=SLauY6PpjW4&ab_channel=HackerRank

>**Introduction to to algorithms, 3rd edition:** https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture9.pdf











