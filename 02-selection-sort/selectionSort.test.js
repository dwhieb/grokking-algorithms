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

// longest runs, in ms (out of 10)
// - 1e1:   0.446 (~0.250)
// - 1e2:   2.533 (~1.7)
// - 1e3:   7.319 (~3.5)
// - 1e4: 179.412 (~150)
