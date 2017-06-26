/* eslint-disable
  func-names,
  prefer-arrow-callback,
*/

const binarySearchRecursive = require('./binarySearchRecursive');

it(`binarySearchRecursive`, function() {

  const len   = 1e4;
  const array = Array.from(Array(len), (item, i) => i + 1);
  const num   = Math.floor(Math.random() * len);

  console.time(`\nbinarySearchRecursive`);
  const result = binarySearchRecursive(array, num);
  console.timeEnd(`\nbinarySearchRecursive`);
  expect(result).toBe(num - 1);

});
