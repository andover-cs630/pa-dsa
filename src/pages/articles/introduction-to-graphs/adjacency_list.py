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