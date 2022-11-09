---
title: Prerequisites
description: Prerequisites page
layout: "@main"
---

## **Prerequisites**
### Algorithms:
#### Bubble Sort:
The bubble sort is known as the ‘classic’ method of sorting when it comes to arrays. It is often the first method of sorting that is introduced because of its ease to understand conceptually. When you imagine sorting an array, you might imagine putting the largest element at the end, smallest element at the front, or comparing the element to the one next to it to see which belongs at which end (greater or smaller). The latter method is the same idea behind the bubble sort.

Let’s look at the example of what the Bubble Sort does below. Note that the example below briefly addresses the first few steps involved in the Bubble Sort.

![Bubble Sort Graphic 1](https://i.postimg.cc/4NvGNL2y/Prereq-1.png)

We start with an unordered array. Then, we look to the first index (index 0) which has an element of 20 in this case. Then, we’ll compare the element next to it which is 18. Since 20 is greater than 18, we’ll swap 20 and 18. Then, the algorithm looks to the next index. Since we just swapped 20 and 18, now 20 is in 18’s old position (index 1). We then compare this to the element next to it which is 14. Since 20 is greater than 14, we’ll swap 20 and 14. This happens so on and so forth. At the end of this first iteration, the greatest element will be at the end of the array.

Let’s look into this with a smaller array.

![Bubble Sort Graphic 2, Part 1](https://i.postimg.cc/QtpD9fNf/Screen-Shot-2022-11-04-at-9-02-54-AM.png)

![Bubble Sort Graphic 2, Part 2](https://i.postimg.cc/rp4KV6bb/Prereq-3.png)

![Bubble Sort Graphic 2, Part 3](https://i.postimg.cc/Sx3nbQZC/Prereq-4.png)

Here, you see the full bubble sort. For each iteration, we look at the element at the front (index 0) and compare it to the element next to it until we approach the area of the array that is already sorted. Notice that after the first iteration, the greatest element is at the end of the array, and after the second iteration, the two greatest elements are at the end in sorted order. Once we reach that point of the array, no more comparisons should be made (for efficiency, since that area is already sorted). Then, we can stop the iteration, return to the front of the array, and do it over again.

To demonstrate how this sort algorithm looks in Java, the bubbleSort method is below:


```java
    public static void bubbleSort(int[] list)
    {
        for(int i = 1; i < list.length; i++)
        {
            for(int p = 0; p < list.length - i; p++)
            {
                if(list[p] > list[p+1])
                {
                    int y = list[p];
                    list[p] = list[p+1];
                    list[p+1] = y;
                }
            }
        }
    }
```

To start, we define an int $i$ with initial value $1$. This counts the number of passes that we will do in the array. Then, we define an int $p$ with initial value $0$. Like $i$, this is the index of the other element in the array that is being compared. Remember, in bubble sort, we are comparing two elements and swapping them subsequently through the array as shown in the illustration above.

Then, we check if $p$ is greater than the element in front of it. If it is, we swap them. We continue in this inner for-loop until we compare the entire list and the greatest element is at the end.

Then, our outer for-loop value of $i$ will increment, and we will do the comparisons again starting at the front of the array. A really cool part of this code is that you’ll notice the inner loop states $p < list.length - i$, which means our inner-loop does not have to traverse the full array - rather, it can stop at a certain point before it reaches the end on each subsequent pass. Why might that be? (if you want a challenge, try to answer this before you move on to the next paragraph)

Recall that the end of our list is sorted because at the end of the first pass, the greatest value is at the end of the array. The same applies for each pass after that. The next greatest element will be at the end of the array. This means we can stop each subsequent pass once we get to the part of the array that is already sorted, hence the $p < list.length - i$ rather than $p < list.length$.

***Exercise***: Use the bubble sort idea above to sort an array: $[5, 10, 2, 9, 7]$. Go through each pass and determine the final sorted array. What do you notice? Do you notice any alternative ways to sort this data?

*Solution*: Trace the code and you’ll notice a similar drawing/trace to the one above. You’ll likely have to go through 4 passes using the traditional bubble sort method. The next part of the question asks if you notice alternative ways to sort the data, and you probably thought of many. As you’ll see further on, there are many different algorithms to sort an array. There’s insertion sort (next section), selection sort, merge sort, quick sore, etc. Many of these algorithms vary in time-complexity, which you’ll read more on later in this section. For now, think of all the possibilities with different sorting algorithms.
