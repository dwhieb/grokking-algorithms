/**
 * Recursively sums the values of an Array. NOTE: The result will be different with each invocation if floating point numbers are used.
 * @param  {Array}  array The Array of values to add
 * @return {Number}       Returns the sum of the values in the Array
 */
const sumRecursive = array => {
  if (!array.length) return 0;
  return Number(array[0] || 0) + sumRecursive(array.slice(1));
};

module.exports = sumRecursive;
