/* eslint-disable
  func-names,
  prefer-arrow-callback,
*/

const maxRecursive = require('./maxRecursive');

it(`maxRecursive`, function() {

  const len   = 1e4;
  const array = Array.from(Array(len), () => Math.random());

  console.time(`\nmaxRecursive`);
  const max = maxRecursive(array);
  console.timeEnd(`\nmaxRecursive`);

  expect(max).toBe(Math.max(...array));

});
