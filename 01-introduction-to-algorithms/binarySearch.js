/**
 * A binary search algorithm.
 * @param  {Array}        array     The array to search. The array should be sorted before calling this function (typically using the same compare function).
 * @param  {Any}          item      The item to search for in the array
 * @param  {Function}     [compare] A sorting function to use to sort the array (should return 1, 0, or -1)
 * @return {Integer|null}           Returns the index of the item in the array if found, and null if not
 */
const binarySearch = (array, item, compare = (a, b) => a - b) => {

  let comparison;
  let mid;
  let low  = 0;
  let high = array.length - 1;

  while (low <= high) {                                // while you haven't narrowed it down to one element

    mid        = Math.round(low + ((high - low) / 2)); // divide by 2 while avoiding overflow
    comparison = Number(compare(array[mid], item));    // faster to reassign than redeclare comparison

    if (comparison < 0) low = mid + 1;                 // too low
    else if (comparison > 0) high = mid - 1;           // too high
    else return mid;                                   // item found

  }

  return null;                                         // no result found

};

module.exports = binarySearch;
