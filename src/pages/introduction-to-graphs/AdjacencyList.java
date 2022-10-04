class AdjacencyList {
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