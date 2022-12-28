const Router = require('express');
const router = new Router();

const { getScoreboardData } = require('./controllers/controller');

router.get('/scoreboard/:id', getScoreboardData);

module.exports = router;