---
layout: '../layouts/MarkdownLayout.astro'
---

# Introduction to Graphs

Graphs represent things and their relationships to other things. In the language of [graph theory](https://www.tutorialspoint.com/graph_theory/graph_theory_introduction.htm), things are called nodes, and relationships between nodes are called edges. These structures are used to model many real-life systems, including road networks, protein interactions, and social networks. For example, on Instagram, users could be represented as nodes, and two friends could have an edge connecting them to represent their relationship.

![A network of buildings and roads represented as a graph](./images/road-network.webp)

*A real [road network](https://transportgeography.org/contents/methods/graph-theory-definition-properties/graph-representation-real-network/) can be modelled using a graph. Here, buildings are nodes and streets are edges.*

<br>

## Types of Edges

### Weighted and Unweighted Edges

An edge between two nodes can have a weight. A weight is a quantitative value associated with the edge. For example, in road networks, edge weights often indicate the distance between two locations or nodes. Edges in social networks are often unweighted because a user following another user should have the same importance regardless of who is involved.

![An unweighted edge and a weighted edge](./images/Weighted%20Edge.svg)

<br>

### Directed and Undirected Edges

An edge between two nodes can also have a direction. Edges in social networks are often directed; one user following another user doesn't imply the second user following back. On the other hand, a network of pedestrian pathways has undirected edges because movement along any path (edge) is possible in both directions.

![An undirected edge and a directed edge](./images/Direct%20Edge.svg)

<br>

## Representation of Graphs

Two ways to represent a graph in code are an [adjacency matrix](https://www.javatpoint.com/what-is-an-adjacency-matrix) and an [adjacency list](https://www.programiz.com/dsa/graph-adjacency-list). The following examples are based on the graph below. This is a directed, unweighted graph because there are one-way edges and no edge has an associated weight.

![A directed, unweighted graph with four nodes](./images/Graph%20Example.png)

<br>

### Adjacency Matrix

An adjacency matrix is an $n \times n$ array, where $n$ is the number of nodes in the graph. Each element of the matrix describes the connection between a pair of nodes.

Suppose `A` is the adjacency matrix of a graph. If the graph is unweighted, `A[i][j]` is a boolean value; truthy if there is an edge from `i` to `j`, and falsy otherwise. On the other hand, if the graph is weighted, then `A[i][j]` is the edge weight (0 if the edge does not exist).

For undirected graphs, if there is an edge between nodes `i` and `j`, then `A[i][j]` and `A[j][i]` are equal because an edge from `i` to `j` is the same thing as an edge from `j` to `i`. In directed graphs, however, `A[i][j]` does not necessarily equal `A[j][i]`.

Adjacency matrices can also represent graphs with loops: edges that connect vertices to themselves. `A[i][i]` corresponds to an edge connecting node `i` to itself.

The above graph would be represented as such:

|       | **0** | **1** | **2** | **3** |
|-------|-------|-------|-------|-------|
| **0** | 0     | 0     | 1     | 1     |
| **1** | 1     | 0     | 0     | 1     |
| **2** | 0     | 0     | 0     | 1     |
| **3** | 0     | 0     | 0     | 0     |

The value of `A[1][3]` is 1 because there is an edge from node `1` to node `3`. However, there is no edge from node `3` to node `1`, so `A[3][1]` is 0.

Adjacency matrices require $O(N^2)$ space, so they may not be ideal especially if memory is a constraint. Another way to represent graphs is with adjacency lists. 

<br>

### Adjacency List

An adjacency list is a list of $n$ lists, where $n$ is the number of nodes. The $i$-th list in the adjacency list consists of the nodes that node $i$ connects to. In the example graph, node 2 connects to nodes 1 and 4, so the second list contains 1 and 4.

| _Node_ | _Outward Edges_ |
|--------|-----------------|
| **0**  | 2, 3            |
| **1**  | 0, 3            |
| **2**  | 3               |
| **3**  |                 |

Adjacency lists require $O(E)$ memory. For sparse graphs (graphs with relatively few edges), adjacency lists are much more space-efficient than adjacency matrices. However, they are slower to check whether two nodes are adjacent to each other. Adjacency matrices perform this operation in constant time.

**Reading Comprehension Exercises**
Question - Suppose we create a graph representing marriages, where people are represented as nodes and an edge connects them if they are married. Should you represent this graph using an adjacency matrix or an adjacency list?  
Answer - This is a sparse network, or a network where the number of nodes is roughly equal to the number of edges, because the vast majority of people will have one or zero outgoing edges. Thus, this should be represented as an adjacency list, to avoid allocating an unnecessarily large array in your memory. 

****

## Exercises

For practice, we suggest that readers implement the two different data structures for storing graphs. 

More formally, please write a function which initializes each data structure:
1. Adjacency Matrix
2. Adjacency List

 Then, please implement the below operations for each data-structure:
 1. Initialize
 2. Get an edge
 3. Add an edge
 4. Remove an edge
 5. Print graph representation

<details>
    <summary>Solution</summary>
    
Java:
```
import java.io.*;
import java.util.*;

class AdjacencyMatrix{
    // An Adjacency Matrix for storing directed, unweighted graphs
    int n;
    boolean[][] arr;

    public AdjacencyMatrix(int numberNodes){
        // Creates a new instance for n nodes, indexed 0
        this.arr = new boolean[numberNodes][numberNodes];
        this.n = numberNodes;
    }

    public boolean getEdge(int u, int v){
        // Gets the edge between nodes u and v, if possible
        assert(u>=0 && u<this.n && v>=0 && v<this.n);

        return this.arr[u][v];
    }

    public void addEdge(int u, int v){
        // Adds an edge between nodes u and v, if possible
        assert(u>=0 && u<this.n && v>=0 && v<this.n);

        this.arr[u][v] = true;
    }

    public void removeEdge(int u, int v){
        // Removes the edge between nodes u and v, if possible
        assert(u>=0 && u<this.n && v>=0 && v<this.n);

        this.arr[u][v] = false;
    }

    public void printGraph(){
        // Prints graph, if possible
        assert(this.arr != null);

        for(int i = 0; i<this.arr.length; ++i){
            System.out.println(Arrays.toString(this.arr[i]));
        }
    }
}

class AdjacencyList{
    // An Adjacency List for storing directed, unweighted graphs
    int n;
    ArrayList<Integer>[] lst;

    public AdjacencyList(int numberNodes){
        // Creates a new instance for n nodes, indexed 0
        this.lst = new ArrayList[numberNodes];
        for(int i = 0; i<numberNodes; ++i){
            this.lst[i] = new ArrayList<Integer>();
        }
        this.n = numberNodes;
    }

    public boolean getEdge(int u, int v){
        // Gets the edge between nodes u and v, if possible
        assert(u>=0 && u<this.n && v>=0 && v<this.n);

        return this.lst[u].contains(v);
    }

    public void addEdge(int u, int v){
        // Adds an edge between nodes u and v, if possible
        assert(u>=0 && u<this.n && v>=0 && v<this.n);

        this.lst[u].add(v);
    }

    public void removeEdge(int u, int v){
        // Removes the edge between nodes u and v, if possible
        assert(u>=0 && u<this.n && v>=0 && v<this.n);

        this.lst[u].remove(Integer.valueOf(v));
    }

    public void printGraph(){
        // Prints graph, if possible
        for(int i = 0; i<this.n; ++i){
            assert(this.lst[i] != null);
            System.out.println(Integer.toString(i) + ": " + this.lst[i].toString());
        }
    }
}

public class IntroductionToGraphs {
    public static void main(String[] args) throws IOException{
        // Initialize Adjacency Matrix
        AdjacencyMatrix graphMat = new AdjacencyMatrix(4);

        // Add Edges
        graphMat.addEdge(0, 2);
        graphMat.addEdge(0, 3);
        graphMat.addEdge(1, 0);
        graphMat.addEdge(1, 3);
        graphMat.addEdge(2, 3);

        // Print Final Graph
        graphMat.printGraph();

        // Initialize Adjacency Matrix
        AdjacencyList graphList = new AdjacencyList(4);

        // Add Edges
        graphList.addEdge(0, 2);
        graphList.addEdge(0, 3);
        graphList.addEdge(1, 0);
        graphList.addEdge(1, 3);
        graphList.addEdge(2, 3);

        // Print Final Graph
        graphList.printGraph();
    }
}
```

Python:
```
class AdjacencyMatrix:
    # An Adjacency Matrix for storing directed, unweighted graphs
    n = 0
    arr = None

    def __init__(self, numberNodes):
        # Creates a new instance for n nodes, indexed 0
        self.arr = [[False]*numberNodes for i in range(numberNodes)]
        self.n = numberNodes

    def getEdge(self, u, v):
        # Gets the edge between nodes u and v, if possible
        assert(u>=0 and u<self.n and v>=0 and v<self.n)

        return self.arr[u][v]

    def addEdge(self, u, v):
        # Adds an edge between nodes u and v, if possible
        assert(u>=0 and u<self.n and v>=0 and v<self.n)

        self.arr[u][v] = True

    def removeEdge(self, u, v):
        # Removes the edge between nodes u and v, if possible
        assert(u>=0 and u<self.n and v>=0 and v<self.n)

        self.arr[u][v] = False

    def printGraph(self):
        # Prints graph, if possible
        assert(self.arr != None)

        for i in range(self.n):
            print(self.arr[i])

class AdjacencyList:
    # An Adjacency List for storing directed, unweighted graphs
    n = 0
    lst = None

    def __init__(self, numberNodes):
        # Creates a new instance for n nodes, indexed 0
        self.lst = [[] for i in range(numberNodes)]
        self.n = numberNodes

    def getEdge(self, u, v):
        # Gets the edge between nodes u and v, if possible
        assert(u>=0 and u<self.n and v>=0 and v<self.n)

        return v in self.lst[u]

    def addEdge(self, u, v):
        # Adds an edge between nodes u and v, if possible
        assert(u>=0 and u<self.n and v>=0 and v<self.n)

        self.lst[u].append(v)

    def removeEdge(self, u, v):
        # Removes the edge between nodes u and v, if possible
        assert(u>=0 and u<self.n and v>=0 and v<self.n)

        self.lst[u].remove(v)

    def printGraph(self):
        # Prints graph, if possible
        for i in range(self.n):
            assert(self.lst[i] != None)
            print(i,  ":", self.lst[i])

# Initialize Adjacency Matrix
graphMat = AdjacencyMatrix(4)

# Add Edges
graphMat.addEdge(0, 2)
graphMat.addEdge(0, 3)
graphMat.addEdge(1, 0)
graphMat.addEdge(1, 3)
graphMat.addEdge(2, 3)

# Print Final Graph
graphMat.printGraph()

# Initialize Adjacency Matrix
graphList = AdjacencyList(4)

# Add Edges
graphList.addEdge(0, 2)
graphList.addEdge(0, 3)
graphList.addEdge(1, 0)
graphList.addEdge(1, 3)
graphList.addEdge(2, 3)

# Print Final Graph
graphList.printGraph()

```

</details>