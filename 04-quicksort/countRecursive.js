/**
 * Recursively counts the values in an Array
 * @param  {Array}   array The Array to count
 * @return {Integer}       Returns the count of the number of items in the Array
 */
const countRecursive = array => {
  if (!array.length) return 0;
  return 1 + countRecursive(array.slice(1));
};

module.exports = countRecursive;
