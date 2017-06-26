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
