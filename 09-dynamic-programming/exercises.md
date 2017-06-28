1. Suppose you can steal another item: an MP3 player. It weighs 1 lb and is worth $1,000. Should you steal it?

  > Yes. Stealing the MP3 player would increase the maximum value of the stolen goods from $4,000 to $4,500, as shown in the table below.

Item   | 1          | 2           | 3            | 4
:----: | :--------: | :---------: | :----------: | :---------:
guitar | $1,500 (G) | $1,500 (G)  | $1,500 (G)   | $1,500 (G)
stereo | $1,500 (G) | $1,500 (G)  | $1,500 (G)   | $3,000 (S)
laptop | $1,500 (G) | $1,500 (G)  | $2,000 (L)   | $3,500 (LG)
iPhone | $2,000 (I) | $3,500 (IG) | $3,500 (IG)  | $4,000 (IL)
MP3    | $2,000 (I) | $3,500 (IG) | $4,500 (MIG) | $4,500 (MIG)

2. Suppose you’re going camping. You have a knapsack that will hold 6 lb, and you can take the following items. Each has a value, and the higher the value, the more important the item is.

Item   | Weight | Value
:----: | :----: | :---:
water  | 3      | 10
book   | 1      | 3
food   | 2      | 9
jacket | 2      | 5
camera | 1      | 6

What’s the optimal set of items to take on your camping trip?

  > The optimal set of items to take on the camping trip are the `camera`, `food`, and `water`, for a total value of `25`. This is shown in the dynamic programming table below.

Item   | 1 lb. | 2 lb.  | 3 lb.   | 4 lb.    | 5 lb.    | 6 lb.
:----: | :---: | :----: | :-----: | :------: | :------: | :-------:
book   | 3 (b) | 3 (b)  | 3 (b)   | 3 (b)    | 3 (b)    | 3 (b)
camera | 6 (c) | 9 (bc) | 9 (bc)  | 9 (bc)   | 9 (bc)   | 9 (bc)
jacket | 6 (c) | 9 (bc) | 11 (cj) | 14 (bcj) | 14 (bcj) | 14 (bcj)
food   | 6 (c) | 9 (bc) | 15 (cf) | 18 (bcf) | 20 (cjf) | 21 (bcjf)
water  | 6 (c) | 9 (bc) | 15 (cf) | 18 (bcf) | 20 (cjf) | 25 (cfw)

3. Draw and fill in the grid to calculate the longest common substring between blue and clues.

&nbsp; | C | L | U | E | S
------ | - | - | - | - | -
**B**  | 0 | 0 | 0 | 0 | 0
**L**  | 0 | 1 | 0 | 0 | 0
**U**  | 0 | 0 | 2 | 0 | 0
**E**  | 0 | 0 | 0 | 3 | 0

  > The longest common substring is 3 characters long.
