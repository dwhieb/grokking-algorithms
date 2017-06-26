Which of these functions are consistent?

1. `f(x) = 1                 // returns "1" for all input`

  > This function is consistent because it always returns the same value.

2. `f(x) = rand()            // returns a random number every time`

  > This function is inconsistent. The value returned is different every time it is evaluated.

3. `f(x) = next_empty_slot() // returns the index of the next empty slot in the hash table`

  > This function is not consistent. If new items are added to the hash table, the index of the next empty slot will change.

4. `f(x) = len(x)            // uses the length of the string as the index`

  > This function is consistent. A string of a given length will always return the same value.

Suppose you have these four hash functions that work with strings:

  * a. Return “1” for all input.

  * b. Use the length of the string as the index.

  * c. Use the first character of the string as the index. So, all strings starting with a are hashed together, and so on.

  * d. Map every letter to a prime number: a = 2, b = 3, c = 5, d = 7, e = 11, and so on. For a string, the hash function is the sum of all the characters modulo the size of the hash. For example, if your hash size is 10, and the string is “bag”, the index is 3 + 2 + 17 % 10 = 22 % 10 = 2.

For each of these examples, which hash functions would provide a good distribution? Assume a hash table size of 10 slots.

> Function (a) would not work well for any of these data sets. Every insert operation would cause a collision, and all the items would therefore be stored in an linked list, making retrieval significantly slower.

5. A phonebook where the keys are names and values are phone numbers. The names are as follows: Esther, Ben, Bob, and Dan.

  > Function (b) would not work well for this data, because three of the names have the same length. The data in the hash table would therefore be unevenly distributed between just two indexes (`3` and `6`).

  > Function (c) would work better than (b), because it only causes 1 collision for this set of data. However, function (d) seems the best choice for this data set. The calculations below show that this hash function distributes all four names into a different slot, and generally minimizes the risk of collisions for additional names that might be added.

  ```
  Esther: (11 + 67 + 71 + 19 + 11 + 61) % 10 = 0
  Ben:    (3 + 11 + 43) % 10 = 7
  Bob:    (3 + 47 + 3) % 10 = 3
  Dan:    (7 + 2 + 43) % 10 = 2
  ```

6. A mapping from battery size to power. The sizes are A, AA, AAA, and AAAA.

  > Hash functions (a) and (c) would produce the same result for this data set - namely, that all four items would be stored in the same slot, causing a collision on every insert. Function (b), however, is perfectly suited to this data set, because it would result in each item being stored in its own slot in the hash table, avoiding any collisions.

7. A mapping from book titles to authors. The titles are _Maus_, _Fun Home_, and _Watchmen_.

  > Function (c) is probably the best hashing algorithm to use in this case, because for this particular data set it avoids collisions. However, if data continues to be added to the hash table, function (c) has the drawback that some names are more common than others, and some letters as well. The names in the hash table would not likely be evenly distributed if more data were continually added. Function (d) would also presumably work quite well, as it did for the names in Question 5.

> In general, hash function (d) seems to be a good approach, because it adjusts the index depending on both the length and the characters of the key.
