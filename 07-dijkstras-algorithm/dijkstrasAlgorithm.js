/**
 * A JavaScript implementation of Dijkstra's Algorithm that returns a Map of distances from the start node
 * @param  {Object} graph                         A hash table of nodes which maps to the neighbors and distance to those neighbors
 * @param  {String} [start=Object.keys(graph)[0]] The node to calculate distances from
 * @return {Map}                                  Returns a Map listing the distance to each node from the start node
 * @example
 *const graph = {
    start: {
      A:      6,
      B:      2,
    },
    A: {
      finish: 1,
    },
    B: {
      A:      3,
      finish: 5,
    },
    finish: {},
  };

  const distances = dijkstrasAlgorithm(graph, `start`);

  distances.get(`finish`) // => 6
 */
const dijkstrasAlgorithm = (graph, start = Object.keys(graph)[0]) => {

  const costs   = new Map;
  const parents = new Map;
  const visited = new Set;

  const getCheapestNode = () => {

    let lowestCost   = Infinity;
    let cheapestNode = null;

    for (const [node, cost] of costs) {
      if (cost < lowestCost && !visited.has(node)) {
        lowestCost   = cost;
        cheapestNode = node;
      }
    }

    return cheapestNode;

  };

  Object.keys(graph).forEach(node => costs.set(node, Infinity));
  Object.entries(graph[start]).forEach(([node, cost]) => costs.set(node, cost));

  let node = getCheapestNode();

  while (node) {

    const cost      = costs.get(node);
    const neighbors = graph[node];

    for (const [neighbor, neighborCost] of Object.entries(neighbors)) {

      const newCost = cost + neighborCost;

      if (newCost < costs.get(neighbor)) {
        costs.set(neighbor, newCost);
        parents.set(neighbor, node);
      }

    }

    visited.add(node);
    node = getCheapestNode();

  }

  return costs;

};

module.exports = dijkstrasAlgorithm;
