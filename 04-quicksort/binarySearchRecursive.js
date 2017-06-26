/**
 * Performs a recursive binary search for an item in an Array
 * @param  {Array}    array                  The Array to search
 * @param  {Any}      item                   The item to search for in the Array
 * @param  {Integer}  [start=0]              The index to begin the search at
 * @param  {Integer}  [end=array.length-1]   The index to end the search at
 * @param  {Function} [compare=(a,b) => a-b] A comparator Function to compare the values of items in the Array
 * @return {Integer}                         Returns the index of the item in the Array, or `null` if not found.
 */
const binarySearchRecursive = (
  array,
  item,
  start = 0,
  end = array.length - 1,
  compare = (a, b) => a - b
) => {

  if (start > end) return null;

  const mid = start + Math.floor((end - start) / 2);

  if (array[mid] === item) return mid;

  const comparison = Number(compare(array[mid], item));

  if (comparison < 0) return binarySearchRecursive(array, item, mid + 1, end);
  if (comparison > 0) return binarySearchRecursive(array, item, start, mid - 1);

};

module.exports = (array, item) => {
  return binarySearchRecursive(array, item);
};
