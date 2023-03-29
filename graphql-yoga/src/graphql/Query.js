import Movie from "../models/Movie.js"

const Query = {

    async getMovies() {
        const movies = await Movie.find();
        return movies
    }
}

export default Query