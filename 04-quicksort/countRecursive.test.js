/* eslint-disable
  func-names,
  prefer-arrow-callback,
*/

const countRecursive = require('./countRecursive');

it(`countRecursive`, function() {

  const len   = 1e4;
  const array = Array.from(Array(len), () => Math.floor(Math.random() * 100));

  console.time(`\ncountRecursive`);
  const count = countRecursive(array);
  console.timeEnd(`\ncountRecursive`);

  expect(count).toBe(array.length);

});
