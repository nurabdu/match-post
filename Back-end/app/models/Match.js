const mongoose = require('mongoose');

const MatchSchema = mongoose.Schema ({
    clubs:          String,
    teams:          String,
    players:        String,
    score:          String,
    clubs2:         String,
    teams2:         String,
    players2:       String,
    score2:         String
});

module.exports = mongoose.model('Match', MatchSchema);