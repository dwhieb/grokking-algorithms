1. You work for a furniture company, and you have to ship furniture all over the country. You need to pack your truck with boxes. All the boxes are of different sizes, and you’re trying to maximize the space you use in each truck. How would you pick boxes to maximize space? Come up with a greedy strategy. Will that give you the optimal solution?

  > A greedy algorithm for this problem could always select the largest box first, and repeat until the space is full. This will not give you the optimal solution.

2. You’re going to Europe, and you have seven days to see everything you can. You assign a point value to each item (how much you want to see it) and estimate how long it takes. How can you maximize the point total (seeing all the things you really want to see) during your stay? Come up with a greedy strategy. Will that give you the optimal solution?

  > A greedy solution to this problem would entail seeing the thing with the highest point value first, and repeating this procedure until you are out of time. This would not necessarily yield the optimal solution.

For each of these algorithms, say whether it’s a greedy algorithm or not.

3. Quicksort

  > Quicksort is not a greedy algorithm, because the chosen pivot may not be optimal for that particular iteration,

4. Breadth-first search

  > Breadth-first search is a greedy algorithm, because it checks the closest neighbors first.

5. Dijkstra's Algorithm

  > Dijkstra's Algorithm is a greedy algorithm, because at each step it checks the shortest/cheapest node first.

6. A postman needs to deliver to 20 homes. He needs to find the shortest route that goes to all 20 homes. Is this an NP-complete problem?

  > Yes, this is an NP-complete problem because it involves finding the shortest path between several points, rather than just two.

7. Finding the largest clique in a set of people (a clique is a set of people who all know each other). Is this an NP-complete problem?

  > Yes, this is an NP-complete problem because it is a type of set-covering problem.

8. You’re making a map of the USA, and you need to color adjacent states with different colors. You have to find the minimum number of colors you need so that no two adjacent states are the same color. Is this an NP-complete problem?

  > Yes, this is an NP-complete problem, because it requires calculating every possible combination of states and colors.
