const Router = require('express');
const router = new Router();

const { getScoreboardData, getTournaments } = require('./controllers/controller');

router.get('/scoreboard/:id', getScoreboardData);
router.get('/tournaments', getTournaments);

module.exports = router;