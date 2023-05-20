class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2) && 
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return null
        }
        for(let adjacencyVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex, adjacencyVertex)
        }

        delete this.adjacencyList[vertex]
    }

    dfs(startVertex){
        let visited = new Set()
        const explore = vertex => {
            visited.add(vertex)
            console.log(vertex);
            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited.has(neighbour)){
                    explore(neighbour)
                }
            }
        }

        explore(startVertex)
    }

    bfs(startVertex){
        let visited = new Set()
        let queue = []

        visited.add(startVertex)
        queue.push(startVertex)
        while(queue.length){
            let vertex = queue.shift()
            console.log(vertex)
            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            }
        }
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }
}

const graph = new Graph()
graph.addEdge('A','B')
graph.addEdge('B','C')
graph.display()         // A -> B | B -> A,C | C -> B

graph.dfs('A')          // A B c
graph.bfs('A')          // A B C    

graph.removeEdge('A','B')
graph.display()         // A -> | B -> C | C -> B

graph.removeVertex('C')
graph.display()         // A -> | B ->
console.log(graph.hasEdge('A','B')); // false
console.log(graph.hasEdge('A','c')); // false
