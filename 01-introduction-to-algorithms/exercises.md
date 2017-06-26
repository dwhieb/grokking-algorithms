1. Suppose you have a list of 128 names, and you're searching through it using binary search. What's the maximum number of steps it would take?

    The maximum number of steps it would take to find a name in a list of 128 names would be `log_2(128)` or `7` steps:

    ```
    log_2(128) = x
    2^x = 128
    2^x = 2^7
    x = 7
    ```

2. Suppose you double the size of the list. What's the maximum number of steps now?

    If you double the size of the list to 256 name, the maximum number of steps it would take to find a name in the list would be `log_2(256)` or `8`.

    ```
    log_2(256) = x
    2^x = 128
    2^x = 2^8
    x = 8
    ```

Give the run time for each of the following scenarios in terms of Big O:

3. You have a name, and you want to find the person's phone number in the phone book.

    Because the phone book is sorted alphabetically, you can use a binary search algorithm, which would have a run time of `O(log_2(n))`.

4. You have a phone number, and you want to find the person's name in the phone book. (Hint: You'll have to search through the whole book!)

    Because the phone book is not sorted by phone number, you will have to use a linear search algorithm, which would have a run time of `O(n)`.

5. You want to read the numbers of every person in the phone book.

    This would also require a linear search algorithm, and have a run time of `O(n)`.

6. You want to read the numbers of just the *A*'s. (This is a tricky one! It involves concepts that are covered more in chapter 4. Read the answer - you may be surprised!)

    Even though you only need to read `1/26` of the names in the phone book, the growth rate of the number of operations is still linear. `f(x) = x/26` and `f(x) = x` are both linear equations. Therefore the run time of this search would still be `O(n)`.
