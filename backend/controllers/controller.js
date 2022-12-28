const scoreboardDatas = require('../models/scoreboardData');

const getScoreboardData = (req, res) => {
  try {
    const { id } = req.params;
    res.status(200);
    const foundGame = scoreboardDatas.filter(tournament => tournament.id === +id);
    res.json(foundGame);
  } catch(e) {
    res.status(401);
    console.error('This is an invalid ID: ', e);
  }
}

const getTournaments = (req, res) => {
  try {
    res.status(200);
    const tournaments = scoreboardDatas.map(tournament => ({
      id: tournament.id,
      name: tournament.name
    }))
    res.json(tournaments);
  } catch(e) {
    res.status(500);
    console.error('Something is wrong with the server: ', e);
  }
}

module.exports = {getScoreboardData, getTournaments};