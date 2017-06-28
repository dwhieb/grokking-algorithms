1. In the Netflix example, you calculated the distance between two different users using the distance formula. But not all users rate movies the same way. Suppose you have two users, Yogi and Pinky, who have the same taste in movies. But Yogi rates any movie he likes as a 5, whereas Pinky is choosier and reserves the 5s for only the best. They’re well matched, but according to the distance algorithm, they aren’t neighbors. How would you take their different rating strategies into account?

  > To take the different rating strategies of users into account, you could normalize their ratings.

2. Suppose Netflix nominates a group of “influencers.” For example, Quentin Tarantino and Wes Anderson are influencers on Netflix, so their ratings count for more than a normal user’s. How would you change the recommendations system so it’s biased toward the ratings of influencers?

  > You could use a weighted average when calculating the average rating of a movie, so that the influencers are given a greater weighting than non-influencers.

3. Netflix has millions of users. The earlier example looked at the five closest neighbors for building the recommendations system. Is this too low? Too high?

  > Using only the five closest neighbors is too low a number for a k-nearest neighbors algorithm. A good rule of thumb for determining `k` is `k = sqrt(N)`, where `N` is the total number of data points. So if Netflix had 10,000,000 users, it should look at approximately 3,000 nearest neighbors.
