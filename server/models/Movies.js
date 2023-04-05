const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moviesShema = new Schema({
    Title: {
        type: String,
        require: true
    },
    Year: {
        type: Number,
        require: true
    },
    Poster: {
        type: String,
        require: true
    },
    imdbID:{
        type:String,
        require:true
    }
})

const moviData = mongoose.model('Movies', moviesShema)

module.exports = moviData