1. Suppose you're building an app to keep track of your finances. Every day, you write down everything you spent money on. At the end of the month, you review your expenses and sum up how much you spent. So, you have lots of inserts and a few reads. Should you use an array or a list?

    > Because lists have a smaller run time for insertion operations than arrays do (`O(1)` vs. `O(n)`), you should use a list data structure for your finances. In addition, because each month you are reading every item in the list anyway, a list structure will also perform well in comparison to an array structure for read operations in this scenario as well.

2. Suppose you’re building an app for restaurants to take customer orders. Your app needs to store a list of orders. Servers keep adding orders to this list, and chefs take orders off the list and make them. It’s an order queue: servers add orders to the back of the queue, and the chef takes the first order off the queue and cooks it.

  Would you use an array or a linked list to implement this queue? (Hint: Linked lists are good for inserts/deletes, and arrays are good for random access. Which one are you going to be doing here?)

    > Because linked lists are better for insertions and deletions, a linked list would be the more appropriate data structure to use here. If you used an array, the entire array would have to be reallocated to a new slot in memory each time a new order was added to the beginning of the queue. Moreover, because the chef is always taking the first item off the queue, random access (which arrays are better suited for) isn't a requirement.

3. Let’s run a thought experiment. Suppose Facebook keeps a list of usernames. When someone tries to log in to Facebook, a search is done for their username. If their name is in the list of usernames, they can log in. People log in to Facebook pretty often, so there are a lot of searches through this list of usernames. Suppose Facebook uses binary search to search the list. Binary search needs random access—you need to be able to get to the middle of the list of usernames instantly. Knowing this, would you implement the list as an array or a linked list?

  > I would use a sorted array data structure to implement this binary search, because it is better suited to random access. A linked list would require iterating through a large portion of the list at each step of the binary search algorithm.

4. People sign up for Facebook pretty often, too. Suppose you decided to use an array to store the list of users. What are the downsides of an array for inserts? In particular, suppose you’re using binary search to search for logins. What happens when you add new users to an array?

    > In order to use a binary search to search for logins, Facebook would need to keep the array of usernames sorted. As a result, new usernames would need to be inserted in their sort order, and entire portions of the array would need to be reallocated to new indexes each time a new username was added.

5. In reality, Facebook uses neither an array nor a linked list to store user information. Let’s consider a hybrid data structure: an array of linked lists. You have an array with 26 slots. Each slot points to a linked list. For example, the first slot in the array points to a linked list containing all the usernames starting with a. The second slot points to a linked list containing all the usernames starting with b, and so on.

  Suppose Adit B signs up for Facebook, and you want to add them to the list. You go to slot 1 in the array, go to the linked list for slot 1, and add Adit B at the end. Now, suppose you want to search for Zakhir H. You go to slot 26, which points to a linked list of all the Z names. Then you search through that list to find Zakhir H.

  Compare this hybrid data structure to arrays and linked lists. Is it slower or faster than each for searching and inserting? You don’t have to give Big O run times, just whether the new data structure would be faster or slower.

  > The hybrid approach is significantly slower than the array approach for searching, because the hybrid approach potentially has to iterate over every username for a given letter, whereas in the array approach, the algorithm can use random access to immediately find the username it is looking for. However, the hybrid approach is significantly faster than the array approach at insertion, because new usernames can be added without reassigning the index of every other username for that letter.

  > Conversely, the hybrid approach is faster than the list approach for searching, since it eliminates several steps in the binary search by first using random access to narrow down possible results by the initial letter. However, the hybrid approach will take one additional step to insert usernames than the linked list approach, because the algorithm must first look up the correct list in the array. Their Big O run times, however, would be the same, because both are linear algorithms.
