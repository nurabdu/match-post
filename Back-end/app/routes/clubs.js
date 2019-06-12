module.exports = (app) => {
    let clubsController = require('../controllers/ClubsController');
    let auth = require('../middleware/auth');

    /**
     * Match registration
     */
    app.post('/clubs/register', clubsController.clubsRegister);

     /**
     *Get Match
     */
    app.get('/clubs/get:id?', clubsController.get_clubs);
};
