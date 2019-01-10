

const spotify = require("./keys.js");
const Spotify = require('node-spotify-api');
const axios = require('axios');
const fs = require("fs");

const spotifyId = process.env.SPOTIFY_ID;
const spotifySecret = process.env.SPOTIFY_SECRET;

let [node, file, command, ...args] = process.argv;

if (command == 'spotify-this-song') {
    spotifyThisSong()
} else if (command == 'movie-this') {
    movieThis()
} else if (command == 'do-what-it-says') {
    doWhatItSays()
} else {
    console.log("not a given command")
}

function spotifyThisSong(search) {
    if (!search) {
        if (args == "") {
            search = 'The Sign Ace of Base'
            // console.log("28 " + songName)
        } else {
            search = args.join(' ');
            //  console.log('31 ' + songName)
        }
    }

    const spotify = new Spotify({
        id: spotifyId,
        secret: spotifySecret
    });

    spotify
        .search({ type: 'track', query: search })
        .then(function (response) {
            //   console.log(response);
            let songInfo = response.tracks.items[0];
            //   console.log(songInfo);

            let allInfo = '\r\n' +

                'Song Information:\n' +
                '\n' +
                'Song Name: ' + songInfo.name + '\n' +
                'Artist: ' + songInfo.artists[0].name + '\n' +
                'Album: ' + songInfo.album.name + '\n' +
                'Preview Song: ' + songInfo.external_urls.spotify + '\n';
            console.log(allInfo);
        })
        .catch(function (err) {
            console.log(err);
        });

}

function movieThis(search) {
    
    if (!search) {
        if (args == "") {
            search = 'Mr. Nobody'
        } else {
            search = args.join('+');
        }
    }
    let queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function (response) {

            let data = response.data
            let rottenTomatoe = (response.data.Ratings[1].Value)
            let allInfo = '\r\n' +
                'Movie Information:\n' +
                '\n' +
                'Title: ' + data.Title + '\n' +
                'Year: ' + data.Year + '\n' +
                'IMDB Rating: ' + data.imdbRating + '\n' +
                'Rotten Tomatoes Rating: ' + rottenTomatoe + '\n' +
                'Country: ' + data.Country + '\n' +
                'Language(s): ' + data.Language + '\n' +
                'Plot: ' + data.Plot + '\n' +
                'Actors: ' + data.Actors
            console.log(allInfo)
        }
    )
}

function doWhatItSays() {
    
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        // console.log(data);

        let dataCommand = data.split(',')
        // console.log(dataCommand)
        // console.log(dataCommand[0])
        // console.log(dataCommand[1])
        command = dataCommand[0]
        search = dataCommand[1]
        // console.log(search);


        if (command == 'spotify-this-song') {
            spotifyThisSong(search)
        } else if (command == 'movie-this') {
            movieThis(search)
        }
    });
}