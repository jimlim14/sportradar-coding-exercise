# Sportradar-coding-challenge

This is a Sporadar Coding Challenge built with [React.Js](https://reactjs.org/).<br />

## Instructions

You are working in a sports data company, and we would like you to develop a new Live Football
World Cup Scoreboard library (or frontend application) that shows all the ongoing matches and their
scores.

The scoreboard supports the following operations:
1. Start a new game, assuming initial score 0 – 0 and adding it the scoreboard.
This should capture following parameters:
a. Home team
b. Away team
2. Update score. This should receive a pair of absolute scores: home team score and away
team score.
3. Finish game currently in progress. This removes a match from the scoreboard.
4. Get a summary of games in progress ordered by their total score. The games with the same
total score will be returned ordered by the most recently started match in the scoreboard.

### GETTING STARTED

First, clone this repository, cd to project's directory and install the dependencies either by npm or yarn:

```bash
git clone https://github.com/jimlim14/sportradar-coding-exercise.git
cd sportradar-coding-exercise

npm install
or
yarn install
```

Simply run the code below to start the application on http://localhost:3000/:

```bash
npm start
```

If you would like to run the test, simply run the code below:

```bash
npm test
```

### STEPS
1. Input Home Team and Away Team and click add new game button to add a new game to the scoreboard.
2. Update Home Teamd Score and Away Team Score by simply typing numbers on the Home Score and Away Score update fields.
3. If you would like to delete/finish a game simply click on each game's finish game button. It will be removed from the scoreboard and from the summary.
4. A summary will automatically show when there is game(s) on progress on the scoreboard, ordered by their total score and the games with the same total score will be returned ordered by the most recently started match in the scoreboard.

### EXAMPLE RESULT
![Screenshot 2022-12-20 at 20 46 23](https://user-images.githubusercontent.com/88963740/208753814-abf142ed-a918-4581-ba3d-280a73e8ca31.png)


