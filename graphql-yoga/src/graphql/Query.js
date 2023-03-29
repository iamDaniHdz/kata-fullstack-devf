import Movie from "../models/Movie.js"
import User from "../models/User.js"

const Query = {

    async getMovies() {
        const movies = await Movie.find();
        return movies
    },
    async getMovieByTitle( _, { title } ) {
        const searchMovieByTitle = await Movie.find( { title : title } );
        console.log( 'getting movie', searchMovieByTitle ); 
        return searchMovieByTitle 
    },
    async login(_,{email,password} ) {
        const verifyUser = await User.findOne( { email, password } ); //[]
        console.log(verifyUser)
        return verifyUser
    },
}

export default Query