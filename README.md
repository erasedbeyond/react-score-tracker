# Score Tracker
### _React App_
Hosted Link: https://erasedbeyond.github.io/react-score-tracker/

A simple react app to keep track of score of the various games and save the history  of played games.

### Points to be noted
- Logs are saved in local Storage. (No backend Used)
- used react hooks (custom hooks also)
- used redux 
- used functional component only


## Features

- **Game History** tab (left-side) is available to keep track of played games with following features:
    -  **Search Option**, can be used to search a game with player name or game name. To get a particular result we can combine the players name and game name.
        -  Examples: <br/>
         ```messi``` : This search results in all the games played  by player having 'messi' in their name whether it be football or basketball or any. <br/>
        ```football```  : This search results in all the football match/matches played. <br/>
         ```football messi``` or ```messi football``` : These search results in all the football match/matches of player having 'messi' in their name. <br/>
        ```football messi vs ronaldo``` or ```football messi ronaldo``` : These search results in all the football match/matches played between messi and ronaldo only. <br/>
    
    - **Sort Option**, can be used to sort the all the games played with respect to their timestamp.
        - Option Available: <br/>
            ``new``: clicking on **new** will show the recent games played first <br/>
            ``old``: clicking on **old** will show the older games played at first <br/>
        
    - **Delete Button**, can be used to delete the particular game from the game logs

- **Select Game** tab is provided (right-side), either we can select from the available games or type in manually to provide the new game to be played


## Installation

App requires [Node.js](https://nodejs.org/) to run.

- Create a react app using ```npx create-react-app app-name``` and copy the src folder.
- Install the dependencies start the server using command ```npm start```
- Redux is used here. So use these commands to install dependencies,
    ```sh
    npm install redux
    npm install react-redux
    npm install redux-thunk
    ```



