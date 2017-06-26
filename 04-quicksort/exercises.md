1. Write out the code for the recursive `sum` function.

  > See the code in `sumRecursive.js` and its test in `sumRecursive.test.js`.

2. Write a recursive function to count the number of items in a list.

  > See the code in `countRecursive.js` and its test in `countRecursive.test.js`.

3. Find the maximum number in a list.

  > See the code in `maxRecursive.js` and its test in `maxRecursive.test.js`.

4. Remember binary search from chapter 1? It’s a divide-and-conquer algorithm, too. Can you come up with the base case and recursive case for binary search?

  > See the code in `binarySearchRecursive.js` and its test in `binarySearchRecursive.test.js`. The base case is one in which the middle item in the array is equal to the target, in which case we simply return the index of that item. In the recursive case, we check whether the middle value is high or low, and then run the binary search on just the lower or upper half of the array accordingly. The search algorithm also has `start` and `end` parameters so as to maintain the indexes of the original array.

How long would each of these operations take in Big O notation?

5. Printing the value of each element in an array.

  > This would take `O(n)` time, since the operation would have to be performed once for each item.

6. Doubling the value of each element in an array.

  > This would likewise take `O(n)` time, since the operation is performed once on each item.

7. Doubling the value of just the first element in an array.

  > This operation would take `O(1)` time, since the operation is only performed once, and not once for each item in the array.

8. Creating a multiplication table with all the elements in the array. So if you array is [2, 3, 7, 8, 10], you first multiply every element by 2, then multiply every element by 3, then by 7, and so on.

  > This operation would take `O(n^2)` time, because every element must be multiplied against every other element, and thus the operation is exponential.
