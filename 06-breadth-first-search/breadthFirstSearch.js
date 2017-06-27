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
const breadthFirstSearch = (graph, match, start) => {

  const visited = new Set;
  const network = new Map(Object.entries(graph));
  const begin   = start ? [start] : network.keys();
  const queue   = [...begin];

  while (queue.length) {
    const current = queue.shift();
    if (visited.has(current)) continue;
    if (match(current)) return current;
    if (Array.isArray(graph[current])) queue.push(...graph[current]);
    visited.add(current);
  }

  return null;

};

module.exports = breadthFirstSearch;
