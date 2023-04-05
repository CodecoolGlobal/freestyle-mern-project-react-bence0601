const mongoose = require('mongoose');
const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const movieData = require("./models/Movies");
const HumanData = require('./models/Rendeles');

app.use(express.json())

app.use(cors())

mongoose.connect("mongodb+srv://vargamondi:Mondika18@vmondi18.t4t4rav.mongodb.net/test");
const data = JSON.parse(fs.readFileSync('models/movies.json', 'utf-8'))

const importData = async () => {
    try {
        await movieData.create(data)
        console.log('data successfully imported')
        // to exit the process
        process.exit()
    } catch (error) {
        console.log('error', error)
    }
}
//importData()
app.get("/movies", async (req, res) => {
    try {
        const allmovies = await movieData.find();
        res.send(allmovies)
        console.log("GET")
    } catch (error) {
        console.log("Error:" + 505)
    }
});

app.get("/api/ticket",async (req,res) =>{
    try {
        const humandatas = await HumanData.find();
        res.send(humandatas)
        console.log("GET")
    } catch (error) {
        console.log("Error:" + 504)
    }
    
})

app.post("/api/ticket", (req, res) => {
    console.log(req.body);
    const FilmName = req.body.FilmName;
    const Name = req.body.Name;
    const db = req.body.db;
    const sum = req.body.sum;
    const datas = new HumanData({
        FilmName,
        Name,
        db,
        sum,
    });
    datas
        .save()
        .then((datas) => res.json(datas))
        .catch((err) => res.status(400).json({ success: false }));
});


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listening to port ${port}`))





