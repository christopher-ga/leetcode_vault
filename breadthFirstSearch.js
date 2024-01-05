const graph = {};
graph.you = ["alice", "bob", "claire"];
graph.bob = ["anuj", "peggy"];
graph["alice"] = ["peggy"]
graph['claire'] = ['thom', 'jonny']
graph['anuj'] = []
graph['peggy'] = []
graph['thom'] = []
graph['jonny'] = []


function breadthFirstSearch(graph) {

    //create a queue
    //place in the contents of the node

    //while the queue is not empty

    //check if the item is what we're looking for
    //if not, put in the contents of its node

    //if not there, return false

    const queue = [];
    let searched = [];

    queue.push('you');

    while (queue.length) {
        console.log(queue);
        let person = queue.shift();

        if (person === 'thom') {
            return true;
        } else {
            for (let neighbor of graph[person]) {
                if (!searched.includes(neighbor) && !queue.includes(neighbor)) {
                    queue.push(neighbor);
                }
            }
            searched.push(person);
        }
    }
    return false;
}

console.log(breadthFirstSearch(graph));