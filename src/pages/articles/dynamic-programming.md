---
title: Introduction to Dynamic Programming
description: Article introducing the motivation behind dynamic programming and memoization
layout: "@main"
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script type="module" src="https://md-block.verou.me/md-block.js"></script>

## **S.1 Motivation Behind Dynamic Programming**

The motivation behind dynamic programming lies in a single idea—why do something many times when you only need to do it once? Unlike some other algorithms, there isn’t one way to implement dynamic programming. Instead, DP is a method that can be used in a plethora of different problems to reduce runtime.

To see a simple example of dynamic programming, we turn to the problem of finding the $\text{n}^{\text{th}}$ [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number). A naive way of approaching the problem is to use recursion.

```python
def fibonacci(n):
	if n == 1:
		return 1
	else:
		return fibonacci(n - 1) + fibonacci(n - 2)
```

We see that each call to fibonacci (assuming that n does not equal 1) invokes two more calls to fibonacci, making time complexity grow exponentially. For large n, this is not ideal. What if, instead of using recursion, we used a bottom-up DP approach.

```python
def fibonacci(n):
	fib = [1, 1]
	for i in range(2, n + 1):
		fib.append(fib[i - 2] + fib[i - 1])
	return fib[n]
```

Evidently, the time complexity of this function is O(n), which is significantly better than our previous function. The idea behind the bottom-up approach is to solve subproblems, remember their solutions, and then use those solutions to solve the main problem.

Essentially, DP makes use of a time-memory trade off, where additional memory is used to lessen the time needed. DP is also most commonly used for problems involving some recursive element; in most other scenarios, DP is unnecessary.

---

## **S.2 Recursive Top-Down Approach with Memoization**

Similar to the bottom-up approach, the top-down approach with memoization tackles subproblems in order to solve the main problem. However, notice that our Fibonacci function starts at the beginning of the sequence and builds up toward the nth number. With a top-down approach, recursion is preserved, but subproblems that have already been solved are saved in a process called memoization.

To see this in action, we’ll use top down with memoization in an example. Let’s say we work at a rod manufacturing company. Different lengths of rods sell for different prices—for example, a one-inch rod may cost $2 and a five-inch rod may be $15. Our job is to determine the most profitable way to chop an n-inch rod into integral sub-rods.

Our first line of offense would probably be to implement a recursive algorithm.

```python
def get_max(p, n):
    if n <= 0:
        return 0
    max_val = float('-inf')
    for i in range(n):
        max_val = max(max_val, p[i] + get_max(p, n - 1 - i))
    return max_val


prices = [1, 1, 5, 2, 10, 15, 45, 32]
print(get_max(prices, 5))
```

What this algorithm does is “break” each rod into two sections, one with length x and the other with length n - x. It then recursively runs on the n - x section and finds the maximum price for it. The inefficiency with this approach is that the maximum price for certain lengths are calculated many times.

For instance, a rod with length 10 will be split into 6 and 4 at some point. The price of a six inch rod is added to the maximum price of a four inch rod. At another point in the algorithm, the rod may be split into 5 and 5. Similarly, the price of a five inch rod will be added to the maximum price of a five inch rod. In finding the maximum price of a five inch rod, we would find the maximum value of p[i] + get_max(p, n - 1 - i) for i in [0, 1,…, n-1]. This means that in the process of finding the maximum price of a rod with length five, we would have to calculate the price of a rod with length four. If we have already found the maximum price for a rod with length four, why should we find it again?

This is where memoization comes into play. Memoization is a tactic that allows us to save certain values and use them if they are needed later in the recursion. In the rod example, we would save the maximum prices for sub-rods of various lengths, and when they are used to calculate the maximum lengths of longer rods, we can simply retrieve them via array access.

```python
def get_max_with_memoization(p, n):
    r = [float('-inf')] * n
    return get_max_wm_aux(p, n, r)


def get_max_wm_aux(p, n, r):
    if r[n - 1] >= 0:
        return r[n - 1]
    if n <= 0:
        return 0
    max_val = float('-inf')
    for i in range(n):
        max_val = max(max_val, p[i] + get_max(p, n - 1 - i))
    return max_val
```

---

## **Exercises**

> S.1.1 What is the time complexity for the original recursion? What about the one using DP? Why is the DP one preferable, still?

<details>
    <md-block>
    Both grow exponentially in the worst case, but every case for the original recursion is worse case and the DP approach has better coefficients.
    </md-block>
<summary>Answer</summary>
</details>

> S.1.2 Implement a bottom-up DP algorithm that solves the rod problem.

<details>
    <md-block>
    Code may differ, compare results to memoization or recursion code.
    </md-block>
<summary>Answer</summary>
</details>
