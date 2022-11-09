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