import java.io.*;
import java.util.*;

class AdjacencyMatrix {
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