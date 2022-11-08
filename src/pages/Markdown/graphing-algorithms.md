---
title: "Graphing"
description: "Comprehensive overview of Graphing Algorithms and Graphing Structures"
layout: "@main"
---

## S.2 - Elementary Algorithms

Now that we have an idea of what graphs are and how to represent them, we can get into a few graph algorithms.

### S.2.1 - Depth First Search

Imagine that you’re trying to find some treasure at the center of a maze. One way to do this is to arbitrarily choose directions to walk in, back up to your last choice if you hit a dead end, and then choose another direction to walk in. This is the premise behind depth first search.

Graphically, the “start” of the maze would be analogous to some “start” node, and instead of finding “target” node, the algorithm merely seeks to explore every node.

![Figure S.2.1.1](https://i.ibb.co/Vj7V86X/chart1.png)

> **Figure S.2.1.1**

In this example, let the “start” node be 9. Depth first search would first arbitrarily choose a child node, say 89. Then, it goes and visits nodes 23, 7, and 15, completing the search of that subtree. It then backtracks to node 9 and checks out the child node, 64.

```py
def dfs(current, graph):
    frontier = [ele for ele in graph[current]]
    print(current)
    for child in frontier:
        dfs(child, graph)


graph1 = {
    "9": ["64", "89"],
    "89": ["23", "7", “15”],
    "64": [],
    "23": [],
    "7": [],
    "15": []
}

dfs("9", graph1)
```

---

### S.2.2 - Breadth First Search

Like its counterpart DFS, breadth first search also seeks to explore every node of a graph. However, the way BFS goes about things is different in that it “prioritizes” breadth over depth.

Referencing **Figure S.2.1.1**, BFS would start at some “start” node, presumably 9 as this graph is oriented. It would then choose one of its child nodes, say 89. Then, instead of looking at that node’s children, BFS would backtrack and explore 9. Only after then does BFS look at 23, 7, and 15.

Because the BFS frontier operates in a FIFO (first in first out) way, it is clearer to implement BFS using a non-recursive approach.

```py
def bfs(current, graph):
    print(current)
    frontier = [ele for ele in graph[current]]
    explored = []
    explored.append(current)

    while len(frontier) != 0:
        child = frontier.pop(0)
        print(child)

        for gchild in graph[child]:
            if gchild not in explored:
                frontier.append(gchild)
                explored.append(gchild)



graph1 = {
    "9": ["64", "89"],
    "89": ["23", "7", "15"],
    "64": [],
    "23": [],
    "7": [],
    "15": []
}

bfs("9", graph1)
```

### S.2.3 - Topological Sort

### S.2.4 - Strongly Connected

---

## S.3 - Minimum Spanning Tree

### S.3.1 - Kruskal’s Algorithm

> https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/

> https://cp-algorithms.com/graph/mst_kruskal.html

> https://usaco.guide/gold/mst

> https://www.youtube.com/watch?v=JZBQLXgSGfs

### S.3.2 - Prim’s Algorithm

> https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/

> https://cp-algorithms.com/graph/mst_prim.html

> https://usaco.guide/gold/mst

> https://www.youtube.com/watch?v=jsmMtJpPnhU

---

## S.4 - Shortest Paths

### S.4.1 - Breadth First Search

![Figure S.4.1.1](https://i.ibb.co/hsFkG3N/chart2.png)

> **Figure S.4.1.1**

Suppose we are looking for the shortest path between nodes 0 and 5 in the above graph:

1. We start at node 0. Obviously, the shortest path from 0 to 0 is of length 0.

2. Next, we move through its outgoing edges to nodes 1 and 2. At this point, we know that the shortest path from 0 to 1 and 0 to 2 is of length 1, since there would have been no other way for 0 to get to those nodes faster.
3. Next, we move through 1 and 2’s outgoing edges to 2, 3, and 4. We’ve already visited 2, which means that particular path is late and not optimal. We haven’t been to nodes 3 and 4, however, so those shortest paths are length 2.
4. Finally, we move through 3 and 4’s outgoing edges to node 5. The shortest path between nodes 0 and 5 is therefore clearly 3.

This process, of constantly expanding unless you’ve been there before, might seem familiar. That’s because its the equivalent of BFS.

**More clearly, we can use BFS to find the shortest path on unweighted graphs.** The graphs must be unweighted because we rely on the assumption that once we visit a node, the path we used is the shortest possible. This allows us to continually traverse the graph in $O(N)$ time, instead of having to backtrack and consider other paths. This key assumption cannot be guaranteed when edge weights are not one, as illustrated by the below diagram.

![Figure S.4.1.2](https://i.ibb.co/Hp4tFqB/chart3.png)

> **Figure S.4.1.2**

Here, we use the same graph as above, except with edge weights. Evidently, the previous shortest path we found between 0 and 2 (the edge between 0 and 2) is trumped by a new path (the edge between 0 and 1 + the one between 1 and 2). However, we will explore modifications of BFS which enable this assumption on weighted graphs, with some caveats.

Another important node is that we cannot do this with DFS. That is because the assumption mentioned above, knowing that if we’ve visited a node we’ve already found its shortest path, is not true when traversing a graph with DFS.

### S.4.2 - Bellman-Ford

Given a weighted, directed graph, we may want to find the shortest path from a designated “start” node to each node in a graph. Given that there are no negative cycles within the graph, the Bellman-Ford algorithm gives us an approach to find such shortest paths.

To illustrate how Bellman-Ford works, **figure S.4.2.1** will be referenced. The algorithm iterates through the graph V - 1 times (V being the number of edges). The first time through, it begins at a designated start node, which in our case is node A. It then looks at the nodes that can be accessed by node A and records the distances. In this example, node B would have distance 10 and node E would have distance 12 (node A always has distance 0). Then, the algorithm would move onto node B, which has cost 10. Looking at its adjacent nodes, we see that the only one is node C. The distance of node C would equate to the cost of node B added to the distance between B and C, or 6. For the next V - 2 iterations, the same process is repeated.

![Figure S.4.2.1](https://i.ibb.co/GcNFr9D/chart5.png)

> **Figure S.4.2.1**

To see how this works, we must first understand a few key ideas. Let the shortest path from source node s to node v be denoted by $δ(s, v)$. This value is unchanging as there exists only one shortest path, assuming no negative cycles are exist. As we try to find $δ(s, v)$, we “relax” edges—which is essentially comparing a node’s cost to the sum of its parent’s cost and the cost between the parent and itself. If the sum is less than the cost of the node, the original cost is replaced by the sum.

Additionally, we can show how iterating V - 1 times gives us the shortest path, if it exists. If we let shortest path p be $<s, v_1,...,v_k>$, it follows that each subpath contained in p is also a shortest path between two nodes. Then, by relaxing each subpath $(s, v_1), (v_1, v_2), …, (v_{k-1}, v_k)$, we in effect create a shortest path between $s$ and $v_k$. As cycles cannot be negatively weighted, the maximum number of iterations needed to find the shortest path is V - 1.

```py
def bellmanford(graph, weights, start):
    distance = {}
    for vertex in graph:
        distance[vertex] = float('inf')
    distance[start] = 0

    for i in range(len(graph) - 1):
        for vertex in graph:
            for edge in weights:
                if edge[-1] == vertex and vertex != start:
                    print("vertex: " + vertex + " current distance: " + str(distance[vertex]))
                    print("edge: " + edge + " weight: " + str(weights[edge]))
                    if distance[edge[0]] != float('inf'):
                        temp = distance[edge[0]] + weights[edge]
                        print('temp: ' + str(temp))
                        if temp < distance[vertex]:
                            distance[vertex] = temp

    return distance


g = {
    "A": ["B", "E"],
    "B": ["C"],
    "C": ["D", "F"],
    "D": ["E"],
    "E": ["F", "A"],
    "F": ["A"]
}

w = {
    "AB": 10,
    "AE": 12,
    "BC": -4,
    "CD": 3,
    "CF": 9,
    "DE": 7,
    "EF": -7,
    "EA": 12,
    "FA": -2
}

print(bellmanford(g, w, "A"))
```

### S.4.3 - Dijkstra’s Algorithm

For graphs with nonnegative weights, we can use Dijkstra’s Algorithm, which has a better time complexity than Bellman Ford. Recall BFS or DFS where a collection of “explored” nodes was kept. A similar concept is employed in Dijkstra: $V$, the set of all nodes, is comprised of subsets $Q$ and $S$. Subset $S$ is just a collection of explored nodes while node $Q$ is a min-priority queue, ordered by distance from the start node.

Dijkstra starts by looking at the start node and taking note of the distances of its adjacent nodes. As a result, the start node is added to $S$ and its adjacent nodes are added to $Q$, sorted increasingly. As this is the first iteration, relaxing the path doesn’t really change anything. The node with the shortest distance from the start node is then taken into consideration. It is first added to $S$ while the distance between it and its adjacent nodes is relaxed. The process continues, referring to the top of $Q$ for the next node to be looked at.

![Exercise S.4.3.1](https://i.ibb.co/jkYP105/chart-6.png)

> **Figure S.4.3.1**

To prove Dijkstra’s correctness, we simply need to show that when a node removed from $Q$, its distance is equal to the shortest possible one. We will use strong induction and proof by contradiction. Looking at the start node and the nodes immediately adjacent to it serve as good base cases. Because Dijkstra doesn’t allow for negatively weighted paths, these nodes already have the shortest possible distances when they are removed from $Q$.

![Exercise S.4.3.2](https://i.ibb.co/n0DPWsT/chart7.png)

> **Figure S.4.3.2**

For all the nodes in the shaded portion of **Figure S.4.3.2**, the distance calculated by Dijkstra is the same as the shortest possible path. Lets say that nodes $u$ and $y$ reside in $Q$ and have yet to move to $S$. Additionally, $y$ is the first node not in $S$ that comes from node $x$, with the added condition that it resides on a path to $u$. We claim that when node $u$ is added to $S$, it will be the first node in the collection whose minimum distance is less than the one calculated by Dijkstra.

Now, let’s focus on a point in time when $u$ is at the top of $Q$ and has a distance, $d(s, u)$, such that $d(s, u) < δ(s, u)$. Because there is only one single-path route from $x$ to $y$, and because $x$’s stored distance is equal to $δ(s, x)$, it follows that $δ(s, x) + l(x, y)$ (where $l(x, y)$ represents the length of the single-path route) is equal to $δ(s, y)$. Also, because negative path weights are not allowed, we know that $δ(s, y) ≤  δ(s, u)$. But also, from our assumption that $u$ is at the top of $Q$, we know that $δ(s, y) ≥ δ(s, u)$. Combining these two inequalities, we get $δ(s, y) = δ(s, u)$ which is inconsistent with the way we defined $u$ and $y$.

```py
from queue import PriorityQueue


def dijkstra(graph, weights, start):
    distances = {}
    q = PriorityQueue()
    q.put((0, start))
    for vertex in graph:
        distances[vertex] = float('inf')
        q.put((float('inf'), vertex))
    distances[start] = 0

    s = []

    while not q.empty():
        (distance, vertex) = q.get()
        s.append(vertex)

        for edge in weights:
            if edge[-1] == str(vertex) and str(vertex) != start:
                print("vertex: " + str(vertex) + " current distance: " + str(distances[vertex]))
                print("edge: " + edge + " weight: " + str(weights[edge]))
                if distances[edge[0]] != float('inf'):
                    temp = distances[edge[0]] + weights[edge]
                    print('temp: ' + str(temp))
                    if temp < distances[vertex]:
                        distances[vertex] = temp
                        q.put((temp, edge[0]))

    return distances


g = {
    "A": ["B", "E"],
    "B": ["C"],
    "C": ["D", "F"],
    "D": ["E"],
    "E": ["F", "A"],
    "F": ["A"]
}

w = {
    "AB": 10,
    "AE": 12,
    "BC": 4,
    "CD": 3,
    "CF": 9,
    "DE": 7,
    "EF": 1,
    "EA": 12,
    "FA": 3
}

print(dijkstra(g, w, "A"))
```

### S.4.4 - Floyd-Warshall

Both Bellman-Ford and Dijkstra’s Algorithm found shortest paths from a specific “start” node to other nodes. But what if we wanted to find the shortest path between any two nodes, neither being specified as a “start” node? This idea is important to many real-life applications. For example, two different people finding directions using a map system may begin at different start nodes.

![Image S.4.4.1](https://i.ibb.co/GcNFr9D/chart5.png)

To do this, Floyd-Warshall employs a similar method of iterating through possible paths and updating the calculated path length if a shorter one is found. Starting at node A, it records 10 as the shortest distance from A to B. Then, when it goes to node B, it records -4 as the shortest distance from B to C. After this “preliminary” iteration, Floyd-Warshall tries to find shortcuts. Again, it may try to find the shortest path from A to B, but instead of going directly, it may try to find the length of the path from A to C to B and if that path is shorter, it will replace the stored value. Iterating through all of these subpaths with a triple-nested for loop, Floyd-Warshall completes with runtime $O(n3)$.

---

## Exercises

> **S.2.1.1** Propose a scenario that would not allow DFS to explore every node.

- Consider the case where a branch extends forever, or at least one whose dimensions exceed system capabilities.

> **S.4.1.1** Draw a new graph to demonstrate that DFS cannot find the shortest path on unweighted graphs. Explain why.

- ![Exercise S.4.1.1](https://i.ibb.co/xX4WqKQ/chart4.png)
- DFS has no rules for which neighbors to visit first. In the above graph, this means that we might travel through 0 to 1, 2, and then 3, establishing this as our shortest path, without considering the path from 0 to 4 then 3. Attempts to rectify this would inevitably raise the runtime from O(N), meaning that BFS is optimal for this application.

> **S.4.2.1** Negatively-weigthed cycles are mentioned very often—explain why Bellman-Ford would not work for graphs with negatively-weighted cycles.

- In such graphs, the shortest path is found when the negatively-weighted cycle is traversed infinitely many times. Then, because the path contains infinitely many nodes, the idea behind Bellman-Ford (to relax each subpath) cannot hold.

> **S.4.3.2** The code provided above is incomplete. What is one way we could check whether the graph contains a negative weight cycle?

- Iterate once more. If the distances change, then a negative weight cycle is present.

---

## Sources

> **Introduction to Algorithms, 3rd edition** https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture9.pdf

> **Code Reference S.4.3.1:** https://www.geeksforgeeks.org/priority-queue-in-python/
