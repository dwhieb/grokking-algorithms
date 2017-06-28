/* eslint-disable
  func-names,
  prefer-arrow-callback,
*/

const names = require('./names');
const race  = require('./race');
const words = require('./words');

const breadthFirstSearch = require('./breadthFirstSearch');

it(`breadthFirstSearch: names`, function() {

  console.time(`\nbreadthFirstSearch (names)`);
  const result = breadthFirstSearch(names, item => item.endsWith(`m`), `you`);
  console.timeEnd(`\nbreadthFirstSearch (names)`);

  expect(result.match).toBe(`thom`);
  expect(result.distance).toBe(2);

});

it(`breadthFirstSearch: race`, function() {

  const finish = 5;

  console.time(`\nbreadthFirstSearch (race)`);
  const result = breadthFirstSearch(race, item => item === finish, 0);
  console.timeEnd(`\nbreadthFirstSearch (race)`);

  expect(result.match).toBe(finish);
  expect(result.distance).toBe(2);

});

it(`breadthFirstSearch: words`, function() {

  console.time(`\nbreadthFirstSearch (words)`);
  const result = breadthFirstSearch(words, item => item === `bat`, `cab`);
  console.timeEnd(`\nbreadthFirstSearch (words)`);

  expect(result.match).toBe(`bat`);
  expect(result.distance).toBe(2);

});

it(`breadthFirstSearch: no match`, function() {

  console.time(`\nbreadthFirstSearch (no match)`);
  const result = breadthFirstSearch(words, item => item === `Zelda`);
  console.timeEnd(`\nbreadthFirstSearch (no match)`);

  expect(result.match).toBe(null);

});
