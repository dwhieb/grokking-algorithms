/* eslint-disable
  no-continue,
*/

/**
 * A breadth-first graph searching algorithm. The graph must be an Object/Array whose values are Arrays. (A nested array graph is most typical.)
 * @param  {Object|Array} graph   The graph to search. Each value in the graph must be an Array.
 * @param  {Function}     match   A matching function that accepts a node as its argument and returns true when the correct node is found
 * @param  {String}       [start] The node to begin searching from
 * @return {Any}                  Returns the matched node, or null if no match was found
 */
const breadthFirstSearch = (graph, match, start = Object.keys(graph)[0]) => {

  const parents = new Map;
  const visited = new Set;
  const network = new Map(Object.entries(graph));
  const begin   = start ? [start] : Array.from(network.keys())[0];
  const queue   = [...begin];

  const getPathAndDistance = end => {
    let current  = end;
    let distance = 0;
    const path = [];
    while (parents.has(current)) {
      distance++;
      current = parents.get(current);
      path.push(current);
    }
    return {
      distance,
      path,
    };
  };

  while (queue.length) {

    const current = queue.shift();

    if (visited.has(current)) continue;

    if (match(current)) {

      const { path, distance } = getPathAndDistance(current);

      return {
        distance,
        match: current,
        path,
      };
    }

    visited.add(current);

    graph[current].forEach(neighbor => {
      if (!visited.has(neighbor)) queue.push(neighbor);
      if (!parents.has(neighbor)) parents.set(neighbor, current);
    });

  }

  return { match: null };

};

module.exports = breadthFirstSearch;
