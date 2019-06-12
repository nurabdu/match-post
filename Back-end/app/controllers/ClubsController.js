require('dotenv').config();
const Clubs = require('../models/Clubs');

exports.clubsRegister = (req, res) => {

const clubs = new Clubs({
    clubs: req.body.clubs,
});

clubs.save().then(data => {
    clubs.get(data, (clubs) => {
        res.send(clubs);
    });
}).catch(err => {
    if(err.code === 11000) {
        res.status(400).send({message: "Clubs is already exist"});
        
    } res.status(500).send({message: err});
 });
};

exports.get_clubs = (req, res) => {
    Clubs.find().exec(function(err, clubs){
        if (clubs.length) {
            clubs = clubs.map((club) => {
                return {
                    id: clubs.id,
                    clubs:          club.clubs || '',
                }
            });
            res.send({
                clubs 
            })
        } else {
            res.status(400).send({
                message: "clubs not found"
            });
        }
    });
};