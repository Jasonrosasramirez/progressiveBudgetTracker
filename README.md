# Unit 19 PWA Homework: Online/Offline Budget Trackers

Traveling can feel like it zips by you. That's why it is important to keep track of your budget while you're experiencing life! Your online budget tracker will works offline, keeping a running total of your balance for those distant lands. Once reconnected online, everything will sync up and get you back on track. 

An easy way to track your budget is important. But being able to access your earnings anytime you need is even more important! 


Offline Functionality:

  * Enter deposits offline

  * Enter expenses offline

When brought back online:

  * Offline entries should be added to tracker.


## Acceptance Criteria
GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.

- - -

* Deploy your application with [Heroku and MongoDB Atlas.](../04-Important/MongoAtlas-Deploy.md)

## Submission on BCS

* You are required to submit the following:

  * [URL to the deployed application.](https://heroku.com/) 

  * [URL to the github repo.](https://github.com/Jasonrosasramirez/progressiveBudgetTracker)

- - -

## Hint

* In order to cache dynamic content, i.e. users' inputs for withdrawals or deposits, incorporate `indexedDB` from the previous module.

* Use [Google](https://www.google.com) or another search engine to research this topic.