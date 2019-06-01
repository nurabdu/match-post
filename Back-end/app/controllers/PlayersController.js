require('dotenv').config();
const Players = require('../models/Players');

exports.registerPlayers = (req, res) => {
  const players = new Players({
        goalkeeper:               req.body.goalkeeper,
        defender1:                req.body.defender1,
        defender2:                req.body.defender2,
        defender3:                req.body.defender3,
        defender4:                req.body.defender4,
        midfielder1:              req.body.midfielder1,
        midfielder2:              req.body.midfielder2,
        midfielder3:              req.body.midfielder3,
        midfielder4:              req.body.midfielder4,
        attack1:                  req.body.attack1,
        attack2:                  req.body.attack2
    });
    
    players.save().then(data => {
        players.get(data, (players) => {
            res.send(players);
        });
    }).catch(err => {
        if(err.code === 11000) {
            res.status(400).send({message: "Players is already exist"});
            
        } res.status(500).send({message: err});
    });

};