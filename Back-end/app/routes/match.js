module.exports = (app) => {
    let matchController = require('../controllers/MatchController');
    let auth = require('../middleware/auth');

    /**
     * Match registration
     */
    app.post('/match/register', matchController.registerMatches);

     /**
     *Get Match
     */
    app.get('/match/get:id?', matchController.get_match);
};
