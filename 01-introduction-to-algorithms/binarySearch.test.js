/* eslint-disable
  func-names,
  prefer-arrow-callback,
*/

const binarySearch = require('./binarySearch');

it('binarySearch', function() {

  const len   = 1e5;
  const array = Array.from(Array(len), (item, i) => i + 1);
  const num   = Math.floor(Math.random() * len);

  expect(binarySearch(array, num)).toBe(num - 1);

});
