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
        return (
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

    hasCycle(startVertex){
        const visited = new Set()
        const recurstionStack = new Set()
        let hasCycle = true

        const explore = vertex => {
            visited.add(vertex)
            recurstionStack.add(vertex)
            for(let adjacencyVertex of this.adjacencyList[vertex]){
                if(!visited.has(adjacencyVertex)){
                    explore(adjacencyVertex)
                }else if(recurstionStack.has(adjacencyVertex)){
                    hasCycle = false
                    break
                }
            }

            recurstionStack.delete(vertex)

        }

        explore(startVertex)
        console.log(hasCycle)
    }

}


const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.hasCycle('A');