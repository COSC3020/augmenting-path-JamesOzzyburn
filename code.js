function augmentingPath(graph, start, end) {
    return augmentingPathRecursiveSearch(graph, start, end, []);
}

function augmentingPathRecursiveSearch(graph, currentNode, targetNode, augPath) {
    augPath.push(currentNode);
    //We found the node we are looking for so return
    if(currentNode == targetNode) {
        return augPath;
    }
    else {
        for(const newNode in graph[currentNode]) {
            //Check that the augPath doesnt include the new node
            if (!augPath.includes(newNode)) {
                //Do the recursive search
                let newPath = augmentingPathRecursiveSearch(graph, newNode, targetNode, [...augPath])
                //When the recursive search finds something return the newPath
                if (newPath.length > 0) {return newPath;}
            }
        }
    }
    //If we dont find anything return [] as stated in the instructions
    return [];
}