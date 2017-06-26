/**
 * A quicksort algorithm
 * @param  {Array}    array                  The Array to sort
 * @param  {Function} [compare=(a,b) => a-b] A comparator to use for sorting
 * @return {Array}                           Returns the original Array, sorted
 */
const quicksort = (array, compare = (a, b) => a - b) => {

  if (array.length < 2) return array;

  const pivot   = array[0];
  const arr     = array.slice(1);
  const less    = arr.filter(item => compare(item, pivot) <= 0);
  const greater = arr.filter(item => compare(item, pivot) > 0);

  array.length = 0;
  // return a single function rather than use the spread operator to optimize tail call
  return array.concat(quicksort(less), [pivot], quicksort(greater));

};

module.exports = quicksort;
