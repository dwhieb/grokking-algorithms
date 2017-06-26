/* eslint-disable
  no-param-reassign
*/

// NOTE: A for loop works significantly faster than forEach here

const selectionSort = (array, compare = (a, b) => a - b) => {

  let minIndex = 0;

  const swap = (firstIndex, secondIndex) => {
    const temp         = array[firstIndex];
    array[firstIndex]  = array[secondIndex];
    array[secondIndex] = temp;
  };

  array.forEach((currentItem, i) => {

    minIndex = i;

    // array.slice(i + 1).forEach((itemToCheck, j) => {
    //   if (compare(array[minIndex], itemToCheck) > 0) minIndex = i + j + 1;
    // });

    for (let j = i + 1; j < array.length; j++) {
      if (compare(array[minIndex], array[j]) > 0) minIndex = j;
    }

    if (i !== minIndex) swap(i, minIndex);

  });

  return array;

};

module.exports = selectionSort;
