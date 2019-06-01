module.exports = (app) => {
    let playersController = require('../controllers/PlayersController');
    let auth = require('../middleware/auth');

    /**
     * Players registration
     */
    app.post('/players/register', playersController.registerPlayers);
};