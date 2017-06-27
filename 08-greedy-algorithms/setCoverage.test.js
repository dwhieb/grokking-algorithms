/* eslint-disable
  func-names,
  prefer-arrow-callback,
*/

const getSetCoverage = require('./setCoverage');

it(`setCoverage`, function() {

  console.time(`\nsetCoverage`);
  const result = getSetCoverage();
  console.timeEnd(`\nsetCoverage`);

  expect(result.size).toBe(4);
  expect(result.has(`kone`)).toBe(true);
  expect(result.has(`ktwo`)).toBe(true);
  expect(result.has(`kthree`)).toBe(true);
  expect(result.has(`kfive`)).toBe(true);

});
