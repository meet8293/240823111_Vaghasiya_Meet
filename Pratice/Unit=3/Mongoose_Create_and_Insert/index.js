const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://meetvaghasiya64_db_user:789641233@meet8293.31tox7j.mongodb.net/?retryWrites=true&w=majority&appName=Meet8293",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const songSchema = new mongoose.Schema({
    title: String,
    artist: String,
    category: String,
    album: String,
    url: String,
    photo: String,
    year: Number,
});

const Song = mongoose.model("Song", songSchema);
console.log("Song model created successfully");

Song.find()
    .then((allSongs) => {
        console.log("All songs retrieved successfully: all Songs");
    })
    .catch((error) => {
        console.error("Error retrieving songs:", error);
    });

Song.find({ category: "Bollywood"})
.then((allSongs) => {
    console.log("All songs retrieved successfully: all Songs");
})
.catch((error) => {
    console.error("Error retrieving songs:", error);
});

const newSong = new Song({
    title: "Vandematram",
    artist: "Arijit Singh",
    category: "Patrotic",
    album: "Patrotic",
    url: "https://bajaao.pendujatt.com.se/load/128/66780039/2136806/Aavan Jaavan.mp3",
    photo: "https://pendujatt.com.se/uploads/album/aavan-jaavan-from-war-2-pritam.webp",
    year: 2022,
});

newSong
    .save()
    .then(() => {
        console.log("New song added successfully");
    })
    .catch((error) => {
        console.error("Error retrieving songs:",error);
    });