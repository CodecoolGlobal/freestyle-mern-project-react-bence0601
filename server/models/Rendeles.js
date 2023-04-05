const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HumanShema = new Schema({
    FilmName: {
        type: String,
        require: true
    },
    Name: {
        type: String,
        require: true
    },
    db: {
        type: Number,
        require: true
    },
    sum: {
        type: Number,
        require: true
    }

})

const HumanData = mongoose.model('Human', HumanShema)

module.exports = HumanData