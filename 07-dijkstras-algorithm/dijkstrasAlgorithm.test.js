/* eslint-disable
  func-names,
  prefer-arrow-callback,
*/

const dijkstrasAlgorithm = require('./dijkstrasAlgorithm');
const graph              = require('./graph');

it(`Dijkstra's Algorithm`, function() {

  console.time(`\nDijkstra's Algorithm`);
  const costs = dijkstrasAlgorithm(graph, `start`);
  console.timeEnd(`\nDijkstra's Algorithm`);

  expect(costs.get(`finish`)).toBe(6);

});
