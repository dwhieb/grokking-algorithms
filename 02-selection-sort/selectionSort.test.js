/*
eslint-disable
  func-names,
  no-console,
  prefer-arrow-callback,
*/

const selectionSort = require('./selectionSort');

it(`selectionSort`, function() {

  const len   = 1e4;
  const array = Array.from(Array(len), () => Math.random());

  console.time(`\nselectionSort`);
  selectionSort(array);
  console.timeEnd(`\nselectionSort`);

  array.reduce((prev, current) => {
    expect(current > prev);
    return current;
  });

});
