require('dotenv').config();
const Score = require('../models/Score');

exports.registerScore = (req, res) => {

const score = new Score({
    firstScore: req.body.firstScore,
    secondScore: req.body.secondScore
});

score.save().then(data => {
    score.get(data, (score) => {
        res.send(score);
    });
}).catch(err => {
    if(err.code === 11000) {
        res.status(400).send({message: "Score is already exist"});
        
    } res.status(500).send({message: err});
  });
};

exports.get_score = (req, res) => {
    Score.find().exec(function(err, score){
        if (score.length) {
            score = score.map((scor) => {
                return {
                    id: score.id,
                    firstScore:    scor.firstScore || '',
                    secondScore:   scor.secondScore || '' 
                }
            });
            res.send({
                score 
            })
        } else {
            res.status(400).send({
                message: "score not found"
            });
        }
    });
};
