# Sportradar-coding-challenge

This is a Sportradar Coding Challenge built with [React.Js](https://reactjs.org/) frontend library and [Node.Js](https://nodejs.org/en/) runtime environment with [Express](https://expressjs.com/) framework.<br />

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

***Extended version***<br />
Part 1 - Using the language of your choice, write a dummy backend that returns random score board data (contains between 3 and 6 matches with random score) given a tournament id
eg. GET /scoreboard/1 where 1 is the tournament id.
The returned data would look like:
{
  'name': 'FIFA World Cup',
  'data': [random data similar to the fixture payload in your example]
}

Available tournament ids (to be hardcoded in the backend) are:
-  FIFA World Cup (id: 1)
-  Davis Cup (id: 2)
-  Copa del Rey (id: 3)

When providing an invalid id, an error should be thrown.<br />

Part 2 - Refactor the example into a reusable component that takes the feed URL (from the backend above) as prop to render the score board accordingly (tournament name + score board data from the feed URL).<br />

Part 3 - Prepare a simple docker(-compose) setup to containerize the application and run 2 backend instances that will be used by a frontend containing 2 score boards where each uses a different backend.<br />


### GETTING STARTED

If you would like to run this application without Docker. First, clone this repository, cd to both frontend and backend directory and install the dependencies either by npm or yarn:

```bash
git clone https://github.com/jimlim14/sportradar-coding-exercise.git
cd sportradar-coding-exercise

cd frontend
npm install
or
yarn install

cd backend
npm install
or
yarn install
```

Simply run the code below to start the application on http://localhost:3000/:

```bash
cd frontend
npm start

cd backend 
nodemon index.js
```

If you would like to run the test, simply run the code below on both frontend and backend directory:

```bash
cd frontend
npm test

cd backend 
npm test
```

Simply do this if you are using Docker. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) for better visualization. And run the code below to run the container on port 3000 (frontend) and port 3002-3003 (two backend instances). 

```bash
cd frontend
npm run dev

cd backend
npm run dev
```

***If you encounter this problem (picture shown below), simply go to your Docker Desktop App and manually run the container***



### STEPS
1. Input Home Team and Away Team and click add new game button to add a new game to the scoreboard.
2. Update Home Teamd Score and Away Team Score by simply typing numbers on the Home Score and Away Score update fields.
3. If you would like to delete/finish a game simply click on each game's finish game button. It will be removed from the scoreboard and from the summary.
4. A summary will automatically show when there is game(s) on progress on the scoreboard, ordered by their total score and the games with the same total score will be returned ordered by the most recently started match in the scoreboard.

### EXAMPLE RESULT
![Screenshot 2022-12-20 at 20 46 23](https://user-images.githubusercontent.com/88963740/208753814-abf142ed-a918-4581-ba3d-280a73e8ca31.png)


