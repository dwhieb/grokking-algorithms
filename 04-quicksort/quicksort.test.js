/* eslint-disable
  func-names,
  prefer-arrow-callback,
*/

const quicksort = require('./quicksort');

it(`quicksort`, function() {

  const len   = 1e4;
  const array = Array.from(Array(len), () => Math.random());

  console.time(`\nquicksort`);
  const sortedArray = quicksort(array);
  console.timeEnd(`\nquicksort`);

  sortedArray.reduce((prev, current) => {
    expect(current > prev);
    return current;
  });

});
