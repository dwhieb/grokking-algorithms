/* eslint-disable
  no-param-reassign
*/

// NOTE:
// - for loop is faster that forEach
// - declaring swap ouside selectionSort is faster

const swap = (array, firstIndex, secondIndex) => {
  const temp         = array[firstIndex];
  array[firstIndex]  = array[secondIndex];
  array[secondIndex] = temp;
};

/**
 * Sorts an array in place based on a giving comparator function, using a selection sort algorithm (O(n^2))
 * @param  {Array}    array                    The Array to sort
 * @param  {Function} [compare=(a, b) => a -b] The comparator function
 * @return {Array}                             Returns the sorted Array
 */
const selectionSort = (array, compare = (a, b) => a - b) => {

  let minIndex = 0;

  for (let i = 0; i < array.length; i++) {

    minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (compare(array[minIndex], array[j]) > 0) minIndex = j;
    }

    if (i !== minIndex) swap(array, i, minIndex);

  }

  return array;

};

module.exports = selectionSort;
