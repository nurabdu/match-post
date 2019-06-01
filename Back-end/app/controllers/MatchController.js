require('dotenv').config();
const Match = require('../models/Match');

exports.registerMatches = (req, res) => {

const match = new Match({
    clubs: req.body.clubs,
    teams: req.body.teams, 
    players: req.body.players,
    score: req.body.score, 

    clubs2: req.body.clubs2,
    teams2: req.body.teams2, 
    players2: req.body.players2,
    score2: req.body.score2
});

match.save().then(data => {
    match.get(data, (match) => {
        res.send(match);
    });
}).catch(err => {
    if(err.code === 11000) {
        res.status(400).send({message: "Matches is already exist"});
        
    } res.status(500).send({message: err});
 });
};

exports.match = (req, res) => {
    Match.find(req.match).exec(function(err, match) {
        if (match) {
            res.send({
                match: {
                    clubs:          match.clubs || '',
                    teams:          match.teams || '',
                    players:        match.players || '',
                    score:          match.score || '',           
                    clubs2:         match.clubs2 || '',
                    teams2:         match.teams2 || '',
                    players2:       match.players2 || '',
                    score2:         match.score2 || ''
                }
            })
        } else {
            res.status(400).send({
                message: 'Match not found'
            });
        }
    });
};
