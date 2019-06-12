module.exports = (app) => {
    let scoreController = require('../controllers/ScoreControllers');
    let auth = require('../middleware/auth');

    /**
     * Score registration
     */
    app.post('/score/register', scoreController.registerScore);
    /**
     * Get Score 
     */
    app.get('/score/get:id?', scoreController.get_score);
};