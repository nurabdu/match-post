require('dotenv').config();
const Match = require('../models/Match');

exports.registerMatches = (req, res) => {

const match = new Match({
    clubs: req.body.clubs,
    score: req.body.score, 
    clubs2: req.body.clubs2,
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

exports.get_match = (req, res) => {
    Match.find().exec(function(err, match){
        if (match.length) {
            match = match.map((mach) => {
                return {
                    id: match.id,
                    clubs:          mach.clubs || '',
                    score:          mach.score || '',           
                    clubs2:         mach.clubs2 || '',
                    score2:         mach.score2 || ''
                }
            });
            res.send({
                match 
            })
        } else {
            res.status(400).send({
                message: "match not found"
            });
        }
    });
}; 



