# liri-node-app

To Watch a video on how this works please click the link:
     https://youtu.be/hG9iXimJ4iQ

This liri app is ran in Node, we have three different commands we can work with:

1. "spotify-this-song" --- This command uses the spotify API to get all the information about the song that we want to know more about. To run the command we have to type :

        node liri.js spotify-this-song --- this will give us the default song but if we want to search for a song we just type in the name of the song at the end of the command like this:

        node liri.js spotify-this song despacito --- it will give us the Song name, Artist, Album name and a link to preview the song.

2. "movie-this" --- This command uses the OMDB API and will get us all the information for the given movie. To run the command we have to type:

        node liri.js movie-this --- this will give us the default movie, to search for a movie we want to know more about we simply type the name of the movie at the end of the command like this:

        node liri.js movie-this the last samurai --- this will give us the information for the movie we want to learn more about. This will display the Title, year it came out, IMBD Rating, Rotten tomatoes Rating, country where it was filmed, languages spoken in the movie, plot and actors.

3. "do-what-it-says" --- This command gets the information from a text file (random.txt) and runs the command that it says on the random.txt file. to run the command simply type:

        node liri.js do-what-it-says --- and this will do what the command in the text file says.

