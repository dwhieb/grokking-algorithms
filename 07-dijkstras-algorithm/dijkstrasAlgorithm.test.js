/* eslint-disable
  func-names,
  no-magic-numbers,
  prefer-arrow-callback,
*/

const dijkstrasAlgorithm = require('./dijkstrasAlgorithm');
const graph              = require('./graph');
const A                  = require('./graph-a');
const B                  = require('./graph-b');

it(`Dijkstra's Algorithm`, function() {

  console.time(`\nDijkstra's Algorithm`);
  const costs = dijkstrasAlgorithm(graph, `start`);
  console.timeEnd(`\nDijkstra's Algorithm`);

  expect(costs.get(`finish`)).toBe(6);

});

it(`Dijkstra's Algorithm: Graph A`, function() {

  console.time(`\nDijkstra's Algorithm`);
  const costs = dijkstrasAlgorithm(A, `A`);
  console.timeEnd(`\nDijkstra's Algorithm`);

  expect(costs.get(`F`)).toBe(8);

});

it(`Dijkstra's Algorithm: Graph B`, function() {

  console.time(`\nDijkstra's Algorithm`);
  const costs = dijkstrasAlgorithm(B, `A`);
  console.timeEnd(`\nDijkstra's Algorithm`);

  expect(costs.get(`E`)).toBe(60);

});
