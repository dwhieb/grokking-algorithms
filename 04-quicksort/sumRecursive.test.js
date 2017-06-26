/* eslint-disable
  func-names,
  no-console,
  prefer-arrow-callback,
*/

const sumRecursive = require('./sumRecursive');

it(`sumRecursive`, function() {

  const len   = 1e4;
  const array = Array.from(Array(len), () => Math.floor(Math.random() * 100));

  console.time(`\nsumRecursive`);
  const sum = sumRecursive(array);
  console.timeEnd(`\nsumRecursive`);

  expect(sum).toBe(array.reduce((a, b) => a + b));

});
