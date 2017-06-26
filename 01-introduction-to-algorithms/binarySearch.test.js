/* eslint-disable
  func-names,
  no-console,
  prefer-arrow-callback,
*/

const binarySearch = require('./binarySearch');

it(`binarySearch`, function() {

  const len   = 1e4;
  const array = Array.from(Array(len), (item, i) => i + 1);
  const num   = Math.floor(Math.random() * len);

  console.time(`\nbinarySearch`);
  const result = binarySearch(array, num);
  console.timeEnd(`\nbinarySearch`);
  expect(result).toBe(num - 1);

});
