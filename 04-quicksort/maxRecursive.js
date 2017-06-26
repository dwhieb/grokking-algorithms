/**
 * Recursively finds the maximum value in an Array
 * @param  {[type]} array [description]
 * @return {[type]}       [description]
 */
const maxRecursive = array => {

  const firstItem = array[0];

  if (!array.length) return null;
  else if (array.length === 1) return firstItem;
  else if (array.length === 2) return firstItem > array[1] ? firstItem : array[1];

  const subMax = maxRecursive(array.slice(1));
  return firstItem > subMax ? firstItem : subMax;

};

module.exports = maxRecursive;
