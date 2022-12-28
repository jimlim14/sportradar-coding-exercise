const scoreboardDatas = require('../models/scoreboardData');

const getScoreboardData = (req, res) => {
  try {
    const { id } = req.params;
    res.status(200);
    const foundGame = scoreboardDatas.filter(tournament => tournament.id === +id);
    res.json(foundGame[0]);
  } catch(e) {
    res.status(401);
    console.error('This is an invalid ID: ', e);
  }
}

module.exports = {getScoreboardData};