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
  console.time(`selectionSort`);
  selectionSort(array);
  console.timeEnd(`selectionSort`);
  array.reduce((prev, current) => {
    expect(current > prev);
    return current;
  });

});

// longest runs (out of 10)
// - 10:  0.635ms
// - 1e2: 1.715ms
// - 1e3: 20.284ms
// - 1e4: 1317.019ms
