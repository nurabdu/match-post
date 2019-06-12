const mongoose = require('mongoose');

const ClubsSchema = mongoose.Schema ({
    clubs:          String,
});
module.exports = mongoose.model('Clubs', ClubsSchema);