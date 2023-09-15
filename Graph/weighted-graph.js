class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Map()
        }
    }

    addEdge(vertex1, vertex2, weight){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].set(vertex2, weight)
        this.adjacencyList[vertex2].set(vertex1, weight)
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
        for(let adjacencyVertex of this.adjacencyList[vertex].keys()){
            this.removeEdge(vertex, adjacencyVertex)
        }

        delete this.adjacencyList[vertex]
    }

    dfs(startVertex){
        const visited = new Set()
        const explore = vertex => {
            visited.add(vertex)
            console.log(vertex)
            for(let adjacencyVertex of this.adjacencyList[vertex].keys()){
                if(!visited.has(adjacencyVertex)){
                    explore(adjacencyVertex)
                }
            }
        }

        explore(startVertex)
    }

    bfs(vertex) {
        const visited = new Set()
        let queue = []

        queue.push(vertex)
        visited.add(vertex)

        while(queue.length){
            const curr = queue.shift()
            console.log(curr);

            for(let adjacencyVertex of this.adjacencyList[curr].keys()){
                if(!visited.has(adjacencyVertex)){
                    visited.add(adjacencyVertex)
                    queue.push(adjacencyVertex)
                }
            }
        }
    }

    hasCycle(startVertex){
        const visited = new Set()
        const recurstionStack = new Set()
        let hasCycle = true
        const explore = vertex => {
            visited.add(vertex)
            recurstionStack.add(vertex)
            for(let adjacencyVertex of this.adjacencyList[vertex].keys()){
                if(!visited.has(adjacencyVertex)){
                    explore(adjacencyVertex)
                }else if(recurstionStack.has(adjacencyVertex)){
                    hasCycle = false
                    break;
                }
            }

            recurstionStack.delete(vertex)
        }
        explore(startVertex)
        return hasCycle
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 1);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 8);
graph.addEdge('C', 'E', 10);
graph.addEdge('D', 'E', 2);

graph.dfs('A')
graph.bfs('A')
console.log(graph.hasCycle('A'))