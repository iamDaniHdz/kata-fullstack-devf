import Movie from "../models/Movie.js"

const Query = {

    async getMovies() {
        const movies = await Movie.find();
        return movies
    },
    async getMovieByTitle( _, { title } ) {
        const searchMovieByTitle = await Movie.find( { title : title } );
        // console.log( 'getting movie', searchMovieByTitle ); 
        return searchMovieByTitle 
    },
}

export default Query